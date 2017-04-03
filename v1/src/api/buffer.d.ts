
	interface Buffer {
		/**
		*constructor of the class objects of the Buffer type
		*/
		new(definition: Number, encoding?: String) : Buffer;
		/**
		*Number of bytes of the buffer
		*/
		length: Number;
		/**
		*copies into targetBuffer the Buffer to which it is applied
		*/
		copy(targetBuffer: Buffer, targetOffset: Number, sourceOffset: Number, sourceEnd?: Number) : void;
		/**
		*fills the Buffer to which it is applied with the character you passed in value
		*/
		fill(value: String, offset: Number, length?: Number) : void;
		/**
		*returns a 64 bit double value read from the Buffer with the Big Endian format
		*/
		readDoubleBE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a 64 bit double value read from the Buffer with the Little Endian format
		*/
		readDoubleLE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a 32-bit float value read from the Buffer with the Big Endian format
		*/
		readFloatBE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a 32-bit float value read from the Buffer with the Little Endian format
		*/
		readFloatLE(offset: Number, noAssert: Boolean) : Number;
		/**
		*returns an unsigned 16-bit integer value read from the Buffer with the Big Endian format
		*/
		readInt16BE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a signed 16-bit integer value read from the Buffer with the Little Endian format
		*/
		readInt16LE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a signed 24-bit integer value read from the Buffer with the Big Endian format
		*/
		readInt24BE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a signed 24-bit integer value read from the Buffer with the Little Endian format
		*/
		readInt24LE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a signed 32-bit integer value read from the Buffer with the Big Endian format
		*/
		readInt32BE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a signed 32-bit integer value read from the Buffer with the Little Endian format
		*/
		readInt32LE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns a signed 8-bit integer value read from the Buffer to which it is applied
		*/
		readInt8(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns an unsigned 16-bit integer value read from the Buffer with the Big Endian format
		*/
		readUInt16BE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns an unsigned 16-bit integer value read from the Buffer with the Little Endian format
		*/
		readUInt16LE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns an unsigned 24-bit integer value read from the Buffer with the Big Endian format
		*/
		readUInt24BE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns an unsigned 24-bit integer value read from the Buffer with the Little Endian format
		*/
		readUInt24LE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns an unsigned 32-bit integer value read from the Buffer with the Big Endian format
		*/
		readUInt32BE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns an unsigned 32-bit integer value read from the Buffer with the Little Endian format
		*/
		readUInt32LE(offset: Number, noAssert?: Boolean) : Number;
		/**
		*returns an unsigned 8-bit integer value read from the Buffer to which it is applied
		*/
		readUInt8(offset: Number, noAssert?: Boolean) : Number;
		/**
		*creates a new Buffer object by referencing the contents of the bytes array of the Buffer to which it is applied, from start to end
		*/
		slice(start: Number, end?: Number) : Buffer;
		/**
		*returns a Blob object containing a copy of the Buffer bytes
		*/
		toBlob(mimeType?: String) : Blob;
		/**
		*converts the buffer contents into a string
		*/
		toString(encoding: String, start: Number, end?: Number) : String;
		/**
		*writes the string parameter to the Buffer at the offset position and returns the number of bytes written
		*/
		write(string: String, offset?: Number, encoding?: String) : Number;
		/**
		*writes the 64-bit double value to the Buffer with the Big Endian format
		*/
		writeDoubleBE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 64-bit double value to the Buffer with the Little Endian format
		*/
		writeDoubleLE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 32-bit float value to the Buffer with the Big Endian format
		*/
		writeFloatBE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 32-bit float value to the Buffer with the Little Endian format
		*/
		writeFloatLE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 16-bit signed integer value to the Buffer with the Big Endian format
		*/
		writeInt16BE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 16-bit signed integer value to the Buffer with the Little Endian format
		*/
		writeInt16LE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 24-bit signed integer value to the Buffer with the Big Endian format
		*/
		writeInt24BE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 24-bit signed integer value to the Buffer with the Little Endian format
		*/
		writeInt24LE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 32-bit signed integer value to the Buffer with the Big Endian format
		*/
		writeInt32BE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 32-bit signed integer value to the Buffer with the Little Endian format
		*/
		writeInt32LE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 8-bit signed integer value to the Buffer to which it is applied
		*/
		writeInt8(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 16-bit unsigned integer value to the Buffer with the Big Endian format
		*/
		writeUInt16BE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 16-bit unsigned integer value to the Buffer with the Little Endian format
		*/
		writeUInt16LE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 24-bit unsigned integer value to the Buffer with the Big Endian format
		*/
		writeUInt24BE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 24-bit unsigned integer value to the Buffer with the Little Endian format
		*/
		writeUInt24LE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 32-bit unsigned integer value to the Buffer with the Big Endian format
		*/
		writeUInt32BE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 32-bit unsigned integer value to the Buffer with the Little Endian format
		*/
		writeUInt32LE(value: Number, offset: Number, noAssert?: Boolean) : void;
		/**
		*writes the 8-bit unsigned integer value to the Buffer to which it is applied
		*/
		writeUInt8(value: Number, offset: Number, noAssert?: Boolean) : void;
	}