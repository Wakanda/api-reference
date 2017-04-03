/// <reference path="./buffer.d.ts" />
/// <reference path="./folder.d.ts" />

interface SystemWorker {
    /**
     * Calls a system worker (asynchronous mode).
     * Use the system worker proxy to get the result.
     * 
     * #### Example 1: Do a simple CLI command
     * ```javascript
     * var workerProxy = new SystemWorker( 'sh -c ls -la /Users/<user>/Desktop' );
     * workerProxy.onerror = function ( event ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     * workerProxy.onmessage = function ( message ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     * workerProxy.onterminated = function ( event ) {
     *     console.log( event.type +': with exitStatus:'+ event.exitStatus );
     * }
     * // For testing purpose, wait for the worker to end. This makes it very similar to SystemWorker.exec().
     * // In real application, keep working in parallels and do not pause the current thread
     * workerProxy.wait();
     * ```
     * 
     * #### Example 2: Pass parameters, quotes and env variables options to the system worker
     * ```javascript
     * var myFolder = new Folder( 'PROJECT' );
     * var options = {
     *     parameters : { folder_ref : myFolder },
     *     quote : '"',
     *     variables : { ENV_VAR_1 : 'value1' }
     * };
     * var workerProxy = new SystemWorker( 'sh -c ls -la {file_ref}', options);
     * ```
     * 
     * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
     * @param cli Command line to execute
     * @param options Describes command line options
     * @returns Returns a system worker proxy
     */
    new (cli: String, options?: WAKSystemWorkerOptions): WAKSystemWorkerProxy;
    /**
     * Calls a system worker (asynchronous mode).
     * Use the system worker proxy to get the result.
     * 
     * #### Example 1: Do a simple CLI command
     * ```javascript
     * var workerProxy = new SystemWorker( ['sh', '-c', 'ls -la /Users/<user>/Desktop'] );
     * workerProxy.onerror = function ( event ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     * workerProxy.onmessage = function ( message ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     * workerProxy.onterminated = function ( event ) {
     *     console.log( event.type +': with exitStatus:'+ event.exitStatus );
     * }
     * // For testing purpose, wait for the worker to end. This makes it very similar to SystemWorker.exec().
     * // In real application, keep working in parallels and do not pause the current thread
     * workerProxy.wait();
     * ```
     * 
     * #### Example 2: Pass parameters, quotes and env variables options to the system worker
     * ```javascript
     * var myFolder = new Folder( 'PROJECT' );
     * var options = {
     *     parameters : { folder_ref : myFolder },
     *     quote : '"',
     *     variables : { ENV_VAR_1 : 'value1' }
     * };
     * var workerProxy = new SystemWorker( ['sh', '-c', 'ls -la {file_ref}'], options);
     * ```
     * 
     * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
     * @param cli Command line to execute
     * @param options Describes command line options
     * @returns Returns a system worker proxy
     */
    new (cli: String[], options?: WAKSystemWorkerOptions): WAKSystemWorkerProxy;
    /**
     * Calls a system worker (asynchronous mode).
     * Use the system worker proxy to get the result.
     * 
     * #### Example 1: Do a simple CLI command
     * ```javascript
     * // Launch "sh" executable with "-c" parameter and "ls -la /Users/<user>/Desktop" as the action to do
     * var workerResult = SystemWorker.exec( 'sh -c ls -la /Users/<user>/Desktop' );
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 2: Get the result and display the ouput
     * ```javascript
     * // Launch "git" executable with "--version" parameter
     * // Store the result (Buffer) in a variable
     * var workerResult = SystemWorker.exec( 'git --version' );
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 3: Pass root folder options to the system worker
     * ```javascript
     * var options = { folder: '/Users/yann/Desktop' };
     * var workerResult = SystemWorker.exec( 'sh -c ls -la', options);
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 4: Pass parameters, quotes and env variables options to the system worker
     * ```javascript
     * var myFolder = new Folder( 'PROJECT' );
     * var options = {
     *     parameters : { folder_ref : myFolder },
     *     quote : '"',
     *     variables : { ENV_VAR_1 : 'value1' }
     * };
     * var workerResult = SystemWorker.exec( 'sh -c ls -la {file_ref}', options);
     * console.log(workerResult.output.toString());
     * ```
     * 
     * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
     * @param cli Command line to execute
     * @param options Describes command line options
     * @returns Returns the exit status, stdout and sterr
     */
    exec(cli: String, options?: WAKSystemWorkerOptions): WAKSystemWorkerResult;
    /**
     * Calls to system worker and waits for its response (synchronous mode).
     * 
     * #### Example 1: Do a simple CLI command
     * ```javascript
     * // Launch "sh" executable with "-c" parameter and "ls -la /Users/<user>/Desktop" as the action to do
     * var workerResult = SystemWorker.exec( ['sh', '-c', 'ls -la /Users/<user>/Desktop'] );
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 2: Get the result and display the ouput
     * ```javascript
     * // Launch "git" executable with "--version" parameter
     * // Store the result (Buffer) in a variable
     * var workerResult = SystemWorker.exec( ['git', '--version'] );
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 3: Pass root folder options to the system worker
     * ```javascript
     * var options = { folder: '/Users/yann/Desktop' };
     * var workerResult = SystemWorker.exec( ['sh', '-c', 'ls -la'], options);
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 4: Pass parameters, quotes and env variables options to the system worker
     * ```javascript
     * var myFolder = new Folder( 'PROJECT' );
     * var options = {
     *     parameters : { folder_ref : myFolder },
     *     quote : '"',
     *     variables : { ENV_VAR_1 : 'value1' }
     * };
     * var workerResult = SystemWorker.exec( ['sh', '-c', 'ls -la {file_ref}'], options);
     * console.log(workerResult.output.toString());
     * ```
     * 
     * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
     * @param cli Command line to execute. First element is the executable. Then all next elements describe the parameters
     * @param options Describes command line options
     * @returns Returns the exit status, stdout and sterr
     */
    exec(cli: String[], options?: WAKSystemWorkerOptions): WAKSystemWorkerResult;
}

interface WAKSystemWorkerOptions {
    /**
     * Root folder for the worker executable. Native relative file paths will be resolved with this folder as parent.
     */
    folder?: String | WAKFolderInstance;
    /**
     * Passes named parameters to command line. `{name}` is replaced with the value of the `options.parameters.name` attribute. Parameters can be of type String, Number, File or Folder.
     */
    parameters?: Object;
    /**
     * Escapes character (can be an empty string). Named parameters may need to be escaped depending on the system worker and OS on which it is executed.
     */
    quote?: String;
    /**
     * String data to pass to system worker.
     */
    stdin?: String;
    /**
     * Defines custom environment variables for the system worker.
     */
    variables?: Object;
    /**
     * (default: `false`) `true` to terminate the process tree started by the system worker once terminated, `false` otherwise.
     */
    kill_process_tree?: Boolean;
}

interface WAKSystemWorkerResult {
    /**
     * Integer value depending on the executable. If the executable considers the operation has been executed successfully, exitStatus value is `0`.
     */
    exitStatus: Number;
    /**
     * stdout result of the command.
     */
    ouput: WAKBufferInstance;
    /**
     * stderr result of the command.
     */
    error: WAKBufferInstance;
}

interface WAKSystemWorkerEvent {
    /**
     * Either `message`, `error` or `terminate`.
     */
    type: String;
    /**
     * SystemWorker proxy which triggered the callback.
     */
    target: WAKSystemWorkerProxy;
    /**
     * Content of stdout.
     */
    data?: String | WAKBufferInstance;
    /**
     * `true` if the command line has been correctly executed.
     */
    hasStarted?: Boolean;
    /**
     * Exit status returned by the executed command.
     */
    exitStatus?: Number;
    /**
     * `true` if the user called `terminate()`.
     */
    forced?: Boolean;
}

interface WAKSystemWorkerProxy {
    /**
     * Callback for system worker errors.
     * 
     *```javascript
     * // Receives an error
     * workerProxy.onerror = function ( event ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     *```
     */
    onerror: (event: WAKSystemWorkerEvent) => void;
    /**
     * Callback for system worker messages.
     * The message can be sent into multiple chunks.
     *
     *```javascript
     * // Receives a message chunck
     * workerProxy.onmessage = function ( event ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     *```
     */
    onmessage: (event: WAKSystemWorkerEvent) => void;
    /**
     * Callback when the external process is terminating.
     * 
     * ```javascript
     * // Receives an "end" event from system worker
     * workerProxy.onterminated = function ( event ) {
     *     console.log( event.type +': with exitStatus:'+ event.exitStatus );
     * }
     * ```
     */
    onterminated: (event: WAKSystemWorkerEvent) => void;
    /**
     * Closes the input stream (stdin) of the external process. 
     * Useful when an attempt to write in the stdin of the external process with `postMessage()` is stuck. `endOfInput()` will release the execution.
     * 
     * ```javascript
     * // Create some data to gzip
     * var input = new Buffer( 'abcde', 'ascii' );
     * // Create an asynchronous system worker
     * var worker = new SystemWorker( 'gzip' );
     * // Send the compressed file on stdin.
     * worker.postMessage( input );
     * // Note that we call endOfInput() to indicate we're done. gzip (and most program waiting data from stdin) will wait for more data until the input is explicitely closed.
     * worker.endOfInput();
     * ```
     */
    endOfInput(): void;
    /**
     * Returns system worker information.
     */
    getInfos(): Object;
    /**
     * Write on the input stream (stdin) of the external process.
     * 
     * ```javascript
     * // Create an asynchronous system worker
     * var worker = new SystemWorker( 'gzip' );
     * // Send the compressed file on stdin.
     * worker.postMessage( 'abcde' );
     * // Note that we call endOfInput() to indicate we're done. gzip (and most program waiting data from stdin) will wait for more data until the input is explicitely closed.
     * worker.endOfInput();
     * ```
     */
    postMessage(stdin: String): void;
    /**
     * Write on the input stream (stdin) of the external process.
     * 
     * ```javascript
     * // Create some data to gzip
     * var input = new Buffer( 'abcde', 'ascii' );
     * // Create an asynchronous system worker
     * var worker = new SystemWorker( 'gzip' );
     * // Send the compressed file on stdin.
     * worker.postMessage( input );
     * // Note that we call endOfInput() to indicate we're done. gzip (and most program waiting data from stdin) will wait for more data until the input is explicitely closed.
     * worker.endOfInput();
     * ```
     */
    postMessage(stdin: WAKBufferInstance): void;
    /**
     * Set the type of data exchanged in the SystemWorker through the onmessage and onerror properties.
     * 
     * ```javascript
     * workerProxy.setBinary(true);
     * ```
     * 
     * @param binary `true` to return binary data by `onmessage` and `onerror`, `false` otherwise.
     */
    setBinary(binary: Boolean): void;
    /**
     * Forces the system worker to terminate its execution.
     * 
     * ```javascript
     * workerProxy.terminate();
     * workerProxy.terminate(true, true);
     * ```
     * 
     * @param waitForTermination (default: `false`) `true` if the current thread must wait for the system worker execution to end
     * @param killProcessTree (default: `false`) `true` if the system worker and all his childs must end
     */
    terminate(waitForTermination?: Boolean, killProcessTree?: Boolean): void;
    /**
     * Wait for the end of the system worker execution.
     * 
     * ```javascript
     * workerProxy.wait(1000);
     * workerProxy.wait();
     * ```
     * 
     * @param timeout Millisecond to wait for.
    */
    wait(timeout?: Number): Boolean;
}

