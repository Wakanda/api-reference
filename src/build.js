/* eslint-disable no-console */
const glob = require('glob');
const { promisify } = require('util');
const { resolve } = require('path');
const { readFile, writeFile } = require('fs');
const { spawn } = require('child_process');

const glob$ = promisify(glob);
const readFile$ = promisify(readFile);
const writeFile$ = promisify(writeFile);

const SRC_FOLDER = resolve('src');

/**
 * Remove un-needed TS references
 * @param {String} str The string
 * @returns Cleaned output
 */
exports.sanitize = (str = '') => {
  return str.replace(new RegExp('///.*', 'g'), '');
}

/**
 * Concats all .ts file and output the content in a single file
 * @param {String} folder The base folder
 * @param {String} output The output file
 * @returns {boolean} true if everything was successfully done, else otherwise
 */
exports.concatAll = async (folder = 'api', output = 'build/wakanda.ts', isAddGlobal = true) => {
  let allTSFiles = [];
  let content;

  if (isAddGlobal === true) {
    allTSFiles.push('./global.ts');
  }

  try {
    const apiFiles = await glob$(`${folder}/**/*.d.ts`, {
      cwd: SRC_FOLDER,
    });
    allTSFiles = allTSFiles.concat(apiFiles);
  } catch (e) {
    console.warn('Unable to read API TS Files', folder, e);
  }

  // Add global.ts file then read all files
  const contents$ = allTSFiles.map(f => readFile$(resolve(SRC_FOLDER, f), {
    encoding: 'utf8',
  }));

  try {
    content = await Promise.all(contents$);
    content = content.join('');
    content = exports.sanitize(content);
  } catch (e) {
    console.error('Unable to read the content of TS files', e);
    return false;
  }

  try {
    await writeFile$(resolve(SRC_FOLDER, output), content, 'utf8');
  } catch (e) {
    console.error('Unable to write the content of TS files into the output file', e);
    return false;
  }

  return true;
};

/**
 * Generate JS doc
 */
exports.generate = () => new Promise((done) => {
  const cmd = spawn(
    'npx',
    [
      'typedoc',
      '--out',
      './docs',
      './api/application.d.ts',
    ],
    {
      cwd: SRC_FOLDER,
      stdio: 'inherit',
    },
  );

  cmd.on('close', (code) => {
    console.log(`typedoc process exited with code ${code}`);
    done();
  });

  cmd.on('error', (data) => {
    console.log(`err: ${data}`);
  });

  // cmd.stdout.on('data', (data) => {
  //   console.log(`stdout: ${data}`);
  // });

  // cmd.stderr.on('data', (data) => {
  //   console.log(`sterr: ${data}`);
  // });
});

/**
 * Sanitizes the file content
 * @param {String} filePath the path of the file to sanitize
 */
exports.sanitizeFile = async (filePath = './build/wakanda.ts') => {
  try {
    let content = await readFile$(resolve(SRC_FOLDER, filePath), {
      encoding: 'utf8'
    });
    content = exports.sanitize(content);
    await writeFile$(resolve(SRC_FOLDER, filePath), content, {
      encoding: 'utf8'
    });
  } catch (e) {
    console.error('Error occured while sanitizing the file %s', filePath, e);
    return false;
  }

  return true;
};

(async () => {
  console.log('Concatenating Wakanda API files...');
  await exports.concatAll();
  console.log('Concatenating Wakanda Model API files...');
  await exports.concatAll('model', 'build/model.ts', false);
  console.log('Generating documentation...');
  await exports.generate();
  console.log('Sanitizing wakanda.ts file...');
  await exports.sanitizeFile();
})();
