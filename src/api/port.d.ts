interface Port {

    /**
     * Listen for worker or proxy worker errors.
     * 
     * ```javascript
     * workerPort.onerror = function( error )
     * {
     *    // We've got an error !
     *    console.log('Error message: '+ error.message);
     *    console.log('From file: '+ error.filename);
     *    console.log('Line: '+ error.lineno);
     * }
     * ```
     * 
     * @param error Error received on the port
     */
    onerror(error: Object): void;

    /**
     * Listen for worker or proxy worker messages.
     * 
     * ```javascript
     * workerPort.onmessage = function( message )
     * {
     *     // We've got a message !
     *     // The `message.data` is what the worker proxy sends using `postMessage()`. Could be a String, Number or an Object type.
     *     // Here, `message.data` contains an object: `{type: String, says: String}`
     *     var action = message.data;
     *     switch( action.type )
     *     {
     *         // It's a hello world message
     *         case 'hello':
     *             // Reply to the worker proxy
     *             workerPort.postMessage( {type: 'hello', says: 'Hello to you too!'} );
     *             break;
     * 
     *         // It's a terminate message
     *         case 'close':
     *             // Reply to the worker proxy
     *             workerPort.postMessage( {type: 'close', says: 'I will be back!'} );
     *             // Close the worker
     *             close();
     *             break;
     *     }
     * }
     * ```
     * 
     * @param message Message received on the port
     */
    onmessage(message: any): void;

    /**
     * Send a message to the worker or proxy worker.
     * 
     * #### Example 1: From a worker proxy
     * ```javascript
     * // Create a new SharedWorker and get the proxy worker
     * var myProxyWorker = new SharedWorker("backend/worker.js", "my-worker-name");
     * // Get the proxy worker port for communication
     * var proxyWorkerPort = myProxyWorker.port;
     * // Send a "wake up" message to the worker
     * proxyWorkerPort.postMessage('wake-up');
     * ```
     * 
     * #### Example 2: From a worker
     * ```javascript
     * // worker.js
     * onconnect = function( msg )
     * {
     *     // Get the worker port for communication with the worker proxy
     *     var workerPort = msg.ports[0];
     * 
     *     // Send a message to the worker proxy. The worker is up and running.
     *     workerPort.postMessage({type: 'connected', says: 'Hello world!'});
     * }
     * ```
     * 
     * @param messageData Message to send to the worker
     */
    postMessage(messageData: any): void;
}