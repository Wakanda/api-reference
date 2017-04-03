interface Worker {
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
