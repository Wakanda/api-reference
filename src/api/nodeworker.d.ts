/// <reference path="./port.d.ts" />

/**
 * ### Node worker
 * 
 * A node worker is composed of 2 elements:
 * - A thread running the node worker
 * - One or more proxies communicating with the worker thread
 * 
 * ### Step 1: Define the node worker
 * 
 * ```javascript
 * // PROJECT/worker.js
 * // onconnect is called everytime a new worker proxy is created
 * onconnect = function( event )
 * {
 *     // Get the worker port for communication with the worker proxy
 *     // Always use `ports[0]`
 *     var workerPort = event.ports[0];
 * 
 *     // Send a message to the worker proxy. The worker is up and running.
 *     workerPort.postMessage({type: 'connected', says: "I'm alive!"});
 * 
 *     // Listen for worker proxy messages
 *     workerPort.onmessage = function( event )
 *     {
 *         // Worker receives a message !
 *         // The `event.data` is what the worker proxy sends using `postMessage()`. Could be a String, Number or an Object type.
 *         // Here, `event.data` contains an object: `{type: String, says: String}`
 *         var message = event.data;
 *         switch( message.type )
 *         {
 *             // It's a hello world message
 *             case 'hello':
 *                 console.log( '[RECEIVED BY WORKER] '+ message.says );
 *                 // Reply to the worker proxy
 *                 workerPort.postMessage( {type: 'hello', says: 'Hello proxy!'} );
 *                 break;
 * 
 *             // It's a terminate message
 *             case 'close':
 *                 console.log( '[RECEIVED BY WORKER] '+ message.says );
 *                 // Reply to the worker proxy
 *                 workerPort.postMessage( {type: 'close', says: 'I will be back!'} );
 *                 // Close the worker
 *                 console.log( '[WORKER] Worker stops' );
 *                 close();
 *                 break;
 * 
 *             // It's something else. Skip it.
 *             default:
 *                 break;
 *         }
 *     }
 * }
 * ```
 * 
 * #### How to require a node module ?
 * The module should be defined in `PROJECT/node_modules`
 * 
 * ```javascript
 * var myModule = requireNode( 'myModule' );
 * ```
 * 
 * #### How to require a wakanda module ?
 * The module should be defined in `PROJECT/modules`
 * 
 * ```javascript
 * var myModule = require( 'myModule' );
 * ```
 *  
 * ### Step 2: Create the node worker thread and get the worker proxy
 * 
 * ```javascript
 * // PROJECT/proxy.js
 * // Create a new NodeWorker and get the proxy worker
 * var myWorkerProxy = new NodeWorker( 'backend/worker.js', 'my-worker-name' );
 * // Get the proxy worker port for communication
 * var workerProxyPort = myWorkerProxy.port;
 * // Send a "hello" message to the worker
 * workerProxyPort.postMessage( {type: 'hello', says: 'Hello worker !'} );
 * ```
 * 
 * ### Step 3: Listen for node worker messages
 * 
 * ```javascript
 * // PROJECT/proxy.js
 * // Listen for worker thread messages
 * workerProxyPort.onmessage = function( event )
 * {
 *     // Proxy receives a message !
 *     // Same as before, the `event.data` is what the worker proxy sends using `postMessage()`. Could be a String, Number or an Object type.
 *     // Here, `event.data` contains an object: `{type: String, says: String}`
 *     var message = event.data;
 *     switch( message.type )
 *     {
 *         // It's a hello world message
 *         case 'hello':
 *             console.log( '[RECEIVED BY PROXY] '+ message.says );
 *             // Say by to the worker
 *             workerProxyPort.postMessage( {type: 'close', says: 'Bye bye worker!'} );
 *             break;
 * 
 *         // It's a terminate message
 *         case 'close':
 *             console.log( '[RECEIVED BY PROXY] '+ message.says );
 *             exitWait();
 * 
 *         // It's something else. Skip it.
 *         default:
 *             break;
 *     }
 * }
 * wait();
 * ```
 */

interface NodeWorker {
    /**
     * Node worker constructor.
     * Creates a new node worker in its own thread if it does not exist yet. Then it returns a proxy object to communicate with the node worker thread.
     * Node workers can be addressed from any thread, they are uniquely identified by their path and name.
     * 
     * ```javascript
     * // "worker.js" is defined in PROJECT/worker.js
     * var myWorkerProxy = new NodeWorker( 'backend/worker.js', 'my-worker-name' );
     * ```
     * 
     * @param scriptPath Describes the path to worker javaScript file
     * @param workerName Describes the worker name
     * @returns Returns a node worker proxy
     */
    new (scriptPath: String, workerName?: String): WAKNodeWorkerProxy;
}

interface WAKNodeWorkerProxy {
    /**
     * Use the proxy port to communicate with the node worker thread.
     * 
     * ```javascript
     * // Create a new NodeWorker and get the proxy worker
     * var myWorkerProxy = new NodeWorker( 'backend/worker.js', 'my-worker-name' );
     * // Get the proxy worker port for communication
     * var workerProxyPort = myWorkerProxy.port;
     * // Send a "wake up" message to the worker
     * workerProxyPort.postMessage( 'wake-up' );
     * ```
     */
    port: Port;
}