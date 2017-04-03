
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
	}