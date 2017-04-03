/// <reference path="./binarystream.d.ts" />
/// <reference path="./blob.d.ts" />
/// <reference path="./buffer.d.ts" />
/// <reference path="./connectionsession.d.ts" />
/// <reference path="./connectionsessioninfo.d.ts" />
/// <reference path="./console.d.ts" />
/// <reference path="./datastore.d.ts" />
/// <reference path="./directory.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./folder.d.ts" />
/// <reference path="./group.d.ts" />
/// <reference path="./httpServer.d.ts" />
/// <reference path="./image.d.ts" />
/// <reference path="./keyvaluestorage.d.ts" />
/// <reference path="./module.d.ts" />
/// <reference path="./mutex.d.ts" />
/// <reference path="./nodeworker.d.ts" />
/// <reference path="./port.d.ts" />
/// <reference path="./progressindicator.d.ts" />
/// <reference path="./sharedworker.d.ts" />
/// <reference path="./socket.d.ts" />
/// <reference path="./socketsync.d.ts" />
/// <reference path="./systemworker.d.ts" />
/// <reference path="./textstream.d.ts" />
/// <reference path="./user.d.ts" />
/// <reference path="./xmlhttprequest.d.ts" />

interface Application extends WAKAuthentication, WAKData, WAKCore, WAKThreads, WAKFileSystem, WAKHTTP, WAKStorage { }

interface WAKAuthentication {
    /**
     * References the directory of the application.
     */
    directory : WAKDirectory;
}

interface WAKData {
    /**
     * References the datastore of the application.
     */
    ds: Datastore;
    /**
    *Starts the backup of the closed datastore defined by model and data.
    */
    backupDataStore(model: WAKFileInstance, data: WAKFileInstance, settings: Object, options?: Object): WAKFileInstance;
    /**
    *Compacts the datastore's data file designated by model and data, and generates the compactedData data file.
    */
    compactDataStore(model: WAKFileInstance, data: WAKFileInstance, options?: Object, compactedData?: WAKFileInstance): void;
    /**
    *Returns an Array that lists the 20 most recent backup manifests recorded in the specified backup registry.
    */
    getBackupRegistry(registryFolder: WAKFolderInstance): Array<Object>;
    /**
    *Returns an Object containing the default backup settings for the solution.
    */
    getBackupSettings(): Object;
    /**
    *Returns information about the journal of the datastore whose data file you passed in dataFile.
    */
    getJournalInfo(dataFile: WAKFileInstance, options?: Object): Object;
    /**
    *Returns information about the journal of the datastore whose data file you passed in dataFile.
    */
    getJournalInfo(dataFile: String, options?: Object): Object;
    /**
    *Returns an Array that lists the 20 most recent backup manifests recorded in the backup registry default folder of the application.
    */
    getLastBackups(): Array<Object>;
    /**
    *Allows you to partially or fully integrate a journal file into a datastore.
    */
    integrateDataStoreJournal(model: WAKFileInstance, data: WAKFileInstance, journal: WAKFileInstance, options?: Object): Object;
    /**
    *Repairs the datastore's data file defined by model and data, and generates the repairedData data file.
    */
    repairDataStore(model: WAKFileInstance, data: WAKFileInstance, options?: Object, repairedData?: WAKFileInstance): void;
    /**
    *Resets the current journal of the datastore whose data file you passed in dataFile.
    */
    resetDataStoreJournal(dataFile: WAKFileInstance): Object;
    /**
    *Resets the current journal of the datastore whose data file you passed in dataFile.
    */
    resetDataStoreJournal(dataFile: String): Object;
    /**
    *Allows you to restore a data folder previously archived.
    */
    restoreDataStore(manifest: WAKFileInstance, restoreFolder: WAKFolderInstance, options?: Object): Object;
    /**
    *Allows you to restore a data folder previously archived.
    */
    restoreDataStore(config: Object, options?: Object): Object;
    /**
    *Verifies the internal structure of the objects contained in the datastore designated by model and data.
    */
    verifyDataStore(model: WAKFileInstance, data: WAKFileInstance, options: Object): void;
}

interface WAKCore {
    /**
     * References the console of the application.
     */
    console: WAKConsole;
    /**
     * References the buffer constructor.
     */
    Buffer: WAKBufferInstance;
    /**
     * Creates a valid UUID string.
     * 
     * ```javascript
     * generateUUID();
     * // 9AE457F4B557BD7895AD4712345ABCDE
     * ```
     * 
     * @returns Returns a string with the generated UUID
     */
    generateUUID(): String;
    /**
     * Gets the named progress indicator object.
     */
    getProgressIndicator(name: String): ProgressIndicator;
    /**
     * Creates a progress indicator.
     * @param numElements Number of elements to count
     * @param sessionName Name of execution session for progress indicator
     * @param stoppable `true` if the progress indicator can be stopped, `false` otherwise
     * @param unused Not used, always pass an empty string ("")	
     * @param name Unique name of object on the server
     */
    ProgressIndicator(numElements: Number, sessionName?: String, stoppable?: Boolean, unused?: String, name?: String): ProgressIndicator;
}

interface WAKThreads {
    /**
     * Ends the current thread.
     * 
     * ```javascript
     * close();
     * ```
     */
    close(): void;
    /**
     * Exit pending `wait()` in the current thread. Does not impact pending `wait()` in other threads.
     * 
     * ```javascript
     * exitWait();
     * ```
     */
    exitWait(): void;
    /**
     * References the node worker constructor.
     */
    NodeWorker: NodeWorker;
    /**
     * References the shared worker constructor.
     */
    SharedWorker: SharedWorker;
    /**
     * References the system worker constructor.
     */
    SystemWorker: SystemWorker;
    /**
     * References the mutex constructor.
     */
    Mutex: Mutex;
    /**
     * Requires an SSJS module (CommonJS compliant).
     * This module must be defined in `PROJECT/modules/`.
     * 
     * ```javascript
     * // Get the module defined in PROJECT/modules/mail
     * var mail = require('mail');
     * // Get the module defined in PROJECT/modules/customers/platinium
     * var platiniumCustomers = require('/customers/platinium'); 
     * ```
     * 
     * @param moduleId Describes the module id and path
     * @returns Returns the exported API of the given module
     */
    require(moduleId: String): Module;
    /**
     * Requires a NodeJS module.
     * This module must be defined in `PROJECT/node_modules`.
     * 
     * ```javascript
     * // Get the Node module defined in PROJECT/node_modules/http
     * var http = requireNode('http'); 
     * ```
     * 
     * @warning This API is only available inside a Node worker (See NodeWorker for more details)
     * @param moduleId Describes the module id and path
     * @returns Returns the exported API of the given module
     */
    requireNode(moduleId: String): Module;
    /**
     * Allows a thread to handle events and to continue to exist after the complete code executes.
     * 
     * ```javascript
     * // Wait for 100ms
     * wait(100);
     * // Wait for the end of time
     * wait();
     * ```
     * 
     * @param timeout Milliseconds to wait for. If none, it's an infinite wait. Can be squeeze with an `exitWait()`.
     */
    wait(timeout?: Number): void;
}

interface WAKFileSystem {
    BinaryStream: BinaryStream;
    Blob: Blob;
    File: File;
    Folder: Folder;
    TextStream: TextStream;
    /**
     * Loads an image from its path.
     * 
     * ```javascript
     * var myPict = loadImage( 'C:/images/tulips.jpg' );
     * var newPict = new ds.Pict();
      * newPict.name = 'Flower';
     * newPict.photo = myPict;
     * newPict.save();
     * ```
     * 
     * @warning The Image API is partially supported on Linux platforms:
     * - You can only load images of the PNG or JPG types
     * - For more details, check [doc center](http://doc.wakanda.org/home2.en.html#/Images/Image-Instances.201-659829.en.html)
     * @param file Image path to load (POSIX path). Supports PNG and JPG files.
     * @returns Returns the image through Image object.
     */
    loadImage(file: String): Image;
    /**
     * Loads an image from a File object.
     * 
     * ```javascript
     * var myFile = new File( 'C:/images/tulips.jpg' );
     * var myPict = loadImage(myFile);
     * var newPict = new ds.Pict();
     * newPict.name = 'Flower';
     * newPict.photo = myPict;
     * newPict.save();
     * ```
     * 
     * @warning The Image API is partially supported on Linux platforms:
     * - You can only load images of the PNG or JPG types
     * - For more details, check [doc center](http://doc.wakanda.org/home2.en.html#/Images/Image-Instances.201-659829.en.html)
     * @param file File object that reference an image. Supports PNG and JPG files.
     * @returns Returns the image through Image object.
     */
    loadImage(file: WAKFileInstance): Image;
    /**
     * Loads the content of a text file from its path.
     * 
     * ```javascript
     * var myText = loadText( 'PROJECT/bootstrap.js' );
     * console.log(myText);
     * ```
     * 
     * @param file File path to load (POSIX path).
     * @param charset (default: 7) Defines the charset to use to read the file. See [charset values](http://doc.wakanda.org/home2.en.html#/Wakanda/0.Beta/TextStream.301-684310.en.html) for more details.
     * @returns Returns a string with the full text file content.
     */
    loadText(file: String, charset?: Number): String;
    /**
     * Loads the content of a text file from a File object.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/bootstrap.js' );
     * var myText = loadText( myFile );
     * console.log( myText );
     * ```
     * 
     * @param file File object that reference a text file.
     * @param charset (default: 7) Defines the charset to use to read the file. See [charset values](http://doc.wakanda.org/home2.en.html#/Wakanda/0.Beta/TextStream.301-684310.en.html) for more details.
     * @returns Returns a string with the full text file content.
     */
    loadText(file: WAKFileInstance, charset?: Number): String;
    /**
     * Saves the text into a file.
     * 
     * ```javascript
     * saveText( 'Hello World ! Here is my text saved.', 'C:/texts/chapter-1.txt' );
     * ```
     * 
     * @param textToSave Text string to save.
     * @param file File path where to update (POSIX path).
     * @param charset (default: 7) Defines the charset of the text string. See [charset values](http://doc.wakanda.org/home2.en.html#/Wakanda/0.Beta/TextStream.301-684310.en.html) for more details.
     */
    saveText(textToSave: String, file: String, charset?: Number): void;
    /**
     * Saves the text into a file.
     * 
     * ```javascript
     * var myFile = new File( 'C:/texts/chapter-1.txt' );
     * saveText( 'Hello World ! Here is my text saved.', myFile );
     * ```
     * 
     * @param textToSave Text string to save.
     * @param file File path where to update (POSIX path).
     * @param charset (default: 7) Defines the charset of the text string. See [charset values](http://doc.wakanda.org/home2.en.html#/Wakanda/0.Beta/TextStream.301-684310.en.html) for more details.
     */
    saveText(textToSave: String, file: WAKFileInstance, charset?: Number): void;
}

interface WAKHTTP {
    /**
     * Reference the HTTP server of the application.
     */
    httpServer: HttpServer;
    XMLHttpRequest: XMLHttpRequest;
}

interface WAKStorage {
    /**
     * References the HTTP session storage of the application.
     */
    sessionStorage: LockableKeyValueStorage;
    /**
     * References the application storage.
     */
    storage: LockableKeyValueStorage;

}
