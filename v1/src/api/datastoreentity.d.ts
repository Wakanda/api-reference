/// <reference path="./datastoreclass.d.ts" />


interface Entity {
/**
	*returns the datastore class (object of the DatastoreClass type) of the entity
	*/
	getDataClass() : DatastoreClass;
	/**
	*returns the timestamp of the last save of the entity to which it is applied
	*/
	getTimeStamp() : Date;
	/**
	*returns True or False depending on whether the entity iterator points to an entity that is currently loaded in memory
	*/
	isLoaded() : Boolean;
	/**
	*returns True or False depending on whether the entity to which it is applied has been modified since the last time it was loaded from the datastore
	*/
	isModified() : Boolean;
	/**
	*returns True or False depending on whether the entity to which it is applied has just been created in the datastore
	*/
	isNew() : Boolean;
	/**
	*puts the entity pointer on the next entity within an iteration of entities
	*/
	next() : Entity;
	/**
	*reloads the entity as it is stored in the datastore
	*/
	refresh() : void;
	/**
	*releases the entity from memory
	*/
	release() : void;
	/**
	*removes the entity from the datastore
	*/
	remove() : void;
	/**
	*saves the changes made to the entity in the datastore
	*/
	save() : void;
	/**
	*returns a string representation of the entity or entity collection
	*/
	toString() : String;
}
