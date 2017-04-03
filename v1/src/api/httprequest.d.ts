/// <reference path="./image.d.ts" />
/// <reference path="./mime.d.ts" />

interface HTTPRequest {
    /**
	*Body of the received message
	*/
	body: String|Image|Blob;
	/**
	*Content-type of the request as defined in the header
	*/
	contentType: String;
	/**
	*Header of the HTTPRequest
	*/
	headers: String[];
	/**
	*Host header of the request
	*/
	host: String;
	/**
	*True if the connection uses SSL, false otherwise
	*/
	isSSL: Boolean;
	/**
	*Local server IP address (IPv4 or IPv6)
	*/
	localAddress: String;
	/**
	*Local server port number
	*/
	localPort: Number;
	/**
	*HTTP method name
	*/
	method: String;
	/**
	*Parts of a HTTP body (for multipart forms)
	*/
	parts: MIMEMessage;
	/**
	*User password for authentified requests (BASIC mode only)
	*/
	password: String;
	/**
	*Raw URL of the request
	*/
	rawURL: String;
	/**
	*Remote client IP address (IPv4 or IPv6)
	*/
	remoteAddress: String;
	/**
	*Remote client port number
	*/
	remotePort: Number;
	/**
	*Request-line received by the server
	*/
	requestLine: String;
	/**
	*Decoded URL of the request
	*/
	url: String;
	/**
	*Path part of the request
	*/
	urlPath: String;
	/**
	*Query part of the request
	*/
	urlQuery: String;
	/**
	*User name for authentified request
	*/
	user: String;
	/**
	*Version of the HTTP protocol
	*/
	version: String;
}