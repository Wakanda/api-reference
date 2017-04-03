		
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
		write(data: WAKBufferInstance, encoding?: String) : Boolean;
		/**
		*writes data to the socket to which it is applied
		*/
		write(data: String, encoding?: String) : Boolean;
	}