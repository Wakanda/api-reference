interface LockableKeyValueStorage extends KeyValueStorage {
    /**
     * Locks the storage object. Only the current thread can read or modify the storage object.
     */
    lock(): void;
    /**
     * Tries to lock the storage object. Returns `true` in case of success and false otherwise.
     */
    tryLock(): Boolean;
    /**
     * Removes a lock that was previously put on the storage object.
     */
    unlock(): void;
}

interface KeyValueStorage {
    /**
     * Gets the number of key/value pairs currently present in the storage object.
     */
    length: Number;
    /**
     * Removes all key/value pairs from the storage object.
     */
    clear(): void;
    /**
     * Gets a copy of the value from the storage object.
     */
    getItem(key: String): any;
    /**
     * Removes an item from the storage object.
     */
    removeItem(key: String): void;
    /**
     * Create or update an item in the storage object.
     */
    setItem(key: String, value: String | Number | Object): void;
}