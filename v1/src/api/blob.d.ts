/// <reference path="./buffer.d.ts" />

interface Blob{
	/**
	*constructor of the class objects of type Blob
	*/
	new(size: Number, filler?: Number, mimeType?: String) : Blob;
	/**
	*Size of the Blob in bytes
	*/
	size: Number;
	/**
	*Media type of the Blob expressed as MIME or "" if unknown
	*/
	type: String;
	/**
	*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
	*/
	copyTo(destination: File, overwrite?: Boolean) : void;
	/**
	*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
	*/
	copyTo(destination: File, overwrite?: String) : void;
	/**
	*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
	*/
	copyTo(destination: String, overwrite?: Boolean) : void;
	/**
	*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
	*/
	copyTo(destination: String, overwrite?: String) : void;
	/**
	*creates a new Blob object by referencing the contents of the bytes of the Blob to which it is applied, from start to end
	*/
	slice(start: Number, end: Number, mimeType?: String) : Blob;
	/**
	*returns a Buffer object containing a copy of the Blob bytes
	*/
	toBuffer() : Buffer;
	/**
	*get a string representation of the Blob contents
	*/
	toString(stringFormat?: String) : String;
}
