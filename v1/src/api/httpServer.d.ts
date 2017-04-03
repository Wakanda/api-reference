	/// <reference path="./httprequest.d.ts" />
	/// <reference path="./httpresponse.d.ts" />
	
	interface HttpServer {
		/**
		*Cache properties of the HTTP server
		*/
		cache: HttpServerCache;
		/**
		*Default charset value
		*/
		defaultCharSet: String;
		/**
		*Host name of the server
		*/
		hostName: String;
		/**
		*IP address of the server
		*/
		ipAddress: String;
		/**
		*Port listened to by the server
		*/
		port: Number;
		/**
		 *The current HTTP Request Object
		 */
		request: HTTPRequest;
		/**
		 *The current HTTP Response Object
		 */
		response: HTTPResponse;
		/**
		*SSL properties of the server
		*/
		ssl: HttpServerSSL;
		/**
		*Current status of the HTTP server
		*/
		started: Boolean;
		/**
		*installs a request handler function on the server
		*/
		addRequestHandler(pattern: String, filePath: String, functionName: String) : void;
		/**
		*installs a WebSocket handler script on the server
		*/
		addWebSocketHandler(pattern: String, filePath: String, socketID: String, shared: Boolean) : void;
		/**
		*uninstalls an existing HTTP request handler function running on the server
		*/
		removeRequestHandler(pattern: String, filePath: String, functionName: String) : void;
		/**
		*removes the WebSocket handler socketID from the server
		*/
		removeWebSocketHandler(socketID: String) : void;
		/**
		*starts the Wakanda HTTP server
		*/
		start() : void;
		/**
		*stops the Wakanda HTTP server
		*/
		stop() : void;
	}
	
	interface HttpServerCache {
		/**
		*Status of the HTTP server cache
		*/
		enabled: Boolean;
		/**
		*Size of the HTTP server cache in memory
		*/
		memorySize: Number;
	}
	
	interface HttpServerSSL {
		/**
		*Status of the SSL protocol on the server
		*/
		enabled: Boolean;
		/**
		*Port number for SSL connections
		*/
		port: Number;
		/**
		*returns the full path to the SSL certificates folder used by the server (if any)
		*/
		getCertificatePath() : String;
	}