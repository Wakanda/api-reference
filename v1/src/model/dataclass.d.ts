///<reference path="./attribute.d.ts" />

interface ModelDataClass {
	/**
	*Methods of the Datastore class applied to Collection objects
	*/
	collectionMethods: Object;
	/**
	*Methods of the Datastore class applied to Entity objects
	*/
	entityMethods: Object;
	/**
	*Object containing events for the datastore class
	*/
	events: Object;
	/**
	*Methods of the Datastore class applied to Class object
	*/
	methods: Object;
	/**
	*Object containing properties for the datastore class
	*/
	properties: Object;
	/**
	*adds a new attribute to the datastore class
	*/
	addAttribute(name: String, kind: String, type: String, indexOrPath?: String, options?: Object) : ModelDataClassAttribute;
	/**
	*adds a new attribute to the datastore class
	*/
	addAttribute(name: String, kind: any, type: String, indexOrPath?: String, options?: Object) : ModelDataClassAttribute;
	/**
	*associate an event listener function with the datastore class
	*/
	addEventListener(event: String, jsCode: Function) : void;
	/**
	*define a datastore class method and add it to the current class
	*/
	addMethod(name: String, type: String, jsCode: Function, scope?: String) : void;
	/**
	*
	*/
	addRelatedEntities(name: String, type: String, path?: String, option?: Object) : void;
	/**
	*adds a new relatedEntity attribute to the datastore class
	*/
	addRelatedEntity(name: String, type: String, path?: String, option?: Object) : void;
	/**
	*removes the name attribute from the datastore class for the model object
	*/
	removeAttribute(name: String) : void;
	/**
	*define one or several properties for the datastore class
	*/
	setProperties(properties: Object) : void;
	/**
	*associate a restricting query with the datastore class
	*/
	setRestrictingQuery(queryStatement: String) : void;
}

declare var DataClass : {
	new ( collectionName?:String, scope?:String, extendedClass?:String, properties?:Object) : ModelDataClass;
}