/// <reference path="./file.d.ts" />

interface TextStream {
    /**
     * Creates a textStream.
     * 
     * ```javascript
     * // The file does not have to exist
     * var myStream = new TextStream( 'PROJECT/my-streamed-file.js', 'write' );
     * // Creates the file if it does not exist
     * myStream.write( 'Hello '+ Date.now() +' !\n' );
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     * 
     * @param file Binary text file to reference. The file does not to exist
     * @param mode Opens a stream in `Write`, `Read` or `Overwrite` mode
     * @param charset (default: 7) Character set of the text. See more details on [charset](http://doc.wakanda.org/home2.en.html#/Files-and-Folders/TextStream/TextStream.301-684310.en.html)
     */
    new (file: String, mode: String, charset?: Number): WAKTextStreamInstance;
    /**
     * Creates a textStream.
     * 
     * ```javascript
     * // The file does not have to exist
     * var myFile = new File( 'PROJECT/my-streamed-file.js' );
     * var myStream = new TextStream( file, 'write' );
     * // Creates the file if it does not exist
     * myStream.write( 'Hello '+ Date.now() +' !\n' );
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     * 
     * @param file Binary text file to reference. The file does not to exist
     * @param mode Opens a stream in `Write`, `Read` or `Overwrite` mode
     * @param charset (default: 7) Character set of the text. See more details on [charset](http://doc.wakanda.org/home2.en.html#/Files-and-Folders/TextStream/TextStream.301-684310.en.html)
     */
    new (file: WAKFileInstance, mode: String, charset?: Number): WAKTextStreamInstance;
}

interface WAKTextStreamInstance {
    /**
     * Closes the file referenced in the TextStream object.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/my-streamed-file.js' );
     * var myStream = new TextStream( file, 'write' );
     * myStream.write( 'Hello '+ Date.now() +' !\n' );
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     */
    close(): void;
    /**
     * Checks if the the cursor position is after the last character of the file referenced in the TextStream object.
     * 
     * ```javascript
     * var myStream = new TextStream( 'PROJECT/bootstrap.js', 'Read' );
     * // Is end of file reached ?
     * while( !myStream.end() ){
     *     console.log( myStream.read( 10 ) );
     * }
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     * 
     * @returns `true` if the cursor position is at the end of file, `false` otherwise.
     */
    end(): Boolean;
    /**
     * Saves the contents of the TextStream buffer to the disk file.
     */
    flush(): void;
    /**
     * Get the current cursor position in the text stream.
     * 
     * ```javascript
     * var myStream = new TextStream( 'PROJECT/bootstrap.js', 'Read' );
     * while( !myStream.end() ){
     *     myStream.read( 10 );
     *     console.log( myStream.getPos() );
     *     // 10, 20, 30, ...
     * }
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     */
    getPos(): Number;
    /**
     * Get the current text stream size.
     * 
     * ```javascript
     * var myStream = new TextStream( 'PROJECT/bootstrap.js', 'Read' );
     * console.log( myStream.getSize() );
     * // 183
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     */
    getSize(): Number;
    /**
     * Reads bytes from the text stream.
     * 
     * ```javascript
     * var myStream = new TextStream( 'PROJECT/bootstrap.js', 'Read' );
     * while( !myStream.end() ){
     *     // Read the next 10 bytes and moves the cursor position accordingly
     *     console.log( myStream.read( 10 ) );
     * }
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     * 
     * @param nbBytes (default: `TextStream.getSize()`) Number of bytes to read
     */
    read(nbBytes?: Number): String;
    /**
     * Set the cursor position to the beginning of the TextStream.
     * 
     * ```javascript
     * var myStream = new TextStream( 'PROJECT/bootstrap.js', 'Read' );
     * console.log( 'Start: '+ myStream.getPos() );
     * myStream.read(20);
     * console.log( 'After read: '+ myStream.getPos() );
     * myStream.rewind();
     * console.log( 'After rewind: '+ myStream.getPos() );
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     */
    rewind(): void;
    /**
     * Writes the text in the TextStream.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/my-streamed-file.js' );
     * var myStream = new TextStream( file, 'write' );
     * myStream.write( 'Hello '+ Date.now() +' !\n' );
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     * 
     * @param text String to write in the TextStream
     */
    write(text: String): void;
}