var fs		= require('fs');

function getGlobalDeclaration(){

	var content = fs.readFileSync('global.ts', 'utf8');
	return content;
}

function concatenateFiles(folderPath, outputFile, initialContent){
	var files  = fs.readdirSync(folderPath);
	var output = initialContent || "";
	
	files.forEach(function(file){
		// Concat only .d.ts files
		if (! file.match(/.*\.d\.ts$/gi) ){
 			return;
		}

		output += fs.readFileSync(folderPath + "/" + file, 'utf8');		
	});
	output = cleanOutput(output);
	fs.writeFileSync(outputFile, output, 'utf8');
}

function cleanOutput(output){
	output = output.replace(new RegExp("///.*","g"), "");
	
	return output;
}

function runCommand(cmd, callback){
	var exec = require('child_process').exec;
	
	exec(cmd,callback || function(err, stdout, stderr){
		console.log('err:', err);
		console.log('stout:', stdout);
		console.log('sterr:', stderr);
	});
}

console.log("Reading global scope declarations..");
var globalDeclarations = getGlobalDeclaration();
console.log("Concatenating Wakanda API files..");
concatenateFiles("api", "build/wakanda.ts", globalDeclarations);
console.log("Concatenating Wakanda Model API files..");
concatenateFiles("model", "build/model.ts");
console.log("Generating documentation..");
runCommand("typedoc --theme default --hideGenerator --nolib --ignoreCompilerErrors --includeDeclarations --mode file --readme ./index.md --out ./docs ./api/application.d.ts");
var outputFile = "./build/wakanda.ts";
var output = cleanOutput(fs.readFileSync(outputFile, 'utf8'));
fs.writeFileSync(outputFile, output, 'utf8');
console.log("Done.");