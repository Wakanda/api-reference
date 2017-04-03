/// <reference path="./blob.d.ts" />
/// <reference path="./image.d.ts" />

interface HTTPResponse {
    /**
     * Body of the returned message to set.
     */
    body: WAKBlobInstance | Image | String;
    /**
     * Content-type of the response to set.
     */
    contentType: String;
    /**
     * Header of the HTTPResponse.
     */
    headers: String[];
    /**
     * Return status code to set.
     */
    statusCode: Number;
    /**
     * Indicates if the contents of the HTTPResponse should be cached on the server.
     */
    allowCache(useCache: Boolean): void;
    /**
     * Sets custom compression thresholds for the HTTPResponse.
     * @param minThreshold Minimum size (in bytes) below which the response should not be compressed or -1 to use default value
     * @param maxThreshold Maximum size (in bytes) up to which the response should not be compressed or -1 to use default value
     */
    allowCompression(minThreshold: Number, maxThreshold: Number): void;
    /**
     * Sends an HTTPResponse in chunks without knowing in advance the size of the data.
     */
    sendChunkedData(data: String | Image | WAKBlobInstance): void;
}