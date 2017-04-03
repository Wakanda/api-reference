interface KeyValueStorage {
    /**
	*Number of key/value pairs currently present in the object
	*/
	length: Number;
	/**
	*removes all key/value pairs from the Storage object
	*/
	clear() : void;
	/**
	*returns a copy of the value stored with the given key in the Storage object
	*/
	getItem(key: String) : any;
	/**
	*returns the name of the key stored at the keyIndex position in the Storage object
	*/
	key(keyIndex: Number) : String;
	/**
	*locks the Storage object to which it is applied, so that only the thread that placed it can read or modify it
	*/
	lock() : void;
	/**
	*allows you to remove an item from the Storage object
	*/
	removeItem(key: String) : void;
	/**
	*allows you to create or update an item in the Storage object
	*/
	setItem(key: String, value: any) : void;
	/**
	*tries to lock the Storage object to which it is applied; it returns true in case of success and false otherwise
	*/
	tryLock() : Boolean;
	/**
	*removes a lock that was previously put on the Storage object
	*/
	unlock() : void;
}