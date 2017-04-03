/// <reference path="./httprequest.d.ts" />
/// <reference path="./httpresponse.d.ts" />

interface HttpServer {
    /**
     * Cache properties of the HTTP server.
     */
    readonly cache: HttpServerCache;
    /**
     * Default charset value.
     */
    readonly defaultCharSet: String;
    /**
     * Host name of the server.
     */
    readonly hostName: String;
    /**
     * IP address of the server.
     */
    readonly ipAddress: String;
    /**
     * Port listened to by the server.
     */
    readonly port: Number;
    /**
     * The current HTTP Request Object.
     */
    readonly request: HTTPRequest;
    /**
     * The current HTTP Response Object.
     */
    readonly response: HTTPResponse;
    /**
     * SSL properties of the server.
     */
    readonly ssl: HttpServerSSL;
    /**
     * Return true if the HTTP Server is started.
     */
    readonly started: Boolean;
    /**
     * Adds a request handler function on the server.
     * It is recommended to write all request handler in the `bootstrap.js` file in order to be available at server start up.
     * 
     * #### Step 1: Add a request handler
     * ```javascript
     * // It is recommended to write these lines in bootstrap.js
     * // On every "/ping" requests, call "pong()" function in "request-greetings" module
     * httpServer.addRequestHandler('^/ping$', 'request-greetings', 'pong');
     * ```
     * 
     * #### Step 2: Handle the request
     * ```javascript
     * // modules/request-greetings/index.js
     * exports.pong = function pong( request, response ){
     *     return 'pong';
     * }
     * ```
     * 
     * @param pattern Regexp pattern to intercept a HTTP request
     * @param modulePath Path to the module that exports the functionName
     * @param functionName Function name which handles the request and returns the request response
     */
    addRequestHandler(pattern: String, modulePath: String, functionName: String): void;
    /**
     * Adds a request handler function on the server.
     * It is recommended to write all request handler in the `bootstrap.js` file in order to be available at server start up.
     * 
     * #### Step 1: Add a request handler
     * ```javascript
     * // It is recommended to write these lines in bootstrap.js
     * // On every "/ping" requests, call "pong()" function in "request-greetings.js"
     * httpServer.addRequestHandler('^/ping$', 'request-greetings.js', 'pong');
     * ```
     * 
     * #### Step 2: Handle the request
     * ```javascript
     * // request-greetings.js
     * function pong( request, response ){
     *     return 'pong';
     * }
     * ```
     * 
     * @param pattern Regexp pattern to intercept a HTTP request
     * @param filePath Path to the file that defines the functionName
     * @param functionName Function name which handles the request and returns the request response
     */
    addRequestHandler(pattern: String, filePath: String, functionName: String): void;
    /**
     * Adds a WebSocket handler script on the server.
     * It is recommended to write all websocket handler in the `bootstrap.js` file in order to be available at server start up.
     * 
     * #### Step 1: Add a websocket handler
     * ```javascript
     * // It is recommended to write these lines in bootstrap.js
     * httpServer.addWebSocketHandler('^/ping$', './websocket-greetings.js', 'websocket-id', true);
     * ```
     * 
     * #### Step 2: Handle the websocket
     * ```javascript
     * // ./websocket-greetings.js
     * // Same as for ShareWorker
     * // Called every time a new websocket is connected
     * onconnect = function ( msg ) {
     * 
     *     // Get the websocket port
     *     var wsPort = msg.ports[0];
     * 
     *     // Called every time a client sends a message    
     *     wsPort.onmessage = function( message ) {
     * 
     *         // Process data send by the client
     *         if ( message.data == 'hello' ){
     *             console.log( 'websocket data received: '+ message.data );
     *             // Send a response to client
     *             wsPort.postMessage( 'Hello back !' );
     *         }else{
     *             console.log( 'websocket data skipped: '+ JSON.stringify(message) );
     *         }
     *     };
     * 
     *     // Called when the socket receives an error
     *     wsPort.onerror = function() { 
     *         // Handle websocket errors
     *     };
     * 
     *     // Called when the socket is closed
     *     wsPort.onclose = function() { 
     *         // Do nothing and wait for another websocket connection
     *     };
     * };
     * ```
     * 
     * @param pattern Regexp pattern to intercept a WS request
     * @param filePath Absolute or relative path from the project to the file that defines the websocket handler. Filesystem are not working in filePath parameter (`PROJECT`, `SOLUTION`, ...).
     * @param socketID Socket ID usefull for `removeWebSocketHandler()`
     * @param sharedWorker `true` if uses shared worker (recommended). `false` if uses dedicated worker.
     */
    addWebSocketHandler(pattern: String, filePath: String, socketID: String, sharedWorker: Boolean): void;
    /**
     * Removes an existing request handler function on the server.
     * 
     * ```javascript
     * // Must match parameters of "addRequestHandler()"
     * // httpServer.addRequestHandler('^/ping$', 'request-greetings', 'pong');
     * httpServer.removeRequestHandler('^/ping$', 'request-greetings', 'pong');
     * ```
     * 
     * @param pattern Regexp pattern to intercept a HTTP request
     * @param modulePath Path to the module that exports the functionName
     * @param functionName Function name which handles the request
     */
    removeRequestHandler(pattern: String, modulePath: String, functionName: String): void;
    /**
     * Removes an existing request handler function on the server.
     * 
     * ```javascript
     * // Must match parameters of "addRequestHandler()"
     * // httpServer.addRequestHandler('^/ping$', 'request-greetings.js', 'pong');
     * httpServer.removeRequestHandler('^/ping$', 'request-greetings.js', 'pong');
     * ```
     * 
     * @param pattern Regexp pattern to intercept a HTTP request
     * @param filePath Path to the file that defines the functionName
     * @param functionName Function name which handles the request
     */
    removeRequestHandler(pattern: String, filePath: String, functionName: String): void;
    /**
     * Removes an existing websocket handler on the server.
     * 
     * ```javascript
     * // Must match socketID parameter of "addWebSocketHandler()"
     * // httpServer.addWebSocketHandler('^/ping$', 'backend/websocket-greetings.js', 'websocket-id', true);
     * httpServer.removeWebSocketHandler( 'websocket-id' );
     * ```
     * 
     * @param socketID Identifies the websocket to remove
     */
    removeWebSocketHandler(socketID: String): void;
    /**
     * Starts the Wakanda HTTP server.
     */
    start(): void;
    /**
     * Stops the Wakanda HTTP server.
     */
    stop(): void;
}

interface HttpServerCache {
    /**
     * Status of the HTTP server cache.
     */
    readonly enabled: Boolean;
    /**
     * Size of the HTTP server cache in memory.
     */
    readonly memorySize: Number;
}

interface HttpServerSSL {
    /**
     * Status of the SSL protocol on the server.
     */
    readonly enabled: Boolean;
    /**
     * Port number for SSL connections.
     */
    readonly port: Number;
    /**
     * Get the full path to the SSL certificates folder used by the server (if any).
     */
    getCertificateFolder(): String;
    /**
     * Get the full path to the SSL certificates path used by the server (if any).
     */
    getCertificatePath(): String;
}
