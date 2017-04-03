/// <reference path="./blob.d.ts" />

interface Buffer {
    /**
     * Creates a new buffer.
     * 
     * ```javascript
     * var myBufferInstance = new Buffer( 16*1024 );
     * var myBufferInstance = new Buffer( 16*1024, 'utf8' );
     * ```
     * 
     * @param size The number of bytes to allocate for the buffer
     * @param encoding (default: `utf8`) Encoding available: `ascii`, `utf8`, `ucs2`, `hex`, `base64`
     */
    new (size: Number, encoding?: String): WAKBufferInstance;
    /**
     * Returns the string byte length.
     * Byte length may change depending of the encoding type.
     * 
     * ```javascript
     * var myByteLength = Buffer.byteLength( 'Hello Buffer World !' );
     * console.log(myByteLength);
     * // 20
     * ```
     * 
     * @param str String to evaluate
     * @param encoding (default: `utf8`) Encoding available: `ascii`, `utf8`, `ucs2`, `hex`, `base64`
     */
    byteLength(str: String, encoding?: String): Number;
    /**
     * Checks if the object is a buffer.
     * 
     * #### Example 1: Is my string a buffer ?
     * ```javascript
     * var isBuffer = Buffer.isBuffer( 'Hello Buffer World !' );
     * console.log( isBuffer );
     * // false
     * ```
     * 
     * #### Example 2: Is my blob a buffer ?
     * ```javascript
     * var myBlob = new Blob();
     * var isBuffer = Buffer.isBuffer( myBlob );
     * console.log( isBuffer );
     * // false
     * ```
     * 
     * #### Example 3: Is my buffer a buffer ?
     * ```javascript
     * var myBuffer = new Buffer( '20' );
     * var isBuffer = Buffer.isBuffer( myBuffer );
     * console.log( isBuffer );
     * // true
     * ```
     * 
     * @param obj Object to evaluate
     * @returns Returns `true` is the object is a buffer, `false` otherwise
     */
    isBuffer(obj: any): Boolean;
}

interface WAKBufferInstance {
    /**
     * Number of bytes of the buffer.
     */
    readonly length: Number;
    /**
     * Copies the current buffer into the target buffer.
     * 
     * ```javascript
     * b1 = new Buffer(26);
     * b2 = new Buffer(26);
     * for (var i = 0 ; i < 26 ; i++) {
     *   b1[i] = i + 65; // 65 is "A" character in UTF8
     *   b2[i] = 42; // 42 is "*"
     * }
     * b1.copy(b2, 6, 8, 22);
     * b2.toString('utf8', 0, 26);
     * ```
     * 
     * @param targetBuffer Defines the buffer where to copy the data
     * @param targetOffset (default: 0) Byte offset where to start writing the data
     * @param sourceOffset (default: 0) Byte offset where to start reading the data
     * @param sourceEnd (default: buffer.length) Byte offset where to end reading the data
     */
    copy(targetBuffer: WAKBufferInstance, targetOffset?: Number, sourceOffset?: Number, sourceEnd?: Number): void;
    /**
     * Fills the Buffer to which it is applied with the character you passed in value.
     */
    fill(value: String, offset?: Number, length?: Number): void;
    /**
     * Creates a new Buffer object by referencing the contents of the bytes array of the Buffer to which it is applied, from start to end.
     */
    slice(start: Number, end?: Number): WAKBufferInstance;
    /**
     * Returns a Blob object containing a copy of the Buffer bytes.
     */
    toBlob(mimeType?: String): WAKBlobInstance;
    /**
     * Converts the buffer contents into a string.
     */
    toString(encoding: String, start?: Number, end?: Number): String;
    /**
     * Writes the string parameter to the Buffer at the offset position and returns the number of bytes written.
     */
    write(string: String, offset?: Number, encoding?: String): Number;
    /**
     * Returns a 64 bit double value read from the Buffer with the Big Endian format.
     */
    readDoubleBE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a 64 bit double value read from the Buffer with the Little Endian format.
     */
    readDoubleLE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a 32-bit float value read from the Buffer with the Big Endian format.
     */
    readFloatBE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a 32-bit float value read from the Buffer with the Little Endian format.
     */
    readFloatLE(offset: Number, noAssert: Boolean): Number;
    /**
     * Returns an unsigned 16-bit integer value read from the Buffer with the Big Endian format.
     */
    readInt16BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 16-bit integer value read from the Buffer with the Little Endian format.
     */
    readInt16LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 24-bit integer value read from the Buffer with the Big Endian format.
     */
    readInt24BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 24-bit integer value read from the Buffer with the Little Endian format.
     */
    readInt24LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 32-bit integer value read from the Buffer with the Big Endian format.
     */
    readInt32BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 32-bit integer value read from the Buffer with the Little Endian format.
     */
    readInt32LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 8-bit integer value read from the Buffer to which it is applied.
     */
    readInt8(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 16-bit integer value read from the Buffer with the Big Endian format.
     */
    readUInt16BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 16-bit integer value read from the Buffer with the Little Endian format.
     */
    readUInt16LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 24-bit integer value read from the Buffer with the Big Endian format.
     */
    readUInt24BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 24-bit integer value read from the Buffer with the Little Endian format.
     */
    readUInt24LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 32-bit integer value read from the Buffer with the Big Endian format.
     */
    readUInt32BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 32-bit integer value read from the Buffer with the Little Endian format.
     */
    readUInt32LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 8-bit integer value read from the Buffer to which it is applied.
     */
    readUInt8(offset: Number, noAssert?: Boolean): Number;
    /**
     * Writes the 64-bit double value to the Buffer with the Big Endian format.
     */
    writeDoubleBE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 64-bit double value to the Buffer with the Little Endian format.
     */
    writeDoubleLE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit float value to the Buffer with the Big Endian format.
     */
    writeFloatBE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit float value to the Buffer with the Little Endian format.
     */
    writeFloatLE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 16-bit signed integer value to the Buffer with the Big Endian format.
     */
    writeInt16BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 16-bit signed integer value to the Buffer with the Little Endian format.
     */
    writeInt16LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 24-bit signed integer value to the Buffer with the Big Endian format.
     */
    writeInt24BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 24-bit signed integer value to the Buffer with the Little Endian format.
     */
    writeInt24LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit signed integer value to the Buffer with the Big Endian format.
     */
    writeInt32BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit signed integer value to the Buffer with the Little Endian format.
     */
    writeInt32LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 8-bit signed integer value to the Buffer to which it is applied.
     */
    writeInt8(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 16-bit unsigned integer value to the Buffer with the Big Endian format.
     */
    writeUInt16BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 16-bit unsigned integer value to the Buffer with the Little Endian format.
     */
    writeUInt16LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 24-bit unsigned integer value to the Buffer with the Big Endian format.
     */
    writeUInt24BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 24-bit unsigned integer value to the Buffer with the Little Endian format.
     */
    writeUInt24LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit unsigned integer value to the Buffer with the Big Endian format.
     */
    writeUInt32BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit unsigned integer value to the Buffer with the Little Endian format.
     */
    writeUInt32LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 8-bit unsigned integer value to the Buffer to which it is applied.
     */
    writeUInt8(value: Number, offset: Number, noAssert?: Boolean): void;
}