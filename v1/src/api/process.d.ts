interface Process {
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