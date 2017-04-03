/// <reference path="./image.d.ts" />
/// <reference path="./mime.d.ts" />

interface HTTPResponse {
	/**
	*Body of the returned message to set
	*/
	body: Blob|Image|String;
	/**
	*Content-type of the response to set
	*/
	contentType: String;
	/**
	*Header of the HTTPResponse
	*/
	headers: String[];
	/**
	*Return status code to set
	*/
	statusCode: Number;
	/**
	*indicates if the contents of the HTTPResponse should be cached on the server
	*/
	allowCache(useCache: Boolean) : void;
	/**
	*sets custom compression thresholds for the HTTPResponse
	*/
	allowCompression(minThreshold: Number, maxThreshold: Number) : void;
	/**
	*sends an HTTPResponse in chunks without knowing in advance the size of the data
	*/
	sendChunkedData(data: String) : void;
	/**
	*sends an HTTPResponse in chunks without knowing in advance the size of the data
	*/
	sendChunkedData(data: Image) : void;
	/**
	*sends an HTTPResponse in chunks without knowing in advance the size of the data
	*/
	sendChunkedData(data: Blob) : void;
}