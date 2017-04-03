interface TextStream {
	/**
	*creates a new TextStream object
	*/
	new(file: String, readMode: String, charset?: Number) : TextStream;
	/**
	*creates a new TextStream object
	*/
	new(file: File, readMode: String, charset?: Number) : TextStream;
	/**
	*closes the file referenced in the TextStream object
	*/
	close() : void;
	/**
	*returns true if the cursor position is after the last character of the file referenced in the TextStream object
	*/
	end() : Boolean;
	/**
	*saves the contents of the buffer to the disk file referenced in the TextStream object
	*/
	flush() : void;
	/**
	*returns the current position of the cursor in the TextStream object
	*/
	getPos() : Number;
	/**
	*returns the current size of the stream
	*/
	getSize() : Number;
	/**
	*reads characters from the file referenced in the TextStream object
	*/
	read(numBytesOrDelimiter?: Number) : String;
	/**
	*reads characters from the file referenced in the TextStream object
	*/
	read(numBytesOrDelimiter?: String) : String;
	/**
	*moves the stream cursor to the beginning of the TextStream object
	*/
	rewind() : void;
	/**
	*writes the data you passed in the text parameter in the TextStream object
	*/
	write(text: String) : void;
}