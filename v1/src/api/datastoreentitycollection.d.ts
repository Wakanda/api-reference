/// <reference path="./datastoreentity.d.ts" />

interface EntityCollection {
	/**
	*Number of entities in the entity collection
	*/
	length: Number;
	/**
	*Description of the query as it was actually performed
	*/
	queryPath: String;
	/**
	*Description of the query just before it is executed
	*/
	queryPlan: String;
	/**
	*adds the entity or entity collection passed in the toAdd parameter to the entity collection
	*/
	add(toAdd: EntityCollection, atTheEnd?: String) : void;
	/**
	*adds the entity or entity collection passed in the toAdd parameter to the entity collection
	*/
	add(toAdd: EntityCollection, atTheEnd?: Boolean) : void;
	/**
	*adds the entity or entity collection passed in the toAdd parameter to the entity collection
	*/
	add(toAdd: Entity, atTheEnd?: String) : void;
	/**
	*adds the entity or entity collection passed in the toAdd parameter to the entity collection
	*/
	add(toAdd: Entity, atTheEnd?: Boolean) : void;
	/**
	*compares the entity collection to which it is applied and the collection2 and returns a new entity collection that contains only the entities that are referenced in both collections
	*/
	and(collection2: EntityCollection) : EntityCollection;
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
	*creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	*/
	distinctValues(attribute: DatastoreClassAttribute): any[];
	/**
	*creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	*/
	distinctValues(attribute: String): any[];
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
	*returns the datastore class (object of the DatastoreClass type) of the entity collection
	*/
	getDataClass() : DatastoreClass;
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
	*excludes from the entity collection to which it is applied the entities that are in the collection2 and returns the resulting entity collection
	*/
	minus(collection2: EntityCollection) : EntityCollection;
	/**
	*creates a new entity collection that contains all the entities from the entity collection to which it is applied and all the entities from the collection2 entity collection
	*/
	or(collection2: EntityCollection) : EntityCollection;
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
	toArray(attributeList: String, sortList: String, key: String, skip: Number, top?: Number): any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: String, sortList: String, key: Boolean, skip: Number, top?: Number): any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList: String, key: String, skip: Number, top?: Number): any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList: String, key: Boolean, skip: Number, top?: Number): any[];
	/**
	*returns a string representation of the entity or entity collection
	*/
	toString() : String;
}

interface DatastoreClassAttribute extends String {
	
}