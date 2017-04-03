interface SharedWorker {
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