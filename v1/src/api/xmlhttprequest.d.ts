interface XMLHttpRequest {
	/**
	*constructor of the class objects of the XMLHttpRequest type
	*/
	new(proxy?: Object) : XMLHttpRequest;
	/**
	*Current state of the request
	*/
	readyState: Number;
	/**
	*Response body part (other than text)
	*/
	response: String;
	/**
	*Text response entity body
	*/
	responseText: String;
	/**
	*Data type of the response ("text" or "blob")
	*/
	responseType: String;
	/**
	*HTTP status code of the response
	*/
	status: Number;
	/**
	*HTTP status text of the response
	*/
	statusText: String;
	/**
	*defines the event listener function that will handle the various states of the XMLHttpRequest
	*/
	onreadystatechange: Function;
	/**
	*returns all HTTP headers from the response of the XMLHttprequest
	*/
	getAllResponseHeaders() : String;
	/**
	*returns the value of a specific header field in the response of the XMLHttpRequest
	*/
	getResponseHeader(header: String) : String;
	/**
	*declares the HTTP method and the URL of the XMLHttpRequest
	*/
	open(method: String, url: String, async?: Boolean) : void;
	/**
	*sends the request defined in the XMLHttpRequest
	*/
	send(data?: String) : void;
	/**
	*sends the request defined in the XMLHttpRequest
	*/
	send(data?: File) : void;
	/**
	*allows the request to be authenticated on the remote server with a client certificate, when necessary
	*/
	setClientCertificate(keyPath: String, certificatePath: String) : void;
	/**
	*set the value of a specific header field of the XMLHttpRequest
	*/
	setRequestHeader(header: String, value: String) : void;
}