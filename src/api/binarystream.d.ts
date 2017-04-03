///<reference path="./buffer.d.ts" />
///<reference path="./blob.d.ts" />
///<reference path="./socket.d.ts" />
///<reference path="./socketSync.d.ts" />

interface BinaryStream {
    /**
     * Creates a new BinaryStream object.
     * 
     * ```javascript
     * var readstream = new BinaryStream( 'PROJECT/logs/HTTPServer.waLog' );
     * console.log( '[chunck] '+ readstream.getBuffer(1000).toString() );
     * // Important to close the stream after every use to release the referenced file
     * readstream.close();
     * ```
     * 
     * @param binary Describes the binary to read/write.
     * @param readMode (default: `read`) `Write` if in write mode, `Read` otherwise.
     */
    new (binary: String, readMode?: String): WAKBinaryStreamInstance;
    /**
     * Creates a new BinaryStream object.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/logs/HTTPServer.waLog' );
     * var readstream = new BinaryStream( myFile );
     * console.log( '[chunck] '+ readstream.getBuffer(1000).toString() );
     * // Important to close the stream after every use to release the referenced file
     * readstream.close();
     * ```
     * 
     * @param binary Describes the binary to read/write.
     * @param readMode (default: `read`) `Write` if in write mode, `Read` otherwise.
     */
    new (binary: WAKFileInstance, readMode?: String): WAKBinaryStreamInstance;
}

interface WAKBinaryStreamInstance {
    /**
     * Indicates that the next reading of structured values in the BinaryStream object requires a byte swap
     */
    changeByteOrder(): void;
    /**
     * Closes the file referenced in the BinaryStream object.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/logs/HTTPServer.waLog' );
     * var readstream = new BinaryStream( myFile );
     * // Important to close the stream after every use to release the referenced file
     * readstream.close();
     * ```
     * @throw may throw exception if an error occur
     */
    close(): void;
    /**
     * Saves the buffer contents to the disk file referenced in the BinaryStream object.
     *  @throw may throw exception if an error occur
     */
    flush(): void;
    /**
     * Creates a new BLOB object containing the next sizeToRead data in the BinaryStream object.
     * @throw may throw exception if an error occur
     */
    getBlob(sizeToRead: Number): WAKBlobInstance;
    /**
     * Returns a new Buffer object containing the next sizeToRead data in the BinaryStream object. Otherwise, return null
     * @throw may throw exception if an error occur
     */
    getBuffer(sizeToRead: Number): WAKBufferInstance;
    /**
     * Returns a number representing the next byte from the BinaryStream object. Otherwise, return null
     * @throw may throw exception if an error occur
     */
    getByte(): Number;
    /**
     * Returns the next long number (if present) from the BinaryStream object. Otherwise, return null
     * @throw may throw exception if an error occur
     */
    getLong(): Number;
    /**
     * Returns the next long64 number (if present) from the BinaryStream object. Otherwise, return null
     * @throw may throw exception if an error occur
     */
    getLong64(): Number;
    /**
     * Returns the current position of the cursor in the BinaryStream object. Otherwise, return null
     */
    getPos(): Number;
    /**
     * Returns the next real (if present) from the BinaryStream object. Otherwise, return null
     */
    getReal(): Number;
    /**
     * Returns the size of the stream.
     */
    getSize(): Number;
    /**
     * Returns the next string (if present) from the BinaryStream object. Otherwise, return null
     * @throw may throw exception if an error occur
     */
    getString(): String;
    /**
     * Returns the next word, i.e., a binary integer (if present) from the BinaryStream object. Otherwise, return null
     * @throw may throw exception if an error occur
     */
    getWord(): Number;
    /**
     * `true` if the current data reading in the BinaryStream object is in byte swap mode.
     */
    isByteSwapping(): Boolean;
    /**
     * Writes the BLOB you passed as the blob parameter in the BinaryStream object at the current cursor location.
      * @throw may throw exception if an error occur
     */
    putBlob(blob: WAKBlobInstance, offset: Number, size?: Number): void;
    /**
     * Writes the Buffer you passed as the buffer parameter in the BinaryStream object at the current cursor location.
     * @throw may throw exception if an error occur
     */
    putBuffer(buffer: WAKBufferInstance, offset: Number, size?: Number): void;
    /**
     * Writes the byte value you passed as the parameter in the BinaryStream object at the current cursor location.
      * @throw may throw exception if an error occur
     */
    putByte(byteValue: Number): void;
    /**
     * Writes the long value you passed as the parameter in the BinaryStream object at the current cursor location.
     * @throw may throw exception if an error occur
     */
    putLong(longValue: Number): void;
    /**
     * Writes the long64 value you passed as the parameter in the BinaryStream object at the current cursor location.
     * @throw may throw exception if an error occur
     */
    putLong64(long64Value: Number): void;
    /**
     * Writes the real value you passed as the parameter in the BinaryStream object at the current cursor location.
     * @throw may throw exception if an error occur
     */
    putReal(realValue: Number): void;
    /**
     * Writes the string value you passed as the parameter in the BinaryStream object at the current cursor location.
     * @throw may throw exception if an error occur
     */
    putString(url: String): void;
    /**
     * Writes the byte word (i.e., an integer value) you passed as the parameter in the BinaryStream object at the current cursor location.
     * @throw may throw exception if an error occur
     */
    putWord(wordValue: Number): void;
    /**
     * Moves the stream cursor to the position you passed in offset in the BinaryStream object.
     * @throw may throw exception if an error occur
     */
    setPos(offset: Number): void;
}
