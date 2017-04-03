interface OS {
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