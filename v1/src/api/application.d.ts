/// <reference path="./directory.d.ts" />
/// <reference path="./datastore.d.ts" />
/// <reference path="./httpServer.d.ts" />
/// <reference path="./permissions.d.ts" />
/// <reference path="./solution.d.ts" />
/// <reference path="./user.d.ts" />
/// <reference path="./binarystream.d.ts" />
/// <reference path="./socket.d.ts" />
/// <reference path="./socketsync.d.ts" />
/// <reference path="./filesystemsync.d.ts" />
/// <reference path="./folder.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./connectionsession.d.ts" />
/// <reference path="./jobmanager.d.ts" />
/// <reference path="./progressindicator.d.ts" />
/// <reference path="./image.d.ts" />
/// <reference path="./textstream.d.ts" />
/// <reference path="./module.d.ts" />
/// <reference path="./entrysync.d.ts" />
/// <reference path="./sharedworker.d.ts" />
/// <reference path="./systemworker.d.ts" />
/// <reference path="./worker.d.ts" />
/// <reference path="./xmlhttprequest.d.ts" />
/// <reference path="./keyvaluestorage.d.ts" />
/// <reference path="./process.d.ts" />
/// <reference path="./os.d.ts" />
/// <reference path="./connectionsessioninfo.d.ts" />

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