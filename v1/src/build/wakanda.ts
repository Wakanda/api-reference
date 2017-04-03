

/*
 * Properties
 */
var application:Application;
var administrator = application.administrator;
var console = application.console;
var directory = application.directory;
var ds = application.ds;
var httpServer = application.httpServer;
var name = application.name;
var os = application.os;
var permissions = application.permissions;
var process = application.process;
var sessionStorage = application.sessionStorage;
var settings = application.settings;
var solution = application.solution;
var storage = application.storage;
var wildchar = application.wildchar;
/*
 * Methods
 */
var JSONToXml = application.JSONToXml;
var Mutex = application.Mutex;
var ProgressIndicator = application.ProgressIndicator;
var XmlToJSON = application.XmlToJSON;
var addHttpRequestHandler = application.addHttpRequestHandler;
var addRemoteStore = application.addRemoteStore;
var backupDataStore = application.backupDataStore;
var clearInterval = application.clearInterval;
var clearTimeout = application.clearTimeout;
var close = application.close;
var compactDataStore = application.compactDataStore;
var createUserSession = application.createUserSession;
var currentSession = application.currentSession;
var currentUser = application.currentUser;
var dateToIso = application.dateToIso;
var displayNotification = application.displayNotification;
var exitWait = application.exitWait;
var garbageCollect = application.garbageCollect;
var generateUUID = application.generateUUID;
var getBackupRegistry = application.getBackupRegistry;
var getBackupSettings = application.getBackupSettings;
var getFolder = application.getFolder;
var getItemsWithRole = application.getItemsWithRole;
var getJobManager = application.getJobManager;
var getJournalInfo = application.getJournalInfo;
var getLastBackups = application.getLastBackups;
var getProgressIndicator = application.getProgressIndicator;
var getSession = application.getSession;
var getSettingFile = application.getSettingFile;
var getURL = application.getURL;
var getURLPath = application.getURLPath;
var getURLQuery = application.getURLQuery;
var getUserSessions = application.getUserSessions;
var getWalibFolder = application.getWalibFolder;
var importScripts = application.importScripts;
var include = application.include;
var integrateDataStoreJournal = application.integrateDataStoreJournal;
var isoToDate = application.isoToDate;
var loadImage = application.loadImage;
var loadText = application.loadText;
var loginByKey = application.loginByKey;
var loginByPassword = application.loginByPassword;
var logout = application.logout;
var openRemoteStore = application.openRemoteStore;
var removeHttpRequestHandler = application.removeHttpRequestHandler;
var repairDataStore = application.repairDataStore;
var requestFileSystemSync = application.requestFileSystemSync;
var require = application.require;
var resetDataStoreJournal = application.resetDataStoreJournal;
var resolveLocalFileSystemSyncURL = application.resolveLocalFileSystemSyncURL;
var restoreDataStore = application.restoreDataStore;
var saveText = application.saveText;
var setCurrentSession = application.setCurrentSession;
var setInterval = application.setInterval;
var setTimeout = application.setTimeout;
var verifyDataStore = application.verifyDataStore;
var wait = application.wait;

/*
 * Constructors
 */
var BinaryStream = application.BinaryStream;
var Blob = application.Blob;
var Buffer = application.Buffer;
var File = application.File;
var FileSystemSync = application.FileSystemSync;
var Folder = application.Folder;
var SharedWorker = application.SharedWorker;
var SystemWorker = application.SystemWorker;
var TextStream = application.TextStream;
var Worker = application.Worker;
var XMLHttpRequest = application.XMLHttpRequest;



























interface Application {
	
	/**
	*True if the current application is defined as the solution's administration application
	*/
	administrator: Boolean;
	/**
	*Global application object
	*/
	application: Application;
	/**
	*Console of the application
	*/
	console: Console;
	/**
	*Reference to the solution's directory
	*/
	directory: Directory;
	/**
	*Reference to the application's default datastore
	*/
	ds: Datastore;
	/**
	*HTTP server for the current application
	*/
	httpServer: HttpServer;
	/**
	*Name of the current application
	*/
	name: String;
	/**
	*Operating System object
	*/
	os: OS;
	/**
	*Defined permissions for the project
	*/
	permissions: Permissions;
	/**
	*Wakanda information
	*/
	process: Process;
	/**
	*HTTP session storage for the application
	*/
	sessionStorage: KeyValueStorage;
	/**
	*Current project settings
	*/
	settings: Object;
	/**
	*Solution running on the server
	*/
	solution: Solution;
	/**
	*Project storage for the application
	*/
	storage: KeyValueStorage;
	/**
	*Wildcard character to use in queries (*)
	*/
	wildchar: String;
	BinaryStream:BinaryStream;
    Blob:Blob;
	Buffer:Buffer;
	File:File;
	FileSystemSync:FileSystemSync;
	Folder:Folder;
	SharedWorker:SharedWorker;
	SystemWorker:SystemWorker;
	TextStream:TextStream;
	Worker:Worker;
	XMLHttpRequest:XMLHttpRequest;
	/**
	*installs a request handler function on the server
	* @deprecated use httpServer.addRequestHandler()
	*/
	addHttpRequestHandler(pattern: String, filePath: String, functionName: String) : void;
	/**
	*adds the remote datastore defined by params to the current project and maintains a global reference to it
	*/
	addRemoteStore(storeName: String, params: Object) : Datastore;
	/**
	*starts the backup of the closed datastore defined by model and data
	*/
	backupDataStore(model: File, data: File, settings: Object, options?: Object) : File;
	/**
	*cancels the timerID scheduler previously set by the setInterval( ) method
	*/
	clearInterval(timerID: Number) : void;
	/**
	*cancels the timerID timeout previously set by the setTimeout( ) method
	*/
	clearTimeout(timerID: Number) : void;
	/**
	*ends the thread from which it is called
	*/
	close() : void;
	/**
	*compacts the datastore's data file designated by model and data, and generates the compactedData data file.
	*/
	compactDataStore(model: File, data: File, options?: Object, compactedData?: File) : void;
	/**
	*opens a new user session on the server with the properties you passed in sessionObj and sets it as the current session
	*/
	createUserSession(sessionObj: ConnectionSessionInfo, keepPreviousSession?: Boolean) : void;
	/**
	*returns an object identifying the current session under which the current user is actually running on the server
	* @deprecated use directory.currentSession
	*/
	currentSession() : ConnectionSession;
	/**
	*returns the user who opened the current user session on the server
	* @deprecated use directory.currentUser
	*/
	currentUser() : User;
	/**
	*converts the JavaScript date object you passed in the dateObject parameter into an ISO format string
	*/
	dateToIso(dateObject: Date) : String;
	/**
	*allows you to display a system notification window on the server machine
	*/
	displayNotification(message: String, title?: String, critical?: Boolean) : void;
	/**
	*stops all pending wait( ) loops in the thread from which it is called
	*/
	exitWait() : void;
	/**
	*launches the garbage collector on all sleeping contexts
	*/
	garbageCollect() : void;
	/**
	*returns a valid UUID string (32 chars) that you can use for your application needs
	*/
	generateUUID() : String;
	/**
	*returns an array that lists the 20 most recent backup manifests recorded in the specified backup registry
	*/
	getBackupRegistry(registryFolder: Folder) : Array<Object>;
	/**
	*returns an Object containing the default backup settings for the solution
	*/
	getBackupSettings() : Object;
	/**
	*returns the folder containing the application file (i.e., the project file with the .waProject extension)
	*/
	getFolder(kind: String, format?: Boolean) : Folder;
	/**
	*returns the folder containing the application file (i.e., the project file with the .waProject extension)
	*/
	getFolder(kind: String, format?: String) : Folder;
	/**
	*returns the item associated with the role you passed as a parameter
	*/
	getItemsWithRole(role: String) : File;
	/**
	*returns the Job Manager interface available for the application
	*/
	getJobManager() : JobManager;
	/**
	*returns information about the journal of the datastore whose data file you passed in dataFile
	*/
	getJournalInfo(dataFile: File, options?: Object) : Object;
	/**
	*returns information about the journal of the datastore whose data file you passed in dataFile
	*/
	getJournalInfo(dataFile: String, options?: Object) : Object;
	/**
	*returns an array that lists the 20 most recent backup manifests recorded in the backup registry default folder of the application
	*/
	getLastBackups() : Array<Object>;
	/**
	*returns the ProgressIndicator type object whose name you passed in the name parameter
	*/
	getProgressIndicator(name: String) : ProgressIndicator;
	/**
	*returns the active ConnectionSession object whose ID property matches the sessionID passed in parameter
	*/
	getSession(sessionID: String) : ConnectionSession;
	/**
	*returns a reference or the path to the file containing the application setting whose ID you passed in settingID
	*/
	getSettingFile(settingID: String, kind: String, format?: Boolean) : File;
	/**
	*returns a reference or the path to the file containing the application setting whose ID you passed in settingID
	*/
	getSettingFile(settingID: String, kind: String, format?: String) : File;
	/**
	*returns the current application URL for a given protocol
	*/
	getURL(protocol: String, secured?: Boolean) : String;
	/**
	*returns the url passed in the parameter as an array of strings
	*/
	getURLPath(url: String) : Array<String>;
	/**
	*returns in an object the contents of the url's "query string", which was passed as a parameter
	*/
	getURLQuery(url: String) : Object;
	/**
	*returns an array of user sessions running on the server for the current application
	*/
	getUserSessions(user?: User) : Array<ConnectionSession>;
	/**
	*returns an array of user sessions running on the server for the current application
	*/
	getUserSessions(user?: String) : Array<ConnectionSession>;
	/**
	*returns Wakanda Server's "walib" folder, containing the libraries and services available client-side
	*/
	getWalibFolder(kind: String, format?: Boolean) : Folder;
	/**
	*returns Wakanda Server's "walib" folder, containing the libraries and services available client-side
	*/
	getWalibFolder(kind: String, format?: String) : Folder;
	/**
	*import and execute any JavaScript file(s) in the current JavaScript context
	*/
	importScripts(scriptPath: String) : void;
	/**
	*references a JavaScript file from a parent JavaScript file
	*/
	include(file: File, relativePath?: String, refresh?: String) : void;
	/**
	*references a JavaScript file from a parent JavaScript file
	*/
	include(file: File, relativePath?: String, refresh?: Boolean) : void;
	/**
	*references a JavaScript file from a parent JavaScript file
	*/
	include(file: String, relativePath?: String, refresh?: String) : void;
	/**
	*references a JavaScript file from a parent JavaScript file
	*/
	include(file: String, relativePath?: String, refresh?: Boolean) : void;
	/**
	*allows you to partially or fully integrate a journal file into a datastore
	*/
	integrateDataStoreJournal(model: File, data: File, journal: File, options?: Object) : Object;
	/**
	*converts the ISO date string passed in the isoDate parameter into a standard JavaScript format
	*/
	isoToDate(isoDate: String) : Date;
	/**
	*returns a JSON string converted into an XML string
	*/
	JSONToXml(jsonText: String, jsonFormat: String, rootElement: String) : String;
	/**
	*loads the image stored in a file referenced by the file parameter and returns an image object
	*/
	loadImage(file: File) : Image;
	/**
	*loads the image stored in a file referenced by the file parameter and returns an image object
	*/
	loadImage(file: String) : Image;
	/**
	*loads the text stored in a file referenced by the file parameter and returns a string containing this text
	*/
	loadText(file: File, charset?: Number) : String;
	/**
	*loads the text stored in a file referenced by the file parameter and returns a string containing this text
	*/
	loadText(file: String, charset?: Number) : String;
	/**
	*authenticates a user by their name and key and, in case of success, opens a new user Session on the server
	*/
	loginByKey(name: String, key: String, timeOut?: Number) : Boolean;
	/**
	*authenticates a user by their name and password and, in case of success, opens a new user session on the server
	*/
	loginByPassword(name: String, password: String, timeOut?: Number) : Boolean;
	/**
	*logs out the user running the current session on the Wakanda server
	*/
	logout() : Boolean;
	/**
	*creates a new mutex object that will allow you to control multithreaded concurrent accesses to JavaScript code
	*/
	Mutex(key: String) : Storage;
	/**
	*opens the remote datastore defined by params in the current solution and returns a reference to it
	*/
	openRemoteStore(params: Object) : Datastore;
	/**
	*creates a new object of type ProgressIndicator on the server and specifies its properties
	*/
	ProgressIndicator(numElements: Number, sessionName?: String, stoppable?: Boolean, unused?: String, name?: String) : ProgressIndicator;
	/**
	*creates a new object of type ProgressIndicator on the server and specifies its properties
	*/
	ProgressIndicator(numElements: Number, sessionName?: String, stoppable?: String, unused?: String, name?: String) : ProgressIndicator;
	/**
	*uninstalls an existing HTTP request handler function running on the server
	* @deprecated use httpServer.removeRequestHandler()
	*/
	removeHttpRequestHandler(pattern: String, filePath: String, functionName: String) : void;
	/**
	*repairs the datastore's data file defined by model and data, and generates the repairedData data file.
	*/
	repairDataStore(model: File, data: File, options?: Object, repairedData?: File) : void;
	/**
	*requests a FileSystemSync object referencing a sandboxed folder or file where application data can be stored
	*/
	requestFileSystemSync(type: Number, size?: Number) : FileSystemSync;
	/**
	*requests a FileSystemSync object referencing a sandboxed folder or file where application data can be stored
	*/
	requestFileSystemSync(type: String, size?: Number) : FileSystemSync;
	/**
	*returns the exported API of a CommonJS compliant Module whose identifier you pass in id
	*/
	require(id: String) : Module;
	/**
	*resets the current journal of the datastore whose data file you passed in dataFile
	*/
	resetDataStoreJournal(dataFile: File) : Object;
	/**
	*resets the current journal of the datastore whose data file you passed in dataFile
	*/
	resetDataStoreJournal(dataFile: String) : Object;
	/**
	*allows the user to look up the filesystem for a file or directory referred to by a local url
	*/
	resolveLocalFileSystemSyncURL(url: String) : EntrySync;
	/**
	*allows you to restore a data folder previously archived
	*/
	restoreDataStore(manifest: File, restoreFolder: Folder, options?: Object) : Object;
	/**
	*allows you to restore a data folder previously archived
	*/
	restoreDataStore(config: Object, options?: Object) : Object;
	/**
	*saves the text you passed to the textToSave parameter in the file parameter
	*/
	saveText(textToSave: String, file: File, charset?: Number) : void;
	/**
	*saves the text you passed to the textToSave parameter in the file parameter
	*/
	saveText(textToSave: String, file: String, charset?: Number) : void;
	/**
	*sets the session whose UUID is passed in sessionID as the new current session of the running thread
	*/
	setCurrentSession(sessionID: String, forceExpire?: Boolean) : void;
	/**
	*schedules JavaScript code to be run every timeout milliseconds
	*/
	setInterval(handler: Function, timeout: Number, ...args: any[]) : Number;
	/**
	*to schedule JavaScript code to be executed after a given delay
	*/
	setTimeout(handler: Function, timeout: Number, ...args: any[]) : Number;
	/**
	*verifies the internal structure of the objects contained in the datastore designated by model and data.
	*/
	verifyDataStore(model: File, data: File, options: Object) : void;
	/**
	*allows a thread to handle events and to continue to exist after the complete code executes
	*/
	wait(timeout?: Number) : Boolean;
	/**
	*returns an XML string converted into a JSON string
	*/
	XmlToJSON(xmlText: String, jsonFormat?: String, rootElement?: String) : String;
}

	interface BinaryStream {
		/**
		*Constructor method: creates a new BinaryStream object
		*/
		new(binary: String, readMode?: String, timeOut?: Number) : BinaryStream;
		/**
		*Constructor method: creates a new BinaryStream object
		*/
		new(binary: File, readMode?: String, timeOut?: Number) : BinaryStream;
		/**
		*Constructor method: creates a new BinaryStream object
		*/
		new(binary: SocketSync, readMode?: String, timeOut?: Number) : BinaryStream;
		/**
		*Constructor method: creates a new BinaryStream object
		*/
		new(binary: Socket, readMode?: String, timeOut?: Number) : BinaryStream;
		/**
		*indicates that the next reading of structured values in the BinaryStream object requires a byte swap
		*/
		changeByteOrder() : void;
		/**
		*closes the file referenced in the BinaryStream object
		*/
		close() : void;
		/**
		*saves the buffer contents to the disk file referenced in the BinaryStream object
		*/
		flush() : void;
		/**
		*creates a new BLOB object containing the next sizeToRead data in the BinaryStream object
		*/
		getBlob(sizeToRead: Number) : Blob;
		/**
		*returns a new Buffer object containing the next sizeToRead data in the BinaryStream object
		*/
		getBuffer(sizeToRead: Number) : Buffer;
		/**
		*returns a number representing the next byte from the BinaryStream object
		*/
		getByte() : Number;
		/**
		*returns the next long number (if present) from the BinaryStream object
		*/
		getLong() : Number;
		/**
		*returns the next long64 number (if present) from the BinaryStream object
		*/
		getLong64() : Number;
		/**
		*returns the current position of the cursor in the BinaryStream object
		*/
		getPos() : Number;
		/**
		*returns the next real (if present) from the BinaryStream object
		*/
		getReal() : Number;
		/**
		*returns the size of the stream
		*/
		getSize() : Number;
		/**
		*returns the next string (if present) from the BinaryStream object
		*/
		getString() : String;
		/**
		*returns the next word, i.e., a binary integer (if present) from the BinaryStream object
		*/
		getWord() : Number;
		/**
		*returns True if the current data reading in the BinaryStream object is in byte swap mode
		*/
		isByteSwapping() : Boolean;
		/**
		*writes the BLOB you passed as the blob parameter in the BinaryStream object at the current cursor location
		*/
		putBlob(blob: Blob, offset: Number, size?: Number) : void;
		/**
		*writes the Buffer you passed as the buffer parameter in the BinaryStream object at the current cursor location
		*/
		putBuffer(buffer: Buffer, offset: Number, size?: Number) : void;
		/**
		*writes the byte value you passed as the parameter in the BinaryStream object at the current cursor location
		*/
		putByte(byteValue: Number) : void;
		/**
		*writes the long value you passed as the parameter in the BinaryStream object at the current cursor location
		*/
		putLong(longValue: Number) : void;
		/**
		*writes the long64 value you passed as the parameter in the BinaryStream object at the current cursor location
		*/
		putLong64(long64Value: Number) : void;
		/**
		*writes the real value you passed as the parameter in the BinaryStream object at the current cursor location
		*/
		putReal(realValue: Number) : void;
		/**
		*writes the string value you passed as the parameter in the BinaryStream object at the current cursor location
		*/
		putString(url: String) : void;
		/**
		*writes the byte word (i.e., an integer value) you passed as the parameter in the BinaryStream object at the current cursor location
		*/
		putWord(wordValue: Number) : void;
		/**
		*moves the stream cursor to the position you passed in offset in the BinaryStream object
		*/
		setPos(offset: Number) : void;
	}

interface Blob{
	/**
	*constructor of the class objects of type Blob
	*/
	new(size: Number, filler?: Number, mimeType?: String) : Blob;
	/**
	*Size of the Blob in bytes
	*/
	size: Number;
	/**
	*Media type of the Blob expressed as MIME or "" if unknown
	*/
	type: String;
	/**
	*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
	*/
	copyTo(destination: File, overwrite?: Boolean) : void;
	/**
	*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
	*/
	copyTo(destination: File, overwrite?: String) : void;
	/**
	*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
	*/
	copyTo(destination: String, overwrite?: Boolean) : void;
	/**
	*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
	*/
	copyTo(destination: String, overwrite?: String) : void;
	/**
	*creates a new Blob object by referencing the contents of the bytes of the Blob to which it is applied, from start to end
	*/
	slice(start: Number, end: Number, mimeType?: String) : Blob;
	/**
	*returns a Buffer object containing a copy of the Blob bytes
	*/
	toBuffer() : Buffer;
	/**
	*get a string representation of the Blob contents
	*/
	toString(stringFormat?: String) : String;
}

	interface Buffer {
		/**
		*constructor of the class objects of the Buffer type
		*/
		new(definition: Number, encoding?: String) : Buffer;
		/**
		*Number of bytes of the buffer
		*/
		length: Number;
		/**
		*copies into targetBuffer the Buffer to which it is applied
		*/
		copy(targetBuffer: Buffer, targetOffset: Number, sourceOffset: Number, sourceEnd?: Number) : void;
		/**
		*fills the Buffer to which it is applied with the character you passed in value
		*/
		fill(value: String, offset: Number, length?: Number) : void;
		/**
		*returns a 64 bit double value read from the Buffer with the Big Endian format
		*/
		readDoubleBE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a 64 bit double value read from the Buffer with the Little Endian format
		*/
		readDoubleLE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a 32-bit float value read from the Buffer with the Big Endian format
		*/
		readFloatBE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a 32-bit float value read from the Buffer with the Little Endian format
		*/
		readFloatLE(offset: Number, noAssert: Boolean) : Number;
		/**
		*returns an unsigned 16-bit integer value read from the Buffer with the Big Endian format
		*/
		readInt16BE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a signed 16-bit integer value read from the Buffer with the Little Endian format
		*/
		readInt16LE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a signed 24-bit integer value read from the Buffer with the Big Endian format
		*/
		readInt24BE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a signed 24-bit integer value read from the Buffer with the Little Endian format
		*/
		readInt24LE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a signed 32-bit integer value read from the Buffer with the Big Endian format
		*/
		readInt32BE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a signed 32-bit integer value read from the Buffer with the Little Endian format
		*/
		readInt32LE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a signed 8-bit integer value read from the Buffer to which it is applied
		*/
		readInt8(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns an unsigned 16-bit integer value read from the Buffer with the Big Endian format
		*/
		readUInt16BE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns an unsigned 16-bit integer value read from the Buffer with the Little Endian format
		*/
		readUInt16LE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns an unsigned 24-bit integer value read from the Buffer with the Big Endian format
		*/
		readUInt24BE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns an unsigned 24-bit integer value read from the Buffer with the Little Endian format
		*/
		readUInt24LE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns an unsigned 32-bit integer value read from the Buffer with the Big Endian format
		*/
		readUInt32BE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns an unsigned 32-bit integer value read from the Buffer with the Little Endian format
		*/
		readUInt32LE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns an unsigned 8-bit integer value read from the Buffer to which it is applied
		*/
		readUInt8(offset: Number, noAssert?: Boolean) : Number;
		/**
		*creates a new Buffer object by referencing the contents of the bytes array of the Buffer to which it is applied, from start to end
		*/
		slice(start: Number, end?: Number) : Buffer;
		/**
		*returns a Blob object containing a copy of the Buffer bytes
		*/
		toBlob(mimeType?: String) : Blob;
		/**
		*converts the buffer contents into a string
		*/
		toString(encoding: String, start: Number, end?: Number) : String;
		/**
		*writes the string parameter to the Buffer at the offset position and returns the number of bytes written
		*/
		write(string: String, offset?: Number, encoding?: String) : Number;
		/**
		*writes the 64-bit double value to the Buffer with the Big Endian format
		*/
		writeDoubleBE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 64-bit double value to the Buffer with the Little Endian format
		*/
		writeDoubleLE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 32-bit float value to the Buffer with the Big Endian format
		*/
		writeFloatBE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 32-bit float value to the Buffer with the Little Endian format
		*/
		writeFloatLE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 16-bit signed integer value to the Buffer with the Big Endian format
		*/
		writeInt16BE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 16-bit signed integer value to the Buffer with the Little Endian format
		*/
		writeInt16LE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 24-bit signed integer value to the Buffer with the Big Endian format
		*/
		writeInt24BE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 24-bit signed integer value to the Buffer with the Little Endian format
		*/
		writeInt24LE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 32-bit signed integer value to the Buffer with the Big Endian format
		*/
		writeInt32BE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 32-bit signed integer value to the Buffer with the Little Endian format
		*/
		writeInt32LE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 8-bit signed integer value to the Buffer to which it is applied
		*/
		writeInt8(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 16-bit unsigned integer value to the Buffer with the Big Endian format
		*/
		writeUInt16BE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 16-bit unsigned integer value to the Buffer with the Little Endian format
		*/
		writeUInt16LE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 24-bit unsigned integer value to the Buffer with the Big Endian format
		*/
		writeUInt24BE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 24-bit unsigned integer value to the Buffer with the Little Endian format
		*/
		writeUInt24LE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 32-bit unsigned integer value to the Buffer with the Big Endian format
		*/
		writeUInt32BE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 32-bit unsigned integer value to the Buffer with the Little Endian format
		*/
		writeUInt32LE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 8-bit unsigned integer value to the Buffer to which it is applied
		*/
		writeUInt8(value: Number, offset: Number, noAssert?: Boolean) : void;
	}

	interface ConnectionSession {
		/**
		*Expiration date
		*/
		expiration: Date;
		/**
		*Internal ID of the session
		*/
		ID: String;
		/**
		*Lifetime of the session in seconds (default is 3600)
		*/
		lifeTime: Number;
		/**
		*sessionStorage object of the user session
		*/
		storage: Storage;
		/**
		*User who runs the connection session
		*/
		user: User;
		/**
		*returns true if the current session belongs to the group
		*/
		belongsTo(group: String) : Boolean;
		/**
		*returns true if the current session belongs to the group
		*/
		belongsTo(group: Group) : Boolean;
		/**
		*returns true if the current session belongs to the group and throws an error if false
		*/
		checkPermission(group: String) : Boolean;
		/**
		*returns true if the current session belongs to the group and throws an error if false
		*/
		checkPermission(group: Group) : Boolean;
		/**
		*makes the user session expire
		*/
		forceExpire() : void;
		/**
		*temporarily promotes the current session into the group
		*/
		promoteWith(group: Group) : Number;
		/**
		*temporarily promotes the current session into the group
		*/
		promoteWith(group: String) : Number;
		/**
		*stops the temporary promotion set for the current session using the promoteWith( ) method
		*/
		unPromote(token: Number) : void;
	}interface ConnectionSessionInfo{
    /**
     *UUID string referencing the user. It can be any ID but must not be an existing user ID
     */
    ID : string;
    /**
     *Username of the User
     */
    name : string;
    /**
     *Full Name of the User
     */
    fullName : string;
    /**
     *Array of UUID strings or array of group names referencing the groups the user must belong to
     */
    belongsTo : string[];
    /**
     *sessionStorage property of the user session (optional)
     */
    storage : Object;
    /**
     *Define the session time to live for the user session (optional)
     */
    lifeTime : Number;
}

interface Datastore {

	/**
	*Collection of available datastore classes
	*/
	dataClasses: DatastoreClassEnumerator;
	/**
	*exports all the entities stored in the object for which it is called in JSON format
	*/
	exportAsJSON(exportFolder: Folder, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*exports all the entities stored the object for which it is called in SQL format
	*/
	exportAsSQL(exportFolder: Folder, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*flushes the data cache to disk
	*/
	flushCache() : void;
	/**
	*returns the size of memory used by the datastore cache (in bytes)
	*/
	getCacheSize() : Number;
	/**
	*returns a reference, Folder, to the folder containing the datastore data file
	*/
	getDataFolder() : Folder;
	/**
	*allows you to get detailed information about Wakanda database engine events
	*/
	getMeasures(options?: Object) : Object;
	/**
	*returns a reference, Folder, to the folder containing the datastore model file
	*/
	getModelFolder() : Folder;
	/**
	*returns the name of the current datastore
	*/
	getName() : String;
	/**
	*returns a Folder type reference to the datastore "temporary files" folder
	*/
	getTempFolder() : Folder;
	/**
	*imports all the entities stored in JSON format from the file(s) located in the importFolder folder
	*/
	importFromJSON(importFolder: Folder) : void;
	/**
	*looks for any "ghost" tables in the data file of your application and adds the corresponding datastore classes to the loaded model
	*/
	revealGhostTables() : void;
	/**
	*increase dynamically the datastore cache size
	*/
	setCacheSize(newSize: Number) : void;
}



interface DatastoreClass {
/**
	*Collection of available attributes
	*/
	attributes: AttributeEnumerator;
	/**
	*Number of entities in the datastore class
	*/
	length: Number;
	/**
	*returns an object of type EntityCollection containing all the entities in the datastore class to which it was applied
	*/
	all() : EntityCollection;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: String, distinct?: String) : Number;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, distinct?: Boolean) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, distinct?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, distinct?: Boolean) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, distinct?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, groupBy?: DatastoreClassAttribute) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, groupBy?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, groupBy?: DatastoreClassAttribute) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, groupBy?: String) : Object;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: String, distinct?: String) : Number;
	/**
	*creates a new blank object of type Entity based on the datastore class to which it is applied
	*/
	createEntity() : Entity;
	/**
	*creates a new blank object of type EntityCollection attached to the datastore class to which it is applied
	*/
	createEntityCollection(keepSorted?: String) : EntityCollection;
	/**
	*creates a new blank object of type EntityCollection attached to the datastore class to which it is applied
	*/
	createEntityCollection(keepSorted?: Boolean) : EntityCollection;
	/**
	*creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	*/
	distinctValues(attribute: DatastoreClassAttribute) : any[];
	/**
	*creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	*/
	distinctValues(attribute: String) : any[];
	/**
	*exports all the entities stored in the object for which it is called in JSON format
	*/
	exportAsJSON(exportFolder: Folder, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*exports all the entities stored the object for which it is called in SQL format
	*/
	exportAsSQL(exportFolder: Folder, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*applies the search criteria specified in queryString and (optionally) value to all the entities of the DatastoreClass or EntityCollection and returns the first entity found in an object of type Entity
	*/
	find(queryString: String, ...valueList: any[]) : Entity;
	/**
	*returns the entity in the first position of the entity collection or datastore class
	*/
	first() : Entity;
	/**
	*executes the callbackFn function on each entity in the entity collection in ascending order
	*/
	forEach(callbackFn: Function) : void;
	/**
	*generates entities in the datastore class where it is applied and returns the resulting entity collection
	*/
	fromArray(arrayValues: any[]) : EntityCollection;
	/**
	*returns the percentage of logical fragmentation for the entities of the datastore class
	*/
	getFragmentation() : Number;
	/**
	*returns the name of the datastore class to which it is applied in a string
	*/
	getName() : String;
	/**
	*returns the current scope property value of the datastore class
	*/
	getScope() : String;
	/**
	*imports all the entities stored in JSON format from the file(s) located in the importFolder folder
	*/
	importFromJSON(importFolder: Folder) : void;
	/**
	*returns the maximum value among all the values of attribute in the entity collection or datastore class
	*/
	max(attribute: DatastoreClassAttribute) : Number;
	/**
	*returns the maximum value among all the values of attribute in the entity collection or datastore class
	*/
	max(attribute: String) : Number;
	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	*/
	min(attribute: DatastoreClassAttribute) : Number;
	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	*/
	min(attribute: String) : Number;
	/**
	*sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	*/
	orderBy(attributeList: String, sortOrder?: String) : EntityCollection;
	/**
	*sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	*/
	orderBy(attributeList: DatastoreClassAttribute, sortOrder?: String) : EntityCollection;
	/**
	*searches all the entities in the datastore class or entity collection using the search criteria specified in queryString and returns a new collection containing the entities found
	*/
	query(queryString: String, ...valueList: any[]) : EntityCollection;
	/**
	*permanently removes entities from the datastore
	*/
	remove() : void;
	/**
	*(re)sets the start value for the autosequence number of the datastore class
	*/
	setAutoSequenceNumber(counter: Number) : void;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: String, distinct?: String) : Number;
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: String, sortList: String, key: String, skip: Number, top?: Number) : any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: String, sortList: String, key: Boolean, skip: Number, top?: Number) : any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList: String, key: String, skip: Number, top?: Number) : any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList: String, key: Boolean, skip: Number, top?: Number) : any[];
	/**
	*returns the name of the datastore class as a string
	*/
	toString() : String;
}

interface AttributeEnumerator{
	
}

interface AttributeEnumerator {
    [attributeName: string]: DatastoreClassAttribute;
}

interface DatastoreClassEnumerator {
    [dataClassName: string]: DatastoreClass;
}


interface Entity {
/**
	*returns the datastore class (object of the DatastoreClass type) of the entity
	*/
	getDataClass() : DatastoreClass;
	/**
	*returns the timestamp of the last save of the entity to which it is applied
	*/
	getTimeStamp() : Date;
	/**
	*returns True or False depending on whether the entity iterator points to an entity that is currently loaded in memory
	*/
	isLoaded() : Boolean;
	/**
	*returns True or False depending on whether the entity to which it is applied has been modified since the last time it was loaded from the datastore
	*/
	isModified() : Boolean;
	/**
	*returns True or False depending on whether the entity to which it is applied has just been created in the datastore
	*/
	isNew() : Boolean;
	/**
	*puts the entity pointer on the next entity within an iteration of entities
	*/
	next() : Entity;
	/**
	*reloads the entity as it is stored in the datastore
	*/
	refresh() : void;
	/**
	*releases the entity from memory
	*/
	release() : void;
	/**
	*removes the entity from the datastore
	*/
	remove() : void;
	/**
	*saves the changes made to the entity in the datastore
	*/
	save() : void;
	/**
	*returns a string representation of the entity or entity collection
	*/
	toString() : String;
}


interface EntityCollection {
	/**
	*Number of entities in the entity collection
	*/
	length: Number;
	/**
	*Description of the query as it was actually performed
	*/
	queryPath: String;
	/**
	*Description of the query just before it is executed
	*/
	queryPlan: String;
	/**
	*adds the entity or entity collection passed in the toAdd parameter to the entity collection
	*/
	add(toAdd: EntityCollection, atTheEnd?: String) : void;
	/**
	*adds the entity or entity collection passed in the toAdd parameter to the entity collection
	*/
	add(toAdd: EntityCollection, atTheEnd?: Boolean) : void;
	/**
	*adds the entity or entity collection passed in the toAdd parameter to the entity collection
	*/
	add(toAdd: Entity, atTheEnd?: String) : void;
	/**
	*adds the entity or entity collection passed in the toAdd parameter to the entity collection
	*/
	add(toAdd: Entity, atTheEnd?: Boolean) : void;
	/**
	*compares the entity collection to which it is applied and the collection2 and returns a new entity collection that contains only the entities that are referenced in both collections
	*/
	and(collection2: EntityCollection) : EntityCollection;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: String, distinct?: String) : Number;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, distinct?: Boolean) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, distinct?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, distinct?: Boolean) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, distinct?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, groupBy?: DatastoreClassAttribute) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, groupBy?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, groupBy?: DatastoreClassAttribute) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, groupBy?: String) : Object;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: String, distinct?: String) : Number;
	/**
	*creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	*/
	distinctValues(attribute: DatastoreClassAttribute): any[];
	/**
	*creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	*/
	distinctValues(attribute: String): any[];
	/**
	*exports all the entities stored in the object for which it is called in JSON format
	*/
	exportAsJSON(exportFolder: Folder, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*exports all the entities stored the object for which it is called in SQL format
	*/
	exportAsSQL(exportFolder: Folder, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*applies the search criteria specified in queryString and (optionally) value to all the entities of the DatastoreClass or EntityCollection and returns the first entity found in an object of type Entity
	*/
	find(queryString: String, ...valueList: any[]) : Entity;
	/**
	*returns the entity in the first position of the entity collection or datastore class
	*/
	first() : Entity;
	/**
	*executes the callbackFn function on each entity in the entity collection in ascending order
	*/
	forEach(callbackFn: Function) : void;
	/**
	*returns the datastore class (object of the DatastoreClass type) of the entity collection
	*/
	getDataClass() : DatastoreClass;
	/**
	*returns the maximum value among all the values of attribute in the entity collection or datastore class
	*/
	max(attribute: DatastoreClassAttribute) : Number;
	/**
	*returns the maximum value among all the values of attribute in the entity collection or datastore class
	*/
	max(attribute: String) : Number;
	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	*/
	min(attribute: DatastoreClassAttribute) : Number;
	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	*/
	min(attribute: String) : Number;
	/**
	*excludes from the entity collection to which it is applied the entities that are in the collection2 and returns the resulting entity collection
	*/
	minus(collection2: EntityCollection) : EntityCollection;
	/**
	*creates a new entity collection that contains all the entities from the entity collection to which it is applied and all the entities from the collection2 entity collection
	*/
	or(collection2: EntityCollection) : EntityCollection;
	/**
	*sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	*/
	orderBy(attributeList: String, sortOrder?: String) : EntityCollection;
	/**
	*sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	*/
	orderBy(attributeList: DatastoreClassAttribute, sortOrder?: String) : EntityCollection;
	/**
	*searches all the entities in the datastore class or entity collection using the search criteria specified in queryString and returns a new collection containing the entities found
	*/
	query(queryString: String, ...valueList: any[]) : EntityCollection;
	/**
	*permanently removes entities from the datastore
	*/
	remove() : void;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: String, distinct?: String) : Number;
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: String, sortList: String, key: String, skip: Number, top?: Number): any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: String, sortList: String, key: Boolean, skip: Number, top?: Number): any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList: String, key: String, skip: Number, top?: Number): any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList: String, key: Boolean, skip: Number, top?: Number): any[];
	/**
	*returns a string representation of the entity or entity collection
	*/
	toString() : String;
}

interface DatastoreClassAttribute extends String {
	
}	
	
	
	
	
	interface Directory {
		/**
		*Internal directory datastore
		*/
		internalStore: Datastore;
		/**
		 *The user who opened the current user session on the server 
		 */
		currentUser : User;
		/**
		 * object identifying the current session under which the current user is actually running on the server
		 */
		currentSession : ConnectionSession;
		/**
		*creates a new group in the solution's Directory and returns it as a Group object
		*/
		addGroup(name: String, fullName?: String) : Group;
		/**
		*creates a new user in the solution's Directory and returns it as a User object
		*/
		addUser(name: String, password: String, fullName?: String) : User;
		/**
		*returns the HA1 key resulting from the combination of userName, password and (optionally) realm parameters using a hash function
		*/
		computeHA1(userName: String, password: String, realm?: String) : String;
		/**
		*returns all groups whose name starts with filterString in the Directory
		*/
		filterGroups(filterString: String) : Array<Group>;
		/**
		*returns all users whose names starts with filterString in the Directory
		*/
		filterUsers(filterString: String) : Array<User>;
		/**
		*returns the name of the loginListener function set by setLoginListener( ) for the solution, if any
		*/
		getLoginListener() : String;
		/**
		*returns the local Group object referencing the remote group with the alias (i.e. the local name) you passed in the alias parameter
		*/
		getRemoteGroupByAlias(alias: String) : Group;
		/**
		*returns a local Group object referencing the remote group that corresponds to the unique Distinguished Name (DN) you passed in the dn parameter
		*/
		getRemoteGroupByDN(dn: String) : Group;
		/**
		*returns a Group object containing the group corresponding to the name (or ID) you passed in the name parameter
		*/
		group(name: String) : Group;
		/**
		*returns true if the solution is currently running under the controlled admin access mode, and false if it is under the free access mode
		*/
		hasAdministrator() : Boolean;
		/**
		*saves all changes made to the open solution directory
		*/
		save(backup?: String) : Boolean;
		/**
		*saves all changes made to the open solution directory
		*/
		save(backup?: File) : Boolean;
		/**
		 *set a Wakanda SSJS module as session manager, to handle all session operations : readSession, writeSession and deleteSession
		 */
		setSessionManager(modulePath: String);
		/**
		*set a loginListener function to handle login requests for your Wakanda solution
		*/
		setLoginListener(loginListener: String, group?: Group) : void;
		/**
		*set a loginListener function to handle login requests for your Wakanda solution
		*/
		setLoginListener(loginListener: String, group?: String) : void;
		/**
		*synchronizes the local Wakanda directory (.waDirectory file) with a remote LDAP directory
		*/
		sync(remoteLDAP?: Object) : void;
		/**
		*returns an User object containing the user corresponding to the name (or ID) you passed in the name parameter
		*/
		user(name: String) : User;
	}
	





	interface DirectoryEntrySync {
		/**
		*File system of the entry
		*/
		filesystem: FileSystemSync;
		/**
		*Absolute path of the entry
		*/
		fullPath: String;
		/**
		*True if the EntrySync is a directory
		*/
		isDirectory: Boolean;
		/**
		*True if the EntrySync is a file
		*/
		isFile: Boolean;
		/**
		*Name of the entry, excluding the path leading to it
		*/
		name: String;
		/**
		*copies the EntrySync object to a different location in the filesystem
		*/
		copyTo(dest: DirectoryEntrySync, name?: String) : EntrySync;
		/**
		*creates a new DirectoryReaderSync object to read entries from the DirectorySync to which it is applied
		*/
		createReader() : DirectoryReaderSync;
		/**
		*returns a Folder object that represents the current state of the folder referenced by the DirectoryEntrySync
		*/
		folder() : Folder;
		/**
		*creates or looks up a directory and returns a new entry to it
		*/
		getDirectory(path: String, options?: Object) : DirectoryEntrySync;
		/**
		*creates or looks up a file and returns a new entry to it
		*/
		getFile(path: String, options?: Object) : FileEntrySync;
		/**
		*returns a Metadata object providing information about the state of a file or directory
		*/
		getMetadata() : Object;
		/**
		*returns the parent DirectoryEntrySync of the EntrySync to which it is applied
		*/
		getParent() : DirectoryEntrySync;
		/**
		*moves the EntrySync object to a different location in the filesystem
		*/
		moveTo(dest: DirectoryEntrySync, name?: String) : EntrySync;
		/**
		*deletes the entry (file or directory) from the filesystem
		*/
		remove() : void;
		/**
		*deletes the directory and all of its contents, if any
		*/
		removeRecursively() : void;
		/**
		*returns a URL that can be used to identify the EntrySync
		*/
		toURL() : String;
	}
	
	interface DirectoryReaderSync {
		/**
		*method returns the next block of entries in the directory
		*/
		readEntries() : Array<any>;
	}
	
	
	interface EntrySync {
		/**
		*File system of the entry
		*/
		filesystem: FileSystemSync;
		/**
		*Absolute path of the entry
		*/
		fullPath: String;
		/**
		*True if the EntrySync is a directory
		*/
		isDirectory: Boolean;
		/**
		*True if the EntrySync is a file
		*/
		isFile: Boolean;
		/**
		*Name of the entry, excluding the path leading to it
		*/
		name: String;
		/**
		*copies the EntrySync object to a different location in the filesystem
		*/
		copyTo(dest: DirectoryEntrySync, name?: String) : EntrySync;
		/**
		*returns a Metadata object providing information about the state of a file or directory
		*/
		getMetadata() : Object;
		/**
		*returns the parent DirectoryEntrySync of the EntrySync to which it is applied
		*/
		getParent() : DirectoryEntrySync;
		/**
		*moves the EntrySync object to a different location in the filesystem
		*/
		moveTo(dest: DirectoryEntrySync, name?: String) : EntrySync;
		/**
		*deletes the entry (file or directory) from the filesystem
		*/
		remove() : void;
		/**
		*returns a URL that can be used to identify the EntrySync
		*/
		toURL() : String;
	}


	
	interface File {
		/**
		*constructor of the File type objects
		*/
		new(absolutePath: String) : File;
		/**
		*constructor of the File type objects
		*/
		new(path: Folder, fileName: String) : File;
		/**
		*constructor of the File type objects
		*/
		new(path: FileSystemSync, fileName: String) : File;
		/**
		*Creation date for the file
		*/
		creationDate: Date;
		/**
		*True if the file exists at the defined path. Otherwise, it returns false.
		*/
		exists: Boolean;
		/**
		*File extension
		*/
		extension: String;
		/**
		*FileSystem of the object
		*/
		filesystem: FileSystemSync;
		/**
		*Last modification date for the file
		*/
		//lastModifiedDate: Date;
		/**
		*Name of the file with the extension and without the path
		*/
		//name: String;
		/**
		*Name of the file without the extension
		*/
		nameNoExt: String;
		/**
		*Parent folder of the file
		*/
		parent: Folder;
		/**
		*Full path of the file
		*/
		path: String;
		/**
		*True if the file is read only. Otherwise, it returns false.
		*/
		readOnly: Boolean;
		/**
		*Size of the file in bytes
		*/
		size: number;
		/**
		*Media type of the Blob expressed as MIME or "" if unknown
		*/
		type: string;
		/**
		*True if the file is visible. Otherwise, it returns false.
		*/
		visible: Boolean;
		/**
		*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
		*/
		copyTo(destination: File, overwrite?: Boolean) : void;
		/**
		*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
		*/
		copyTo(destination: File, overwrite?: String) : void;
		/**
		*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
		*/
		copyTo(destination: String, overwrite?: Boolean) : void;
		/**
		*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
		*/
		copyTo(destination: String, overwrite?: String) : void;
		/**
		*stores the file referenced in the File on disk
		*/
		create() : Boolean;
		/**
		*returns the size of the free space (expressed in bytes) available on the volume where the File or Folder object is stored
		*/
		getFreeSpace(quotas?: Boolean) : Number;
		/**
		*returns the size of the free space (expressed in bytes) available on the volume where the File or Folder object is stored
		*/
		getFreeSpace(quotas?: String) : Number;
		/**
		*returns the absolute URL of the File or Folder object
		*/
		getURL(encoding?: Boolean) : String;
		/**
		*returns the absolute URL of the File or Folder object
		*/
		getURL(encoding?: String) : String;
		/**
		*returns the total size (expressed in bytes) of the volume where the File or Folder object is stored
		*/
		getVolumeSize() : Number;
		/**
		*class method can be used with the File( ) constructor to know if path corresponds to a file on disk
		*/
		isFile(path: String) : Boolean;
		/**
		*moves the file referenced in the File object (the source object) to the specified destination
		*/
		moveTo(destination: File, overwrite?: Boolean) : void;
		/**
		*moves the file referenced in the File object (the source object) to the specified destination
		*/
		moveTo(destination: File, overwrite?: String) : void;
		/**
		*moves the file referenced in the File object (the source object) to the specified destination
		*/
		moveTo(destination: String, overwrite?: Boolean) : void;
		/**
		*moves the file referenced in the File object (the source object) to the specified destination
		*/
		moveTo(destination: String, overwrite?: String) : void;
		/**
		*puts the file pointer on the next file within an iteration of files
		*/
		next() : Boolean;
		/**
		*removes the file or folder referenced in the File or Folder object from the storage volume
		*/
		remove() : Boolean;
		/**
		*allows you to rename a file on disk referenced in the File object
		*/
		setName(newName: String) : Boolean;
		/**
		*creates a new Blob object by referencing the contents of the bytes of the Blob to which it is applied, from start to end
		*/
		slice(start: Number, end: Number, mimeType?: String) : Blob;
		/**
		*returns a Buffer object containing a copy of the Blob bytes
		*/
		toBuffer() : Buffer;
		/**
		*get a string representation of the Blob contents
		*/
		toString(stringFormat?: String) : String;
		/**
		*checks the validity of the pointer to the current File object within an iteration of files
		*/
		valid() : Boolean;
	}


	
	interface FileEntrySync {
		/**
		*File system of the entry
		*/
		filesystem: FileSystemSync;
		/**
		*Absolute path of the entry
		*/
		fullPath: String;
		/**
		*True if the EntrySync is a directory
		*/
		isDirectory: Boolean;
		/**
		*True if the EntrySync is a file
		*/
		isFile: Boolean;
		/**
		*Name of the entry, excluding the path leading to it
		*/
		name: String;
		/**
		*copies the EntrySync object to a different location in the filesystem
		*/
		copyTo(dest: DirectoryEntrySync, name?: String) : EntrySync;
		/**
		*creates a new FileWriterSync associated with the file that the FileEntrySync represents
		*/
		createWriter() : FileWriterSync;
		/**
		*returns a File object that represents the current state of the file referenced by the FileEntrySync
		*/
		file() : File;
		/**
		*returns a Metadata object providing information about the state of a file or directory
		*/
		getMetadata() : Object;
		/**
		*returns the parent DirectoryEntrySync of the EntrySync to which it is applied
		*/
		getParent() : DirectoryEntrySync;
		/**
		*moves the EntrySync object to a different location in the filesystem
		*/
		moveTo(dest: DirectoryEntrySync, name?: String) : EntrySync;
		/**
		*deletes the entry (file or directory) from the filesystem
		*/
		remove() : void;
		/**
		*returns a URL that can be used to identify the EntrySync
		*/
		toURL() : String;
	}


	interface FileSystemSync {
		/**
		*Name of the file system
		*/
		name: String;
		/**
		*Root directory of the file system
		*/
		root: DirectoryEntrySync;
	}
	interface FileWriterSync{
		//TODO
	}
	interface Folder {
		/**
		*creates a new object of type Folder
		*/
		new(path: String) : Folder;
		/**
		*Creation date for the folder
		*/
		creationDate: Date;
		/**
		*True if the folder exists at the defined path. Otherwise, it returns false.
		*/
		exists: Boolean;
		/**
		*Folder extension
		*/
		extension: String;
		/**
		*Array of File objects
		*/
		files: Array<File>;
		/**
		*FileSystem of the object
		*/
		filesystem: FileSystemSync;
		/**
		*First file found in the folder
		*/
		firstFile: File;
		/**
		*First folder (i.e., subfolder) in the folder
		*/
		firstFolder: Folder;
		/**
		*Array of Folder objects
		*/
		folders: Array<Folder>;
		/**
		*Last modification date for the folder
		*/
		modificationDate: Date;
		/**
		*Name of the folder without the path
		*/
		name: String;
		/**
		*Name of the folder without the extension
		*/
		nameNoExt: String;
		/**
		*Parent folder of the folder
		*/
		parent: Folder;
		/**
		*Full path of the folder
		*/
		path: String;
		/**
		*True if the folder is visible. Otherwise, it returns false.
		*/
		visible: Boolean;
		/**
		*creates the folder referenced in the Folder object on disk
		*/
		create() : Boolean;		
		/**
		*executes the callbackFn function once for each file present at the first level of the Folder object
		*/
		forEachFile(callbackFn: (file: File)=>void, thisArg?: Object) : void;
		/**
		*executes the callbackFn function once for each subfolder present at the first level of the Folder object
		*/
		forEachFolder(callbackFn: (folder: Folder)=>void, thisArg?: Object) : void;
		/**
		*returns the size of the free space (expressed in bytes) available on the volume where the File or Folder object is stored
		*/
		getFreeSpace(quotas?: Boolean) : Number;
		/**
		*returns the size of the free space (expressed in bytes) available on the volume where the File or Folder object is stored
		*/
		getFreeSpace(quotas?: String) : Number;
		/**
		*returns the absolute URL of the File or Folder object
		*/
		getURL(encoding?: Boolean) : String;
		/**
		*returns the absolute URL of the File or Folder object
		*/
		getURL(encoding?: String) : String;
		/**
		*returns the total size (expressed in bytes) of the volume where the File or Folder object is stored
		*/
		getVolumeSize() : Number;
		/**
		*class method can be used with the Folder( ) constructor to know if path corresponds to a folder on disk
		*/
		isFolder(path: String) : Boolean;
		/**
		*puts the folder pointer on the next subfolder in an iteration of subfolders
		*/
		next() : Boolean;
		/**
		*executes the callbackFn function once for each file or subfolder present in the Folder object
		*/
		parse(callbackFn: Function, thisArg?: Object) : void;
		/**
		*removes the file or folder referenced in the File or Folder object from the storage volume
		*/
		remove() : Boolean;
		/**
		*removes the contents of the folder referenced in the Folder object from the storage volume
		*/
		removeContent() : Boolean;
		/**
		*allows you to rename the folder referenced in the Folder object on disk
		*/
		setName(newName: String) : void;
		/**
		*checks the validity of the pointer to the current folder within an iteration of folders
		*/
		valid() : Boolean;
	}
	interface FolderInstance {
		/**
		*Creation date for the folder
		*/
		creationDate: Date;
		/**
		*True if the folder exists at the defined path. Otherwise, it returns false.
		*/
		exists: Boolean;
		/**
		*Folder extension
		*/
		extension: String;
		/**
		*Array of File objects
		*/
		files: Array<File>;
		/**
		*FileSystem of the object
		*/
		filesystem: FileSystemSync;
		/**
		*First file found in the folder
		*/
		firstFile: File;
		/**
		*First folder (i.e., subfolder) in the folder
		*/
		firstFolder: FolderInstance;
		/**
		*Array of Folder objects
		*/
		folders: Array<FolderInstance>;
		/**
		*Last modification date for the folder
		*/
		modificationDate: Date;
		/**
		*Name of the folder without the path
		*/
		name: String;
		/**
		*Name of the folder without the extension
		*/
		nameNoExt: String;
		/**
		*Parent folder of the folder
		*/
		parent: FolderInstance;
		/**
		*Full path of the folder
		*/
		path: String;
		/**
		*True if the folder is visible. Otherwise, it returns false.
		*/
		visible: Boolean;
		/**
		*creates the folder referenced in the Folder object on disk
		*/
		create() : Boolean;
		/**
		*executes the callbackFn function once for each file present at the first level of the Folder object
		*/
		forEachFile(callbackFn: (file: File)=>void, thisArg?: Object) : void;
		/**
		*executes the callbackFn function once for each subfolder present at the first level of the Folder object
		*/
		forEachFolder(callbackFn: (folder: FolderInstance)=>void, thisArg?: Object) : void;
		/**
		*returns the size of the free space (expressed in bytes) available on the volume where the File or Folder object is stored
		*/
		getFreeSpace(quotas?: Boolean) : Number;
		/**
		*returns the size of the free space (expressed in bytes) available on the volume where the File or Folder object is stored
		*/
		getFreeSpace(quotas?: String) : Number;
		/**
		*returns the absolute URL of the File or Folder object
		*/
		getURL(encoding?: Boolean) : String;
		/**
		*returns the absolute URL of the File or Folder object
		*/
		getURL(encoding?: String) : String;
		/**
		*returns the total size (expressed in bytes) of the volume where the File or Folder object is stored
		*/
		getVolumeSize() : Number;
		/**
		*class method can be used with the Folder( ) constructor to know if path corresponds to a folder on disk
		*/
		isFolder(path: String) : Boolean;
		/**
		*puts the folder pointer on the next subfolder in an iteration of subfolders
		*/
		next() : Boolean;
		/**
		*executes the callbackFn function once for each file or subfolder present in the Folder object
		*/
		parse(callbackFn: Function, thisArg?: Object) : void;
		/**
		*removes the file or folder referenced in the File or Folder object from the storage volume
		*/
		remove() : Boolean;
		/**
		*removes the contents of the folder referenced in the Folder object from the storage volume
		*/
		removeContent() : Boolean;
		/**
		*allows you to rename the folder referenced in the Folder object on disk
		*/
		setName(newName: String) : void;
		/**
		*checks the validity of the pointer to the current folder within an iteration of folders
		*/
		valid() : Boolean;
	}

	
	interface Group {
		/**
		*Full name of the group
		*/
		fullName: String;
		/**
		*Internal ID of the group
		*/
		ID: String;
		/**
		*Name of the group
		*/
		name: String;
		/**
		*returns an array of the subgroups belonging to the Group, filtered using the filterString parameter
		*/
		filterChildren(filtrerString: String, level?: Boolean) : Array<Group>;
		/**
		*returns an array of the subgroups belonging to the Group, filtered using the filterString parameter
		*/
		filterChildren(filtrerString: String, level?: String) : Array<Group>;
		/**
		*returns an array of the groups to which the Group belongs, filtered using the filterString parameter
		*/
		filterParents(filterString: String, level?: Boolean) : Array<Group>;
		/**
		*returns an array of the groups to which the Group belongs, filtered using the filterString parameter
		*/
		filterParents(filterString: String, level?: String) : Array<Group>;
		/**
		*returns an array of the users that belong directly or indirectly to the Group, filtered using the filterString parameter
		*/
		filterUsers(filterString: String, level?: Boolean) : Array<User>;
		/**
		*returns an array of the users that belong directly or indirectly to the Group, filtered using the filterString parameter
		*/
		filterUsers(filterString: String, level?: String) : Array<User>;
		/**
		*returns an array of the subgroups belonging to the Group
		*/
		getChildren(level?: Boolean) : Array<Group>;
		/**
		*returns an array of the subgroups belonging to the Group
		*/
		getChildren(level?: String) : Array<Group>;
		/**
		*returns an array of the groups to which the Group belongs
		*/
		getParents(level?: Boolean) : Array<Group>;
		/**
		*returns an array of the groups to which the Group belongs
		*/
		getParents(level?: String) : Array<Group>;
		/**
		*returns an array of users belonging to the Group
		*/
		getUsers(level?: Boolean) : Array<User>;
		/**
		*returns an array of users belonging to the Group
		*/
		getUsers(level?: String) : Array<User>;
		/**
		*adds Group to the group(s) you passed in the groupList parameter
		*/
		putInto(...groupList: String[]) : void;
		/**
		*adds Group to the group(s) you passed in the groupList parameter
		*/
		putInto(...groupList: Group[]) : void;
		/**
		*removes the User or Group from the solution's Directory
		*/
		remove() : void;
		/**
		*removes the Group from the group(s) you passed in the groupList parameter
		*/
		removeFrom(...groupList: String[]) : void;
		/**
		*removes the Group from the group(s) you passed in the groupList parameter
		*/
		removeFrom(...groupList: Group[]) : void;
		/**
		*sets a local name (alias) to the Group object corresponding to a remote group from a LDAP directory
		*/
		setAlias(alias: String) : void;
	}	
	
	
	interface HttpServer {
		/**
		*Cache properties of the HTTP server
		*/
		cache: HttpServerCache;
		/**
		*Default charset value
		*/
		defaultCharSet: String;
		/**
		*Host name of the server
		*/
		hostName: String;
		/**
		*IP address of the server
		*/
		ipAddress: String;
		/**
		*Port listened to by the server
		*/
		port: Number;
		/**
		 *The current HTTP Request Object
		 */
		request: HTTPRequest;
		/**
		 *The current HTTP Response Object
		 */
		response: HTTPResponse;
		/**
		*SSL properties of the server
		*/
		ssl: HttpServerSSL;
		/**
		*Current status of the HTTP server
		*/
		started: Boolean;
		/**
		*installs a request handler function on the server
		*/
		addRequestHandler(pattern: String, filePath: String, functionName: String) : void;
		/**
		*installs a WebSocket handler script on the server
		*/
		addWebSocketHandler(pattern: String, filePath: String, socketID: String, shared: Boolean) : void;
		/**
		*uninstalls an existing HTTP request handler function running on the server
		*/
		removeRequestHandler(pattern: String, filePath: String, functionName: String) : void;
		/**
		*removes the WebSocket handler socketID from the server
		*/
		removeWebSocketHandler(socketID: String) : void;
		/**
		*starts the Wakanda HTTP server
		*/
		start() : void;
		/**
		*stops the Wakanda HTTP server
		*/
		stop() : void;
	}
	
	interface HttpServerCache {
		/**
		*Status of the HTTP server cache
		*/
		enabled: Boolean;
		/**
		*Size of the HTTP server cache in memory
		*/
		memorySize: Number;
	}
	
	interface HttpServerSSL {
		/**
		*Status of the SSL protocol on the server
		*/
		enabled: Boolean;
		/**
		*Port number for SSL connections
		*/
		port: Number;
		/**
		*returns the full path to the SSL certificates folder used by the server (if any)
		*/
		getCertificatePath() : String;
	}


interface HTTPRequest {
    /**
	*Body of the received message
	*/
	body: String|Image|Blob;
	/**
	*Content-type of the request as defined in the header
	*/
	contentType: String;
	/**
	*Header of the HTTPRequest
	*/
	headers: String[];
	/**
	*Host header of the request
	*/
	host: String;
	/**
	*True if the connection uses SSL, false otherwise
	*/
	isSSL: Boolean;
	/**
	*Local server IP address (IPv4 or IPv6)
	*/
	localAddress: String;
	/**
	*Local server port number
	*/
	localPort: Number;
	/**
	*HTTP method name
	*/
	method: String;
	/**
	*Parts of a HTTP body (for multipart forms)
	*/
	parts: MIMEMessage;
	/**
	*User password for authentified requests (BASIC mode only)
	*/
	password: String;
	/**
	*Raw URL of the request
	*/
	rawURL: String;
	/**
	*Remote client IP address (IPv4 or IPv6)
	*/
	remoteAddress: String;
	/**
	*Remote client port number
	*/
	remotePort: Number;
	/**
	*Request-line received by the server
	*/
	requestLine: String;
	/**
	*Decoded URL of the request
	*/
	url: String;
	/**
	*Path part of the request
	*/
	urlPath: String;
	/**
	*Query part of the request
	*/
	urlQuery: String;
	/**
	*User name for authentified request
	*/
	user: String;
	/**
	*Version of the HTTP protocol
	*/
	version: String;
}


interface HTTPResponse {
	/**
	*Body of the returned message to set
	*/
	body: Blob|Image|String;
	/**
	*Content-type of the response to set
	*/
	contentType: String;
	/**
	*Header of the HTTPResponse
	*/
	headers: String[];
	/**
	*Return status code to set
	*/
	statusCode: Number;
	/**
	*indicates if the contents of the HTTPResponse should be cached on the server
	*/
	allowCache(useCache: Boolean) : void;
	/**
	*sets custom compression thresholds for the HTTPResponse
	*/
	allowCompression(minThreshold: Number, maxThreshold: Number) : void;
	/**
	*sends an HTTPResponse in chunks without knowing in advance the size of the data
	*/
	sendChunkedData(data: String) : void;
	/**
	*sends an HTTPResponse in chunks without knowing in advance the size of the data
	*/
	sendChunkedData(data: Image) : void;
	/**
	*sends an HTTPResponse in chunks without knowing in advance the size of the data
	*/
	sendChunkedData(data: Blob) : void;
}
	interface Image {
		/**
		*Height of the image
		*/
		height: Number;
		/**
		*Size of the image (expressed in bytes)
		*/
		length: Number;
		/**
		*Metadata associated with the image
		*/
		meta: Object;
		/**
		*Size of the image (expressed in bytes)
		*/
		size: Number;
		/**
		*Width of the image (expressed in pixels)
		*/
		width: Number;
		/**
		*stores locally the Image object in a file
		*/
		save(file: String, type?: String) : void;
		/**
		*stores locally the Image object in a file
		*/
		save(file: File, type?: String) : void;
		/**
		*modifies metadata found in the Image object
		*/
		saveMeta(meta: Object) : void;
		/**
		*associate a file path to an Image object
		*/
		setPath(file: File) : void;
		/**
		*associate a file path to an Image object
		*/
		setPath(file: String) : void;
		/**
		*returns a thumbnail of the source image
		*/
		thumbnail(width: Number, height: Number, mode?: Number) : Image;
	}
	interface Job {
		/**
		*Unique ID of the job on the server
		*/
		id: String;
		/**
		*logs the messageInfo event for the job
		*/
		log(messageInfo: String) : void;
		/**
		*logs the messageInfo event for the job and terminates the job
		*/
		terminate(messageInfo: String) : void;
	}

	interface JobManager {
		/**
		*returns a new job object or the job object corresponding to the jobID string parameter
		*/
		getJob(jobID?: String) : Job;
		/**
		*returns an array containing all the jobs currently running on the Wakanda Server
		*/
		getJobs() : Array<Job>;
	}interface KeyValueStorage {
    /**
	*Number of key/value pairs currently present in the object
	*/
	length: Number;
	/**
	*removes all key/value pairs from the Storage object
	*/
	clear() : void;
	/**
	*returns a copy of the value stored with the given key in the Storage object
	*/
	getItem(key: String) : any;
	/**
	*returns the name of the key stored at the keyIndex position in the Storage object
	*/
	key(keyIndex: Number) : String;
	/**
	*locks the Storage object to which it is applied, so that only the thread that placed it can read or modify it
	*/
	lock() : void;
	/**
	*allows you to remove an item from the Storage object
	*/
	removeItem(key: String) : void;
	/**
	*allows you to create or update an item in the Storage object
	*/
	setItem(key: String, value: any) : void;
	/**
	*tries to lock the Storage object to which it is applied; it returns true in case of success and false otherwise
	*/
	tryLock() : Boolean;
	/**
	*removes a lock that was previously put on the Storage object
	*/
	unlock() : void;
}

interface MIMEMessage {
    /**
	*nth part of the multipart MIME message
	*/
    [n: number]: MIMEMessagePart;
	/**
	*Boundary tag used to delimit the parts
	*/
	boundary: String;
	/**
	*Number of parts
	*/
	count: Number;
	/**
	*Encoding type: 'multipart/form-data' or 'application/x-www-form-urlencoded'
	*/
	encoding: String;
	/**
	*Number of parts
	*/
	length: Number;
	/**
	*returns the MIME message as a Blob object
	*/
	toBlob(mimeType?: String) : Blob;
	/**
	*returns the MIME message as a Buffer object
	*/
	toBuffer() : void;
}

interface MIMEMessagePart {
    /**
	*Body as a BLOB
	*/
	asBlob: Blob;
	/**
	*Body as an image
	*/
	asPicture: Image;
	/**
	*Body as a Text string
	*/
	asText: String;
	/**
	*Name of the uploaded file
	*/
	fileName: String;
	/**
	*Content-type of the part
	*/
	mediaType: String;
	/**
	*Input field name
	*/
	name: String;
	/**
	*Size of the body (in bytes)
	*/
	size: Number;
	/**
	*saves the body of the part in the file whose path is passed in filePath
	*/
	save(filePath: String, overWrite?: Boolean) : void;
}
	interface Module {
		//TODO
	}interface OS {
    /**
	*True if the server is running under a Unix OS, false otherwise
	*/
	isLinux: Boolean;
	/**
	*True if the server is running under an OSX (Mac) OS, false otherwise
	*/
	isMac: Boolean;
	/**
	*True if the server is running under a Windows OS, false otherwise
	*/
	isWindows: Boolean;
	/**
	*returns a list of available network interfaces on the server
	*/
	networkInterfaces() : Object;
}
	interface Permissions {
		/**
		*returns a JSON object describing the permission defined for the specified type, resource and action
		*/
		findResourcePermission(type: String, resource: String, action: String) : Object;
	}interface Process {
    /**
	*Wakanda internal build version, for example "2.108407"
	*/
	buildNumber: String;
	/**
	*User environment variables
	*/
	env: Object;
	/**
	*Unique identifier for the process
	*/
	pid: Number;
	/**
	*Wakanda version full string, for example "2.0 build 2.108407"
	*/
	version: String;
}
	interface ProgressIndicator {
		/**
		*stops the current session of the ProgressIndicator object
		*/
		endSession() : void;
		/**
		*automatically increments the value of the current element for the ProgressIndicator object
		*/
		incValue() : Boolean;
		/**
		*dynamically modifies the maximum number of elements whose processing must be shown by the ProgressIndicator object
		*/
		setMax(numElements: Number) : void;
		/**
		*dynamically modifies the name of the execution session for the ProgressIndicator object
		*/
		setMessage(sessionName: String) : void;
		/**
		*sets a current element value for the ProgressIndicator object
		*/
		setValue(curValue: Number) : Boolean;
		/**
		*interrupts the current execution session of the ProgressIndicator object
		*/
		stop() : void;
		/**
		*creates and manages the display of a second ProgressIndicator object in the main ProgressIndicator session being executed
		*/
		subSession(numElements: Number, sessionName: String, stoppable?: Boolean) : void;
		/**
		*creates and manages the display of a second ProgressIndicator object in the main ProgressIndicator session being executed
		*/
		subSession(numElements: Number, sessionName: String, stoppable?: String) : void;
	}interface SharedWorker {
	/**
	*constructor of the SharedWorker type class objects
	*/
	new(scriptPath: String, workerName?: String) : SharedWorker;
	/**
	*Callback to trigger when a new caller creates a SharedWorker proxy object
	*/
	onconnect: Function;
	/**
	*Array whose element 0 is an object containing the communication tools, including onmessage, postMessage, onerror
	*/
	ports: Array<any>;
	/**
	*ends the thread from which it is called
	*/
	close() : void;
	/**
	*allows a thread to handle events and to continue to exist after the complete code executes
	*/
	wait(timeout?: Number) : Boolean;
}		
	interface Socket {
		/**
		*Number of buffered characters to be written
		*/
		bufferSize: Number;
		/**
		*installs a new listener function to be called when the specified event is triggered by the object on which it is applied
		*/
		addListener(event: String, listener: Function) : void;
		/**
		*returns an object containing two attributes, address and port, representing the address where the client socket is connected
		*/
		address() : Object;
		/**
		*opens the connection for the existing socket to which it is applied
		*/
		connect(port: Number, host?: String, callback?: Function) : void;
		/**
		*closes the socket to which it is applied
		*/
		destroy() : void;
		/**
		*triggers the event for the object, optionally passing arguments to the listener(s)
		*/
		emit(event: String, ...args: any[]) : void;
		/**
		*closes the socket to which it is applied
		*/
		end() : void;
		/**
		*returns an array of listeners defined for the specified event in the object
		*/
		listeners(event: String) : Array<Function>;
		/**
		*installs a new listener function to be called when the specified event is triggered by the object on which it is applied
		*/
		on(event: String, listener: Function) : void;
		/**
		*sets a new listener function to be called only once when the specified event is triggered for the first time by the object on which it is applied
		*/
		once(event: String, listener: Function) : void;
		/**
		*pauses the 'data' event triggered for the given socket
		*/
		pause() : void;
		/**
		*removes all the listeners of the specified event for the object to which it is applied
		*/
		removeAllListeners(event?: String) : void;
		/**
		*removes the specified listener from the listener array of the event for the object to which it is applied
		*/
		removeListener(event: String, listener: Function) : void;
		/**
		*resumes a paused socket
		*/
		resume() : void;
		/**
		*sets the encoding for data received from the socket to which it is applied
		*/
		setEncoding(encoding: String) : void;
		/**
		*defines the maximum number of listeners that can be added per event for the object to which it is applied
		*/
		setMaxListeners(maxValue: Number) : void;
		/**
		*disables Nagle's algorithm for the socket to which it is applied
		*/
		setNoDelay(noDelay: Boolean) : void;
		/**
		*writes data to the socket to which it is applied
		*/
		write(data: Buffer, encoding?: String) : Boolean;
		/**
		*writes data to the socket to which it is applied
		*/
		write(data: String, encoding?: String) : Boolean;
	}interface SocketSync {
		/**
		*returns an object containing two attributes, address and port, representing the address where the client SocketSync is connected
		*/
		address() : Object;
		/**
		*opens the connection for the existing SocketSync to which it is applied
		*/
		connect(port: Number, host?: String) : void;
		/**
		*closes the SocketSync method to which it is applied
		*/
		destroy() : void;
		/**
		*closes the SocketSync to which it is applied
		*/
		end() : void;
		/**
		*returns in a Buffer object the data read from the SocketSync instance to which it is applied
		*/
		read(timeOut?: Number) : Buffer;
		/**
		*sets the encoding for data received from the SocketSync to which it is applied
		*/
		setEncoding(encoding: String) : void;
		/**
		*disables Nagle's algorithm for the SocketSync to which it is applied
		*/
		setNoDelay(noDelay: Boolean) : void;
		/**
		*writes data to the SocketSync to which it is applied
		*/
		write(data: String, encoding: String) : Boolean;
		/**
		*writes data to the SocketSync to which it is applied
		*/
		write(data: Buffer, encoding: String) : Boolean;
	}
	interface Solution {
		/**
		*Name of the solution
		*/
		name: String;
		/**
		*closes the current solution and reopens the default solution
		*/
		close() : void;
		/**
		*method returns the port number on which Wakanda Server's debug service is listening for the solution
		*/
		getDebuggerPort() : Number;
		/**
		*returns the folder containing the solution file (named 'SolutionName.waSolution')
		*/
		getFolder(kind?: String, format?: Boolean) : Folder;
		/**
		*returns the folder containing the solution file (named 'SolutionName.waSolution')
		*/
		getFolder(kind?: String, format?: String) : Folder;
		/**
		*returns the solution-level file associated with the role you passed as a parameter
		*/
		getItemsWithRole(role: String) : File;
		/**
		*returns a reference or the path to the file containing the solution setting whose ID you passed in settingID
		*/
		getSettingFile(settingID: String, kind?: String, format?: Boolean) : void;
		/**
		*returns Wakanda Server's "walib" folder, containing the libraries and services available client-side
		*/
		getWalibFolder(kind: String, format?: Boolean) : Folder;
		/**
		*returns Wakanda Server's "walib" folder, containing the libraries and services available client-side
		*/
		getWalibFolder(kind: String, format?: String) : Folder;
		/**
		*quits Wakanda Server
		*/
		quitServer() : void;
	}interface SystemWorker {
	/**
	*Callback to trigger when an error is received
	*/
	onerror: Function;
	/**
	*Callback to trigger when a message is received
	*/
	onmessage: Function;
	/**
	*Callback to trigger when the external process is terminating
	*/
	onterminated: Function;
	/**
	*closes the input stream (stdin) of the external process
	*/
	endOfInput() : void;
	/**
	*returns an object containing information about the SystemWorker
	*/
	getInfos() : Object;
	/**
	*returns the number of SystemWorker objects currently running on the server
	*/
	getNumberRunning() : Number;
	/**
	*write on the input stream (stdin) of the external process
	*/
	postMessage(stdin: String) : void;
	/**
	*write on the input stream (stdin) of the external process
	*/
	postMessage(stdin: Buffer) : void;
	/**
	*set the type of data exchanged in the SystemWorker through the onmessage and onerror properties
	*/
	setBinary(binary: Boolean) : void;
	/**
	*forces the external process to terminate its execution
	*/
	terminate(waitForTermination: Boolean, killProcessTree?: Boolean) : void;
	/**
	*allows you to set a waiting time for the SystemWorker to execute
	*/
	wait(timeout?: Number) : Boolean;
}
interface TextStream {
	/**
	*creates a new TextStream object
	*/
	new(file: String, readMode: String, charset?: Number) : TextStream;
	/**
	*creates a new TextStream object
	*/
	new(file: File, readMode: String, charset?: Number) : TextStream;
	/**
	*closes the file referenced in the TextStream object
	*/
	close() : void;
	/**
	*returns true if the cursor position is after the last character of the file referenced in the TextStream object
	*/
	end() : Boolean;
	/**
	*saves the contents of the buffer to the disk file referenced in the TextStream object
	*/
	flush() : void;
	/**
	*returns the current position of the cursor in the TextStream object
	*/
	getPos() : Number;
	/**
	*returns the current size of the stream
	*/
	getSize() : Number;
	/**
	*reads characters from the file referenced in the TextStream object
	*/
	read(numBytesOrDelimiter?: Number) : String;
	/**
	*reads characters from the file referenced in the TextStream object
	*/
	read(numBytesOrDelimiter?: String) : String;
	/**
	*moves the stream cursor to the beginning of the TextStream object
	*/
	rewind() : void;
	/**
	*writes the data you passed in the text parameter in the TextStream object
	*/
	write(text: String) : void;
}

	interface User {
		/**
		*Full name of the user
		*/
		fullName: String;
		/**
		*Internal ID of the user
		*/
		ID: String;
		/**
		*Name of the user
		*/
		name: String;
		/**
		*Storage object of the user
		*/
		storage: Storage;
		/**
		*returns an array of the groups to which the User belongs, filtered using the filterString parameter
		*/
		filterParents(filterString: String, level?: Boolean) : Array<Group>;
		/**
		*returns an array of the groups to which the User belongs, filtered using the filterString parameter
		*/
		filterParents(filterString: String, level?: String) : Array<Group>;
		/**
		*returns an array of the groups to which either the User belongs
		*/
		getParents(level?: Boolean) : Array<Group>;
		/**
		*returns an array of the groups to which the User belongs
		*/
		getParents(level?: String) : Array<Group>;
		/**
		*adds the User to the group(s) you passed in the groupList parameter
		*/
		putInto(...groupList: String[]) : void;
		/**
		*adds the User to the group(s) you passed in the groupList parameter
		*/
		putInto(...groupList: Group[]) : void;
		/**
		*removes the User or Group from the solution's Directory
		*/
		remove() : void;
		/**
		*removes the User from the group(s) you passed in the groupList parameter
		*/
		removeFrom(...groupList: String[]) : void;
		/**
		*removes the User from the group(s) you passed in the groupList parameter
		*/
		removeFrom(...groupList: Group[]) : void;
		/**
		*allows you to change the password for the User
		*/
		setPassword(password: String) : void;
	}interface Worker {
	/**
	*constructor of the class objects of the dedicated Worker type
	*/
	new(scriptPath: String) : Worker;
	/**
	*(WebSockets only) Data type of the client message
	*/
	binaryType: String;
	/**
	*(WebSockets only) Callback to trigger when the client socket is closed
	*/
	onclose: Function;
	/**
	*Callback to trigger when an error is reported
	*/
	onerror: Function;
	/**
	*Callback to trigger when a message is received
	*/
	onmessage(): void;
	/**
	*ends the thread from which it is called
	*/
	close() : void;
	/**
	*exchange data between a parent Worker proxy and a dedicated Web worker
	*/
	postMessage(messageData: any) : void;
	/**
	*terminate the dedicated worker execution
	*/
	terminate() : void;
	/**
	*allows a thread to handle events and to continue to exist after the complete code executes
	*/
	wait(timeout?: Number) : Boolean;
}
interface XMLHttpRequest {
	/**
	*constructor of the class objects of the XMLHttpRequest type
	*/
	new(proxy?: Object) : XMLHttpRequest;
	/**
	*Current state of the request
	*/
	readyState: Number;
	/**
	*Response body part (other than text)
	*/
	response: String;
	/**
	*Text response entity body
	*/
	responseText: String;
	/**
	*Data type of the response ("text" or "blob")
	*/
	responseType: String;
	/**
	*HTTP status code of the response
	*/
	status: Number;
	/**
	*HTTP status text of the response
	*/
	statusText: String;
	/**
	*defines the event listener function that will handle the various states of the XMLHttpRequest
	*/
	onreadystatechange: Function;
	/**
	*returns all HTTP headers from the response of the XMLHttprequest
	*/
	getAllResponseHeaders() : String;
	/**
	*returns the value of a specific header field in the response of the XMLHttpRequest
	*/
	getResponseHeader(header: String) : String;
	/**
	*declares the HTTP method and the URL of the XMLHttpRequest
	*/
	open(method: String, url: String, async?: Boolean) : void;
	/**
	*sends the request defined in the XMLHttpRequest
	*/
	send(data?: String) : void;
	/**
	*sends the request defined in the XMLHttpRequest
	*/
	send(data?: File) : void;
	/**
	*allows the request to be authenticated on the remote server with a client certificate, when necessary
	*/
	setClientCertificate(keyPath: String, certificatePath: String) : void;
	/**
	*set the value of a specific header field of the XMLHttpRequest
	*/
	setRequestHeader(header: String, value: String) : void;
}