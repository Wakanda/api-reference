///<reference path="./folder.d.ts" />
///<reference path="./blob.d.ts" />

interface File {
    /**
     * References a file.
     * The file does not have to exist.
     * 
     * #### Example 1: Get a reference to an existing file
     * ```javascript
     * var myFile = new File( 'PROJECT/bootstrap.js' );
     * console.log( myFile.exists );
     * // true
     * ```
     * 
     * #### Example 2: Get a reference to a missing file
     * ```javascript
     * var myFile = new File( 'PROJECT/file-to-create.js' );
     * console.log( myFile.exists );
     * // false
     * ```
     * 
     * @param path Absolute path of the file to reference.
     */
    new (path: String): WAKFileInstance;
    /**
     * References a file.
     * The file does not have to exist.
     * 
     * #### Example 1: Get a reference to an existing file
     * ```javascript
     * var myFolder = new Folder( 'PROJECT/' );
     * var myFile = new File( myFolder, 'bootstrap.js' );
     * console.log( myFile.exists );
     * // true
     * ```
     * 
     * #### Example 2: Get a reference to a missing file
     * ```javascript
     * var myFolder = new Folder( 'PROJECT/' );
     * var myFile = new File( myFolder, 'file-to-create.js' );
     * console.log( myFile.exists );
     * // false
     * ```
     * 
     * @param folder Folder containing the file
     * @param fileName Name of the file to reference in the folder path
     */
    new (folder: WAKFolderInstance, fileName: String): WAKFileInstance;
    /**
     * Check if the path references a file.
     * 
     * ```javascript
     * var myIsFile = File.isFile( 'PROJECT/bootstrap.js' );
     * console.log( myIsFile );
     * // true
     * ```
     * 
     * @param path Absolute path to a file
     * @returns `true` is the path references a file, `false` otherwise.
     */
    isFile(path: String): Boolean;
}

interface WAKFileInstance extends WAKBlobInstance {
    /**
     * Creation date for the file.
     */
    readonly creationDate: Date;
    /**
     * `true` if the file exists at the defined path, `false` otherwise.
     */
    readonly exists: Boolean;
    /**
     * File extension.
     */
    readonly extension: String;
    // /**
    //  * FileSystem of the object.
    //  */
    // readonly filesystem: FileSystemSync;
    /**
     * Last modification date for the file if any.
     */
    readonly lastModifiedDate: any;
    /**
     * Name of the file with the extension and without the path.
     */
    readonly name: string;
    /**
     * Name of the file without the extension.
     */
    readonly nameNoExt: String;
    /**
     * Parent folder of the file.
     */
    readonly parent: WAKFolderInstance;
    /**
     * Full path of the file.
     */
    readonly path: String;
    /**
     * `true` if the file is read only, `false` otherwise.
     */
    readonly readOnly: Boolean;
    /**
     * `true` if the file is visible, `false` otherwise.
     */
    readonly visible: Boolean;
    /**
     * Creates a new file on disk.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/my-created-file.js' );
     * var myResult = myFile.create();
     * console.log( myResult );
     * // true
     * ```
     * 
     * @throws An error if something goes wrong: file already exists, invalid path, ...
     * @returns `true` if the file is well created
     */
    create(): Boolean;
    /**
     * Returns the size of the free space (expressed in bytes) available on the volume where the File object is stored.
     * @param quotas (default: `true`) `true` if consider the whole volume, `false` if consider only the allowed size for the quota
     */
    getFreeSpace(quotas?: Boolean): Number;
    /**
     * Returns the absolute URL of the File object.
     * @param encoding (default: `false`) `true` if encode the url, `false` otherwise.
     */
    getURL(encoding?: Boolean): String;
    /**
     * Returns the total size (expressed in bytes) of the volume where the File object is stored.
     */
    getVolumeSize(): Number;
    /**
     * Moves the file to the specified destination.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/my-file.js' );
     * myFile.create();
     * myFile.moveTo( 'PROJECT/my-moved-file.js', yes );
     * // myFile always references the "my-file.js" file
     * // The referenced file did not change with the moveTo() action.
     * console.log( myFile.path );
     * ```
     * 
     * @warning After the `moveTo()` action, the file referenced is still the source file and not the destination file. Therefore, the referenced file does not exist anymore.
     * @param file Destination file path
     * @param overwrite `true` if the file can be overwritten, `false` otherwise
     */
    moveTo(file: WAKFileInstance, overwrite?: Boolean): void;
    /**
     * Moves the file to the specified destination.
     * 
     * ```javascript
     * var mySourceFile = new File( 'PROJECT/my-file.js' );
     * var myDestinationFile = new File( 'PROJECT/my-moved-file.js' );
     * // The file must exists to be renamed
     * myFile.create();
     * myFile.moveTo( myDestinationFile, yes );
     * // myFile always references the "my-file.js" file
     * // The referenced file did not change with the moveTo() action.
     * console.log( myFile.path );
     * // PROJECT/my-file.js
     * ```
     * 
     * @warning After the `moveTo()` action, the file referenced is still the source file and not the destination file. Therefore, the referenced file does not exist anymore.
     * @param file Destination file path
     * @param overwrite `true` if the file can be overwritten, `false` otherwise
     */
    moveTo(file: String, overwrite?: Boolean): void;
    /**
     * Removes the file from the disk.
     * @returns `true` if the file is removed from disk, `false` otherwise.
      */
    remove(): Boolean;
    /**
     * Rename the file on disk.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/my-file.js' );
     * // The file must exists to be renamed
     * myFile.create();
     * // The destination file name must be free
     * myFile.setName( 'my-renamed-file.js' );
     * // myFile always references the "my-file.js" file
     * // The referenced file did not change with the setName() action.
     * console.log( myFile.path );
     * // PROJECT/my-file.js
     * ```
     * 
     * @warning The file must exist on disk to be renamed
     * @warning The file destination must be free
     * @param name New file name
     * @returns `true` if the file is successfully renamed
     * @throws An error if something goes wrong: file already exists, invalid name, ...
     */
    setName(name: String): Boolean;
}


// interface FileIterator extends File {
// 	/**
// 	*puts the file pointer on the next file within an iteration of files
// 	*/
// 	next() : Boolean;
// 	/**
// 	*checks the validity of the pointer to the current File object within an iteration of files
// 	*/
// 	valid() : Boolean;
// }
