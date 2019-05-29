interface WakModelRequest {
    /**
     * Contains the decoded URL of the request.
     */
    url: String;
    /**
     * Contains the host header of the request.
     */
    host: String;
    /**
     * Contains the port number of the remote server.
     */
    port: String;
    /**
     * Contains the path part of the request.
     */
    path: String;
    /**
     * Contains the query part of the request.
     */
    query: String;
    /**
     * A key/value object containing the parameters list
     */
    parameters: any;
    /**
     * Contains the HTTP method name of the request.
     */
    method: String;
    /**
     * True if the connection to the remote server uses SSL, false otherwise.
     */
    ssl: boolean;
    /**
     * Get a header value
     * @param headerName The header name
     * @returns The header value
     * 
     * @example <br><br>
     * 
     * ```javascript
     * const header = request.getHeader("Custom-Header");
     * console.log(header)
     * ```
     */
    getHeader(headerName: String): String;
    /**
     * Override a header
     * @param headerName The header name
     * @param headerValue The header value
     * 
     * @example <br><br>
     * 
     * ```javascript
     * request.setHeader("Custom-Header", "a_token");
     * ```
     */
    setHeader(headerName: String, headerValue): void;
}

interface WakModel {
    /**
     * Event to customize REST requests to a remote 4D server on the fly.
     * 
     * @param request The request object
     * 
     * @warning  This is an enterprise feature <br><br>
     * 
     * You can customize requests by using `onSendRequest` in the remote model in the model.js file. The `onSendRequest` is called from all exiting requests.
     * 
     * @example <br><br>
     * 
     * ```javascript
     * model.onSendRequest = function (request) {
     *     // request properties:
     *     request.url;
     *     // raw url string
     *     request.host;
     *     request.port;
     *     request.path;
     *     request.query;
     *     request.parameters;
     *     request.method;
     *     // request method string ("GET", "POST", "DELETE", ...)
     *     request.ssl;
     * 
     *     // request headers getter and setter
     *     request.getHeader("Custom-Header");
     *     request.setHeader("Custom-Header", "a_token");
     * };
     * ```
     */
    onSendRequest(request: WakModelRequest): void;
    /**
     * Event to handle REST request timeouts to a remote 4D server.
     * 
     * @param request The request object
     * 
     * @warning  This is an enterprise feature <br><br>
     */
    onRequestTimeout(request: WakModelRequest): void;
}