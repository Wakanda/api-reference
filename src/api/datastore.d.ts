///<reference path="./datastoreclassenumerator.d.ts" />

interface Datastore {
	/**
	* Accepts the transaction opened by the `ds.startTransaction()` method at the corresponding level in the current context
	*/
	commit() : void;
	/**
	*Collection of available datastore classes
	*/
	dataClasses: DatastoreClassEnumerator;
	/**
	*exports all the entities stored in the object for which it is called in JSON format
	*/
	exportAsJSON(exportFolder: WAKFolderInstance, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*exports all the entities stored the object for which it is called in SQL format
	*/
	exportAsSQL(exportFolder: WAKFolderInstance, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*flushes the data cache to disk
	*/
	flushCache() : void;
	/**
	*returns the size of memory used by the datastore cache (in bytes)
	*/
	getCacheSize() : Number;
	/**
	*returns a reference, Folder, to the folder containing the datastore data file
	*/
	getDataFolder() : WAKFolderInstance;
	/**
	*allows you to get detailed information about Wakanda database engine events
	*/
	getMeasures(options?: Object) : Object;
	/**
	*returns a reference, Folder, to the folder containing the datastore model file
	*/
	getModelFolder() : WAKFolderInstance;
	/**
	*returns the name of the current datastore
	*/
	getName() : String;
	/**
	*returns a Folder type reference to the datastore "temporary files" folder
	*/
	getTempFolder() : WAKFolderInstance;
	/**
	*imports all the entities stored in JSON format from the file(s) located in the importFolder folder
	*/
	importFromJSON(importFolder: WAKFolderInstance) : void;
	/**
	* Pause a transaction opened by the `ds.startTransaction()` method in the current context
	*/
	pauseTransaction() : void;
	/**
	* Resume a transaction paused by the `ds.pauseTransaction()` method in the current context
	*/
	resumeTransaction() : void;
	/**
	*looks for any "ghost" tables in the data file of your application and adds the corresponding datastore classes to the loaded model
	*/
	revealGhostTables() : void;
	/**
	* Cancels the transaction opened by the `ds.startTransaction()` method at the corresponding level in the current context
	*/
	rollBack() : void;
	/**
	*increase dynamically the datastore cache size
	*/
	setCacheSize(newSize: Number) : void;
	/**
	* Starts a transaction in the current context
	*
	* #### Example
	*```javascript
	* model.Invoice.events.remove = function(){
    * 	if (this.invoiceItems.length != 0){
    * 		ds.startTransaction();			//start a transaction
    * 		this.invoiceItems.remove();		//attempt to delete the invoiceItems
    * 		// if all went well, the commit will be done automatically
    * 		// if there is an error, the transaction will rollback
    * 	}
	* }
	*```
	*/
	startTransaction() : void;
	/**
	* Returns the level of the current transaction for the context
	* @return Number Level of the current transaction (0 if no transaction was started)
	*/
	transactionLevel() : Number;
}