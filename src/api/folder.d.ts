///<reference path="./file.d.ts" />

interface Folder {
    /**
     * References a folder.
     * The folder does not have to exist.
     * 
     * #### Example 1: Get a reference to an existing folder
     * ```javascript
     * var myFolder = new Folder( 'PROJECT' );
     * console.log( myFolder.exists );
     * // true
     * ```
     * 
     * #### Example 2: Get a reference to a missing folder
     * ```javascript
     * var myFolder = new Folder( 'PROJECT/missing-folder' );
     * console.log( myFolder.exists );
     * // false
     * ```
     * 
     * @param path Absolute path of the folder to reference.
     */
    new (path: String): WAKFolderInstance;
    /**
     * Check if the path references a folder.
     * 
     * ```javascript
     * var myIsFolder = Folder.isFolder( 'PROJECT' );
     * console.log( myIsFolder );
     * // true
     * ```
     * 
     * @param path Absolute path to a folder
     * @returns `true` is the path references a folder, `false` otherwise.
     */
    isFolder(path: String): Boolean;
}

interface WAKFolderInstance {
    /**
     * Creation date for the folder.
     */
    readonly creationDate: Date;
    /**
     * `true` if the folder exists at the defined path, `false` otherwise.
     */
    readonly exists: Boolean;
    /**
     * Folder extension.
     */
    readonly extension: String;
    /**
     * Array of Files.
     */
    readonly files: Array<WAKFileInstance>;
    // /**
    // *FileSystem of the object.
    // */
    // filesystem: FileSystemSync;
    /**
     * First file found in the folder.
     */
    readonly firstFile: WAKFileInstance;
    /**
     * First folder (i.e., subfolder) in the folder.
     */
    readonly firstFolder: WAKFolderInstance;
    /**
     * Array of Folder objects.
     */
    folders: Array<WAKFolderInstance>;
    /**
     * Last modification date for the folder.
     */
    readonly modificationDate: Date;
    /**
     * Name of the folder without the path.
     */
    readonly name: String;
    /**
     * Name of the folder without the extension.
     */
    readonly nameNoExt: String;
    /**
     * Parent folder of the folder.
     */
    readonly parent: WAKFolderInstance;
    /**
     * Full path of the folder.
     */
    readonly path: String;
    /**
     * `true` if the folder is visible, `false` otherwise.
     */
    readonly visible: Boolean;
    /**
     * Creates a new folder on disk.
     * 
     * ```javascript
     * var myFolder = new Folder( 'PROJECT/my-created-folder' );
     * var myResult = myFolder.create();
     * console.log( myResult );
     * // true
     * ```
     * 
     * @throws An error if something goes wrong: folder already exists, invalid path, ...
     * @returns `true` if the folder is well created
     */
    create(): Boolean;
    /**
     * Calls `callback` function for each file at the first level of the folder.
     * 
     * #### Example 1: Basic usage
     * ```javascript
     * var folder = new Folder( 'PROJECT/' );
     * folder.forEachFile( function( file )
     * {
     *     console.log( file.path );
     * });
     * ```
     * 
     * #### Example 2: Override `this`
     * ```javascript
     * var folder = new Folder( 'PROJECT/' );
     * folder.forEachFile( function( file )
     * {
     *     console.log( this );
     * }, {data: 'some-data' } );
     * // {"data":"some-data"}
     * ```
     * 
     * @warning `break` is not working in `forEachFile`
     * @param callback Defines the function called for each file
     * @param callback.file Current file being processed
     * @param thisArg Defines `this` value of the callback
     */
    forEachFile(callback: (file: WAKFileInstance) => void, thisArg?: Object): void;
    /**
     * Calls `callback` function for each folder at the first level of the folder.
     * 
     * #### Example 1: Basic usage
     * ```javascript
     * var folder = new Folder( 'PROJECT/' );
     * folder.forEachFolder( function( folder )
     * {
     *     console.log( folder.path );
     * });
     * ```
     * 
     * #### Example 2: Override `this`
     * ```javascript
     * var folder = new Folder( 'PROJECT/' );
     * folder.forEachFolder( function( folder )
     * {
     *     console.log( this );
     * }, {data: 'some-data' } );
     * // {"data":"some-data"}
     * ```
     * 
     * @warning `break` is not working in `forEachFolder`
     * @param callback Defines the function called for each folder
     * @param callback.folder Current folder being processed
     * @param thisArg Defines `this` value of the callback
     */
    forEachFolder(callback: (folder: WAKFolderInstance) => void, thisArg?: Object): void;
    /**
     * Returns the size of the free space (expressed in bytes) available on the volume where the Folder object is stored.
     * @param quotas (default: `true`) `true` if consider the whole volume, `false` if consider only the allowed size for the quota
     */
    getFreeSpace(quotas?: Boolean): Number;
    /**
     * Returns the absolute URL of the Folder object.
     * @param encoding (default: `false`) `true` if encode the url, `false` otherwise.
     */
    getURL(encoding?: Boolean): String;
    /**
     * Returns the total size (expressed in bytes) of the volume where the Folder object is stored.
     */
    getVolumeSize(): Number;
    // /**
    // *puts the folder pointer on the next subfolder in an iteration of subfolders.
    // */
    // next() : Boolean;
    /**
     * Calls `callback` function for each file in the folder tree (first-level and sub-level folder).
     * 
     * #### Example 1: Basic usage
     * ```javascript
     * var folder = new Folder( 'PROJECT/' );
     * folder.parse( function( file, position, folder )
     * {
     *     console.log( '-----------------------------' );
     *     console.log( file.path );
     *     console.log( position );
     *     console.log( folder.path );
     * });
     * ```
     * 
     * #### Example 2: Override `this`
     * ```javascript
     * var folder = new Folder( 'PROJECT/' );
     * folder.parse( function( file, position, folder )
     * {
     *     console.log( this );
     * }, {data: 'some-data' } );
     * // {"data":"some-data"}
     * ```
     * 
     * @warning `break` is not working in `parse`
     * @param callback Defines the function called for each folder
     * @param thisArg Defines `this` value of the callback
     * @param callback.file  Current processed file
     * @param callback.position Position of the file currently being processed
     * @param callback.folder Folder of the processed file
     */
    parse(callback: (file: WAKFileInstance, position: Number, folder: WAKFolderInstance) => void, thisArg?: Object): void;
    /**
     * Removes the folder and its content from the disk.
     * @returns `true` if the folder is not here, `false` otherwise.
      */
    remove(): Boolean;
    /**
     * Removes the contents of the folder from the disk.
     */
    removeContent(): Boolean;
    /**
     * Rename the folder on disk.
     * 
     * ```javascript
     * var myFolder = new Folder( 'PROJECT/my-folder' );
     * // The folder must exists to be renamed
     * myFolder.create();
     * // The destination folder name must be free
     * myFolder.setName( 'my-renamed-folder' );
     * // myFolder always references the "my-folder" folder
     * // The referenced folder did not change with the setName() action.
     * console.log( myFolder.path );
     * // PROJECT/my-folder
     * ```
     * 
     * @warning The folder must exist on disk to be renamed
     * @warning The folder destination must be free
     * @param name New folder name
     * @returns `true` if the folder is successfully renamed
     * @throws An error if something goes wrong: folder already exists, invalid name, ...
     */
    setName(newName: String): void;
    // /**
    // *checks the validity of the pointer to the current folder within an iteration of folders
    // */
    // valid() : Boolean;
}