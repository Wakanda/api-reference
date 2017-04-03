/// <reference path="./image.d.ts" />

interface MIMEMessage {
    /**
	*nth part of the multipart MIME message
	*/
    [n: number]: MIMEMessagePart;
	/**
	*Boundary tag used to delimit the parts
	*/
	boundary: String;
	/**
	*Number of parts
	*/
	count: Number;
	/**
	*Encoding type: 'multipart/form-data' or 'application/x-www-form-urlencoded'
	*/
	encoding: String;
	/**
	*Number of parts
	*/
	length: Number;
	/**
	*returns the MIME message as a Blob object
	*/
	toBlob(mimeType?: String) : Blob;
	/**
	*returns the MIME message as a Buffer object
	*/
	toBuffer() : void;
}

interface MIMEMessagePart {
    /**
	*Body as a BLOB
	*/
	asBlob: Blob;
	/**
	*Body as an image
	*/
	asPicture: Image;
	/**
	*Body as a Text string
	*/
	asText: String;
	/**
	*Name of the uploaded file
	*/
	fileName: String;
	/**
	*Content-type of the part
	*/
	mediaType: String;
	/**
	*Input field name
	*/
	name: String;
	/**
	*Size of the body (in bytes)
	*/
	size: Number;
	/**
	*saves the body of the part in the file whose path is passed in filePath
	*/
	save(filePath: String, overWrite?: Boolean) : void;
}