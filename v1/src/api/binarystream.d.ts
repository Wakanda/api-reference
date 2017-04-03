///<reference path="./buffer.d.ts" />

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