/// <reference path="./folder.d.ts" />
/// <reference path="./datastoreentitycollection.d.ts" />
/// <reference path="./datastoreentity.d.ts" />

interface DatastoreClass {
/**
	*Collection of available attributes
	*/
	attributes: AttributeEnumerator;
	/**
	*Number of entities in the datastore class
	*/
	length: Number;
	/**
	*returns an object of type EntityCollection containing all the entities in the datastore class to which it was applied
	*/
	all() : EntityCollection;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: String, distinct?: String) : Number;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, distinct?: Boolean) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, distinct?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, distinct?: Boolean) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, distinct?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, groupBy?: DatastoreClassAttribute) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, groupBy?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, groupBy?: DatastoreClassAttribute) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, groupBy?: String) : Object;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: String, distinct?: String) : Number;
	/**
	*creates a new blank object of type Entity based on the datastore class to which it is applied
	*/
	createEntity() : Entity;
	/**
	*creates a new blank object of type EntityCollection attached to the datastore class to which it is applied
	*/
	createEntityCollection(keepSorted?: String) : EntityCollection;
	/**
	*creates a new blank object of type EntityCollection attached to the datastore class to which it is applied
	*/
	createEntityCollection(keepSorted?: Boolean) : EntityCollection;
	/**
	*creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	*/
	distinctValues(attribute: DatastoreClassAttribute) : any[];
	/**
	*creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	*/
	distinctValues(attribute: String) : any[];
	/**
	*exports all the entities stored in the object for which it is called in JSON format
	*/
	exportAsJSON(exportFolder: Folder, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*exports all the entities stored the object for which it is called in SQL format
	*/
	exportAsSQL(exportFolder: Folder, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*applies the search criteria specified in queryString and (optionally) value to all the entities of the DatastoreClass or EntityCollection and returns the first entity found in an object of type Entity
	*/
	find(queryString: String, ...valueList: any[]) : Entity;
	/**
	*returns the entity in the first position of the entity collection or datastore class
	*/
	first() : Entity;
	/**
	*executes the callbackFn function on each entity in the entity collection in ascending order
	*/
	forEach(callbackFn: Function) : void;
	/**
	*generates entities in the datastore class where it is applied and returns the resulting entity collection
	*/
	fromArray(arrayValues: any[]) : EntityCollection;
	/**
	*returns the percentage of logical fragmentation for the entities of the datastore class
	*/
	getFragmentation() : Number;
	/**
	*returns the name of the datastore class to which it is applied in a string
	*/
	getName() : String;
	/**
	*returns the current scope property value of the datastore class
	*/
	getScope() : String;
	/**
	*imports all the entities stored in JSON format from the file(s) located in the importFolder folder
	*/
	importFromJSON(importFolder: Folder) : void;
	/**
	*returns the maximum value among all the values of attribute in the entity collection or datastore class
	*/
	max(attribute: DatastoreClassAttribute) : Number;
	/**
	*returns the maximum value among all the values of attribute in the entity collection or datastore class
	*/
	max(attribute: String) : Number;
	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	*/
	min(attribute: DatastoreClassAttribute) : Number;
	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	*/
	min(attribute: String) : Number;
	/**
	*sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	*/
	orderBy(attributeList: String, sortOrder?: String) : EntityCollection;
	/**
	*sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	*/
	orderBy(attributeList: DatastoreClassAttribute, sortOrder?: String) : EntityCollection;
	/**
	*searches all the entities in the datastore class or entity collection using the search criteria specified in queryString and returns a new collection containing the entities found
	*/
	query(queryString: String, ...valueList: any[]) : EntityCollection;
	/**
	*permanently removes entities from the datastore
	*/
	remove() : void;
	/**
	*(re)sets the start value for the autosequence number of the datastore class
	*/
	setAutoSequenceNumber(counter: Number) : void;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: String, distinct?: String) : Number;
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: String, sortList: String, key: String, skip: Number, top?: Number) : any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: String, sortList: String, key: Boolean, skip: Number, top?: Number) : any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList: String, key: String, skip: Number, top?: Number) : any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList: String, key: Boolean, skip: Number, top?: Number) : any[];
	/**
	*returns the name of the datastore class as a string
	*/
	toString() : String;
}

interface AttributeEnumerator{
	
}

interface AttributeEnumerator {
    [attributeName: string]: DatastoreClassAttribute;
}