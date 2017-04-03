/// <reference path="./file.d.ts" />

interface XMLHttpRequest {
    /**
     * Creates a XMLHttpRequest (XHR).
     * 
     * ```javascript
     * var xhr = new XMLHttpRequest();
     * 
     * // XHR event handler. 
     * xhr.onreadystatechange = function() {
     * 
     *     // Get xhr states
     *     var state = this.readyState;
     *
     *     // Only consider the "done" state. Skip others
     *     if (state !== 4) { 
     *         return;
     *     }
     *
     *     // Get xhr response headers
     *     var headers = this.getAllResponseHeaders();
     *
     *     // Get xhr response text contents
     *     var result = this.responseText;
     *
     *     // Display the result when received
     *     console.log( result );
     * };
     * 
     * // Get server rest info
     * // Synchronous xhr request
     * xhr.open( 'GET', 'http://127.0.0.1:8081/rest/$info' );
     * 
     * // Send the XHR request
     * xhr.send();
     * ```
     * 
     * @warning Sends synchronous XHR request.
     * @param proxy `{host: String, port: Number}` Overrides the system proxy settings
     */
    new (proxy?: Object): XMLHttpRequest;
    /**
     * Current state of the request.
     * See [doc center](http://doc.wakanda.org/home2.en.html#/Wakanda Studio/0.Beta/readyState.303-867831.en.html) for more details about xhr states.
     */
    readonly readyState: number;
    /**
     * Response body part (other than text).
     */
    readonly response: any;
    /**
     * Text response entity body.
     */
    readonly responseText: string;
    /**
     * Data type of the response ("text" or "blob").
     */
    responseType: string;
    /**
     * HTTP status code of the response.
     */
    readonly status: number;
    /**
     * HTTP status text of the response.
     */
    readonly statusText: string;
    /**
     * Defines the event listener function that will handle the various states of the XMLHttpRequest.
     * See [doc center](http://doc.wakanda.org/home2.en.html#/Wakanda Studio/0.Beta/readyState.303-867831.en.html) for more details about xhr states.
     */
    onreadystatechange: (this: XMLHttpRequest, event: Event) => any;
    /**
     * Returns all HTTP headers from the response of the XMLHttprequest.
     */
    getAllResponseHeaders(): String;
    /**
     * Returns the value of a specific header field in the response of the XMLHttpRequest.
     */
    getResponseHeader(header: String): String;
    /**
     * Declares the HTTP method and the URL of the XMLHttpRequest.
     * @param method HTTP method
     * @param url URL of the request
     */
    open(method: String, url: String): void;
    /**
     * Sends the XHR opened request.
     * 
     * #### Example 1: Basic usage
     * ```javascript
     * var xhr = new XMLHttpRequest();
     * xhr.open( 'GET', 'http://127.0.0.1:8081/rest/$info' );
     * xhr.send();
     * ```
     * 
     * #### Example 2: Upload file
     * See [doc center](http://doc.wakanda.org/home2.en.html#/HTTP-REST/Interacting-with-the-Server/upload.303-1158401.en.html) for more details about upload
     * ```javascript
     * var xhr = new XMLHttpRequest();
     * xhr.open('PUT', 'http://127.0.0.1:8081/rest/$upload?$rawPict=true');
     * xhr.setRequestHeader( 'Content-Type', 'image/jpeg' );
     * xhr.onreadystatechange = function() {
     *     if (this.readyState !== 4) { 
     *         return;
     *     }
     *     // Displays the upload result ID to use as reference in Wakanda DB
     *     console.log( 'Upload ID:'+ xhr.responseText );
     * }
     * xhr.send( 'PROJECT/my-image.jpg' );
     * ```
     * 
     * @warning Sends synchronous XHR request.
     * @param data Data to send in the request `body`
     */
    send(data?: String): void;
    /**
     * Sends the XHR opened request.
     * 
     * #### Example 1: Basic usage
     * ```javascript
     * var xhr = new XMLHttpRequest();
     * xhr.open( 'GET', 'http://127.0.0.1:8081/rest/$info' );
     * xhr.send();
     * ```
     * 
     * #### Example 2: Upload file
     * See [doc center](http://doc.wakanda.org/home2.en.html#/HTTP-REST/Interacting-with-the-Server/upload.303-1158401.en.html) for more details about upload
     * ```javascript
     * var myFile = new File( 'PROJECT/my-image.jpg' );
     * var xhr = new XMLHttpRequest();
     * xhr.open('PUT', 'http://127.0.0.1:8081/rest/$upload?$rawPict=true');
     * xhr.setRequestHeader( 'Content-Type', 'image/jpeg' );
     * xhr.onreadystatechange = function() {
     *     if (this.readyState !== 4) { 
     *         return;
     *     }
     *     // Displays the upload result ID to use as reference in Wakanda DB
     *     console.log( 'Upload ID:'+ xhr.responseText );
     * }
     * xhr.send( myFile );
     * ```
     * 
     * @warning Sends synchronous XHR request.
     * @param data Data to send in the request `body`
     */
    send(data?: WAKFileInstance | WAKBlobInstance | WAKBufferInstance ): void;
    /**
     * Allows the request to be authenticated on the remote server with a client certificate, when necessary.
     * @param keyPath Path to the PEM format private key
     * @param certificatePath Path to the local PEM format certificate
     */
    setClientCertificate(keyPath: String, certificatePath: String): void;
    /**
     * Set the value of a specific header field of the XMLHttpRequest.
     * 
     * ```javascript
     * var xhr = new XMLHttpRequest();
     * xhr.open('GET', 'http://127.0.0.1:8081/rest/$info');
     * xhr.setRequestHeader('X-Test', 'one');
     * xhr.setRequestHeader('X-Test', 'two');
     * xhr.send();
     * ```
     * 
     * @param header The header field name
     * @param value The header field value
     */
    setRequestHeader(header: String, value: String): void;
}
