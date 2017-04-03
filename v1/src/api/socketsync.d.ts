interface SocketSync {
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