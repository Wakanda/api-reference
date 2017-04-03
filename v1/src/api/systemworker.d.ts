interface SystemWorker {
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
