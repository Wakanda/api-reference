/// <reference path="./folder.d.ts" />
/// <reference path="./datastoreentitycollection.d.ts" />
/// <reference path="./datastoreentity.d.ts" />

interface DatastoreClass {
/**
	*Collection of available attributes
	*
	* @returns Object containing all the attributes of the DatastoreClass
	* 
	* ```ds.MyDataclass.attributes```
	*/
	attributes: AttributeEnumerator;
	
	
	/**
	*Number of entities in the datastore class
	*  
	* ```javascript
	* ds.MyDataclass.length
	* ```
	*/
	length: Number;
	
	
	/**
	*returns an object of type EntityCollection containing all the entities in the datastore class
	*
	* ```javascript
	* ds.MyDataclass.all()
	* ```
	*/
	all() : EntityCollection;
	
	
	
	
	
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	* ### For a detailled description of the method, [go here](entitycollection.html#average) 
	*/
	average(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	
	
	
	
	/**
	* Compute performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	* @param attribute DatastoreClassAttribute,String Attribute(s) for which you want to perform statistical calculations
	* @param distinct Boolean Compute distinct calculations - `false` by default
	* @returns Object containing the following calculations :
	* 	- average	Arithmetic average
	*	- averageDistinct	Average taking only distinct values into account
	*	- count	Number of values
	*	- countDistinct	Number of distinct values
	*	- max	Maximum value
	*	- min	Minimum value
	*	- sum	Sum
	*	- sumDistinct	Sum taking only distinct values into account
	*
	* @warning If you pass more than one attribute and enable the Distinct calculations, they will be valid only for the first attribute.
	* #### Example 1 - Compute Multi Attributes with Distinct
	*  ```javascript
	*  var calculations = ds.Employee.compute("age, salary", true); //the Distinct operations will be performed only on the `age` attribute
	*  var stats = "Average age ="+ calculations.age.averageDistinct+" Total salary ="+calculations.salary.sum);
	* ```
	*/
	compute(attribute: DatastoreClassAttribute, distinct?: Boolean) : Object;
	/** 
	* Compute performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	* @param attribute DatastoreClassAttribute,String Attribute(s) for which you want to perform statistical calculations
	* @param groupBy DatastoreClassAttribute,String Attribute(s) on which you want to have subtotal breaks	
	* @returns Object containing all the calculations performed and subtotals
	* #### Example 1 - Compute with groupBy 
	* ```javascript
	*  var stats = ds.Sales.all().compute("benefit, revenues", "country, month");
    * // compute `benefit`and `revenues` values of a Sales class grouped by country and month
	* // for more convenience the returned object can be converted into an array 
	* stats.toArray();
	* ```
	*/
	compute(attribute: DatastoreClassAttribute, groupBy?: DatastoreClassAttribute) : Object;
	
	
	
	
	
	
/**
	* The Count() method returns the number of entities contained in the entity collection or datastore class
	* @param attribute DatastoreClassAttribute,String Attribute whose value must not be null
	* @param distinct Boolean  Default `false` Use only entities that have different values
	* @returns Number of entities in the collection or Dataclass
	* @warning `distinct` parameter is ignored if you do not pass the `attribute` parameter
	* #### Example 1
	* ```javascript
	* ds.DataClass1.query('name > 1*').count('name2', true)
	* ```
	* #### Example 2 - Count on object attribute
	* ```javascript
	* var vCount = ds.MyClass.all().count("objectAtt.prop") // `objectAtt` is an object attribute with a `prop` property
	* ```
	*/
	count(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	
	
	
	
	
	/**
	*creates a new blank object of type Entity based on the datastore class.
	* 
	* @warning
	* The object is created in memory and is not saved in the datastore until the save( ) method is called. 
	* If the object is deleted before being saved, it cannot be recovered.
	* 
	* #### Example (create then save)
	* ```javascript
	* var newCompany = ds.Company.createEntity() ;
	* a.name = 'Wakanda';
	* a.city = 'Paris' ; 
	* a.save() ;
	* ```
	*  
	* ### Note
	* Another useful alternative way to create entities (then save) is to use the `new` syntax
	* ```javascript
	* new ds.Company({
		name : 'Wakanda' ,
		city : 'Paris'
	}).save();
	* 
	*/
	createEntity() : Entity;
	
	
	
	
	
	
	
	/**
	* creates a new blank object of type EntityCollection attached to the datastore class 
	*
	* @param keepSorted Boulean - `True` to create a SortedCollection (`false` by Default)
	*
	*
	* #### Note
	* For more information about sorted/unsorted collection, [visit this page](http://doc.wakanda.org/Datastore/Entity-Collection/Unsorted-vs-Sorted-Entity-Collections.300-932765.en.html)
	*
	* @warning = **createEntityCollection** do work only with Wakanda built-in DB. It does not work with MySQL / ODBC Connectors*
	* 
	* #### Example 1
	* ```javascript
	* var all = ds.Person.all(); // get all the entities
	* var coll1 = ds.Person.createEntityCollection(); // create an empty unsorted entity collection
	* coll1.add( all[10]); //add some entities, one of them 3 times
	* coll1.add( all[9]);
	* coll1.add( all[8]);
	* coll1.add( all[7]);
	* coll1.add( all[8]);
	* coll1.add( all[8]);
	* coll1; // displays the collection
	* ```
	*/
	createEntityCollection(keepSorted?: Boolean) : EntityCollection;
	
	
	
	
	
	
	/**
	* The distinctValues( ) method creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	* @param attribute DatastoreClassAttribute 		Attribute for which you want to get the list of distinct values
	* @returns  Array containing the list of distinct values
	* #### Example 1
	* ```javascript
	* //In our example, we want to return the total number of different jobs in the same company:
    *
	* var employer = ds.Company.find( "name == :1", "WAKANDA" ) ;  // find the company by its name
	* var allEmp = ds.Employee.query("comp == :1", employer); // create an entity collection containing all the employees in a company
	* // 'comp' is a relation attribute in Employee
	*  var jobNb = allEmp.distinctValues("jobName").length; //`jobName` is a DatastoreClassAttribute of Employee
    * ``` 
	* #### Example 2 - distinctValues with Object Attributes.
	* ```javascript
	* // In a "keywords" object attribute of an Article datastore class, you store the page numbers for each keyword in a "pages" array. 
	* // You want to know all pages that contain at least one keyword
	*  var arr = ds.Article.all().distinctValues("keywords.pages[]");
	* ``` 
	*/
	distinctValues(attribute: DatastoreClassAttribute): any[];
	
	
	

    /**
	*exports all the entities stored in the object for which it is called in JSON format
	* It can be called for a :
	* 	- datastore 
	*	- DatastoreClass 
	*	- EntityCollection
	* @warning : 
	* - calculated attributes are not exported -- only their underlying attributes are exported,
	* - extended datastore classes are not exported,
	* - related or alias attributes are not exported directly -- only primary keys values are exported,
	* - data from outside catalogs or datastores are not exported	
	* #### Example :
	* ```javascript
	* myFolder = new Folder("C:/ExportCollectionJSON/");     // get a reference to the export folder
	* if (myFolder.exists)     // if the folder actually exists
	* {
    *	var coll=ds.Employee.query("lastName = :1", "P*");   
    *	coll.exportAsJSON( myFolder ) ;     // export the collection
	*	}
	* ```
	*For more details, go here : http://doc.wakanda.org/home2.en.html%23/Datastore/Entity-Collection/length.303-638616.en.html#/Datastore/Entity-Collection/exportAsJSON.301-1041820.en.html
	*
	* @param exportFolder Folder Folder where you want to export the collection.
	* @param numFiles Number Maximum number of files per Folder
	* @param fileLimitSize	Number Size limit vamue of export files (in KB)
	* @param attLimitSize Number Size limit (in bytes) velow which the contents of a BLOB or Picture attribute are embedded into the main file
	*  
	*/
	exportAsJSON(exportFolder: WAKFolderInstance, numFiles?: Number, fileLimitSize?: Number, attLimitSize?: Number) : void;
	
	
	
	
	
/**
	*exports all the entities stored the object for which it is called in SQL format
	* It can be called for a :
	* 	- datastore 
	*	- DatastoreClass 
	*	- EntityCollection
	* @warning : 
	* - calculated attributes are not exported -- only their underlying attributes are exported,
	* - extended datastore classes are not exported,
	* - related or alias attributes are not exported directly -- only primary keys values are exported,
	* - data from outside catalogs or datastores are not exported	
	* #### Example 
	* ```javascript
	* 	myFolder = new Folder("C:/ExportCollection/");     // get a reference to the export folder
	*	if (myFolder.exists)     // if the folder actually exists
	*	{
    *	var coll=ds.Employee.query("lastName = :1", "P*");   
    *	coll.exportAsSQL( myFolder ) ;     // export the collection
	* ```
	* For more details go here : http://doc.wakanda.org/home2.en.html%23/Datastore/Entity-Collection/length.303-638616.en.html#/Datastore/Entity-Collection/exportAsSQL.301-1041494.en.html
	*
	* @param exportFolder Folder Folder where you want to export the collection.
	* @param numFiles Number Maximum number of files per Folder
	* @param fileLimitSize	Number Size limit vamue of export files (in KB)
	* @param attLimitSize Number Size limit (in bytes) velow which the contents of a BLOB or Picture attribute are embedded into the main file
	*/
	exportAsSQL(exportFolder: WAKFolderInstance, numFiles?: Number, fileLimitSize?: Number, attLimitSize?: Number) : void;
	
	
	
	
	
	
	
	
	
/**
	* Search operation in a the DatastoreClass or EntityCollection that returns `the first entity` found in an object of type `Entity`
	* ## Important :
	* ``
	* The find( ) method is equivalent to executing a query( ) followed by retrieving the first entity:
	* For more details and exemples check the Query method section
	* ``
	* #### Example1 : With QueryString syntax
	* ```javascript
	* ds.Employee.find( "name == DOE");
	* ```
	* #### Example2 :  With placeholders syntax
	* ```javascript
	* ds.Employee.find( 'name ==:1', "DOE");
	* ```
	* @param queryString 
	* @param valueList  Value(s) to compare when using placeholders
	* @param options 
	* @returns The first found entity in the collection
	* 
	*  
	*/
	find(queryString: String, valueList: any[], options : Object) : Entity;
	
	
	
	
	/**
	* Returns the entity in the first position of the entity collection or datastore class
	* #### Example
	* ```javascript
	* ds.Employee.query('ID > 2').first()  //exemple1
	* ds.Company.first()  //exemple2
	* ```
	*/
	first() : Entity;
	
	



/**
	* Executes the callbackFn function on each entity in the entity collection(or Dataclass) in ascending order
	* @param callbackFn Function Handler function to invoke for each entity in the collection
	* ``
	* The callbackFn function accepts two parameters: function (`thisArg`, `iterator`)
	* -  The first parameter, `thisArg`, represents the entity currently being processed. When it is executed, the function receives in this parameter the entity on which it iterates (the parameter is used like the keyword `this`). You can then perform any type of operation on the values of the entity.
	* - The second (optional) parameter, `iterator`, is the iterator. When it is executed, the function receives in this parameter the position of the element currently being processed in the entity collection. You can use it, for example, to display a counter.
	* ``
	* @warning The forEach( ) method includes an optimized mechanism that triggers the entity to be saved automatically if it has been modified, and not saved when it hasn't.
	* You can however call the save( ) method anyway to manage any errors in a try/catch structure.  (In this case the call is detected by Wakanda and the entity is not saved a second time)
	* #### Example 
	* ```javascript
	*  // We want to give a 5% raise to all employees with a salary less than 5,000.
	* mySet = ds.Employee.query('salary < 5000') ;
	* mySet.forEach(
    * function( emp ) {
	* emp.salary *= 1.05;
	* // unnecessary to save modification forEach does it automatically when needed
    * });
	* ```
	*/
	forEach(callbackFn: Function) : void;
	
	
	
	
	
	
	/**
	*generates entities in the datastore class where it is applied and returns the resulting entity collection
	* @param Array whose values are used to generate entities
	* @returns New entity collection
	* 
	* @warning :
	* - The entities passed in the `arrayValues` are **generated and saved** when executing fromArray()
	* - Wakanda automatically adds the **ID number** to the entity created 
	* - You can modify an existing entity by adding the __KEY  and STAMP attributes and their respective values in arrayValues 
	*
	* #### Example
	* ```javascript
	* var arrAdd = []     // Create an empty array
	* arrAdd[0] = {lastName: "Potter", firstName: "Harold", salary: 3200};
	* arrAdd[1] = {lastName: "Luke", firstName: "Lucy", salary: 5300, married: true}; // 'married' is ignored if the attribute does not exist in the datastore class
	* arrAdd[2] = {lastName: "Blue", firstName: "George", salary: 3200};
	* var newColl = ds.Employees.fromArray(arrAdd);     // entities are created and saved
	* newColl; 
	* ```
	*/
	fromArray(arrayValues: any[]) : EntityCollection;
	
	
	
	
	
	
	
	
	/**
	*returns the percentage of logical fragmentation for the entities of the datastore class
	* 
	* Tip : Beyond a rate of 20% (0.2), it may be useful to [compact the datastore data] (http://doc.wakanda.org/Datastore/Datastore-Maintenance-Methods/compactDataStore.301-595628.en.html)  
	*
	* #### Note :
	* Works only with Wakanda Built-in DB. (i.e. do not concern MySQL / ODBC / Custom catalog)
	* 
	*/
	getFragmentation() : Number;
	
	
	
	
	/**
	*returns the name of the datastore class to which it is applied in a string
	* ```javascript
	* var nameEM = ds.Book.getName();
	* ```
	*/
	getName() : String;
	
	
	
	
	/**
	*returns the current scope property value of the datastore class
	* Two values can be returned for a datastore class: (default value `public`)
	*	- "public": a public datastore class can be accessed from anywhere (including on the client side)
	*   - "public on server": a public on server datastore class can only be accessed on the server
	* 
	* You can get more information about the [Datastore Class Properties here](http://doc.wakanda.org/Datastore-Model-Designer/Datastore-Classes.300-305138.en.html#664408)
	*/
	getScope() : String;
	
	
	
	
	
	/**
	*imports all the entities stored in JSON format from the file(s) located in the importFolder folder
	* 
	* The importFromJSON( ) method can be called for a:
	*	- Datastore: entities from all the datastore classes are imported,
	*	- DatastoreClass: entities from the datastore class are imported.
	*
	* #### Note
	* This method only work with the Wakanda Built-in database (MYSQL and other Connectors are not concerned)
	*
	*
	* @warning :
	* ````text
	*	- This folder must contain UTF-8 text files into which each entity is described through a single JSON object
	*	- calculated attributes cannot be imported directly -- only their underlying attributes are imported,
	*	- extended datastore class entities cannot be imported,
	*	- related or alias attributes are not imported directly -- only primary keys values are exported,
	*	- you cannot import data from outside catalogs or datastores. 
	*
	*  You can refer to the [exportAsJson method description] (entitycollection.html#exportasjson) for more information about exporting/importing
	* ```
	*/
	importFromJSON(importFolder: WAKFolderInstance) : void;
	
	
	
	/**
	* Returns the maximum value among all the values of attribute in the entity collection or datastore class
	* @param attribute DatastoreClassAttribute Attribute for which you want to get the highest value.
	* @returns Number Highest value of attribute
	* #### Example 1  
	* ```javascript
	* //We want to find the highest salary among all the female employees:
	* var fColl = ds.Employee.query("gender == :1","female");
	* var maxFSalary = fColl.max("salary");
	* ```
	* #### Example 2 - Max with object attributes
	* 
	* ```javascript
	* var value = ds.MyClass.all().max("objectAtt.prop") //Highest of all prop attribute values
	* ```
	*/
	max(attribute: DatastoreClassAttribute) : Number;

	
	
	
	
	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	* @param attribute DatastoreClassAttribute Attribute for which you want to get the lowest value.
	* @returns Number Lowest value of attribute
	* #### Example 1  
	* ```javascript
	* //We want to find the lowest salary among all the female employees:
	* var fColl = ds.Employee.query("gender == :1","female");
	* var maxFSalary = fColl.min("salary");
	* ```
	* #### Example 2 - Min with object attributes
	* 
	* ```javascript
	* var value = ds.MyClass.all().min("objectAtt.prop") //Lowest of all prop attribute values
	* ```
	*/
	min(attribute: DatastoreClassAttribute) : Number;
	
	
	
	
	/**
	* The orderBy method sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	* @param attributeList DatastoreClassAttribute Attribute(s) to be sorted and (if String) order by direction(s)
	* @param sortOrder string `asc` (by `default`) for ascending sort / `desc` for descending.
	* @info You can pass from 1 to x attributes separated by commas
	* #### Example1 orderBy with Mutliple Attributes
	* ```javascript
	*  // This example performs a simple search and returns an entity collection that has been sorted on two attributes, the first in descending order
	*  var mySet = ds.People.query("salary > 10000");
    *  var mySet2 = mySet.orderBy("salary desc,city");
	* ```
	* #### Example2 orberBy with a relation attribute 
	* ```javascript
	* // This example sorts employees with a salary greater than 10,000 by the city where their company is located, using a relation attribute
	* var mySet = ds.People.query("salary > 10000");
	* mySet = mySet.orderBy(ds.People.employer.city); // `employer` is a relation attribute
	* ```
	* #### Example3 orberBy with object attributes
	* ```javascript
	* ds.MyClass.all().orderBy("objectAtt.prop desc")
	* ```
	*/
	orderBy(attributeList: DatastoreClassAttribute, sortOrder?: String) : EntityCollection;
	
	
	
	
	
	
	/**
	*searches all the entities in the datastore class or entity collection using the search criteria specified in queryString and returns a new collection containing the entities found
	*  #### Descrption
	* The Query method description is fully described [here (entity collection part)] (entitycollection.html#query)
	*/
	query(queryString: String, ...valueList: any[]) : EntityCollection;
	
	
	
	
	
	
	
	/**
	* Permanently removes entities from the datastore
	* - When you apply it to an entity collection, it removes the entities belonging to that entity collection,
    * - When you apply it to a datastore class, it removes all the entities in the datastore class.
	*
	* #### Examples
	* ```javascript
	* // Applied to a Dataclass 
	* ds.Dataclass1.remove();
	* ```
	* ```javascript
	* // Applied to a collection
	*  ds.Dataclass1.query('ID > 3 & ID < 5').remove();
	* ```
	* ```javascript
	* // Applied to an entity
	* ds.Dataclass1.first().remove();
	* ```
	* ```javascript
	* // Applied at the Model level (Entity method on the Customer dataclass)
	* model.Customer.entityMethods.remove = function() {
    * this.remove();
	* };
	* ```
	* 
	*/
	remove() : void;
	
	
	
	
	
	
	
	/**
	*(re)sets the start value for the autosequence number of the datastore class
	* @param counter New start value for entity counter
	* This method (re)sets the start value for the autosequence number of the datastore class. 
	* 
	* note : the ID is based on this internal counter. An autosequence number can be set for any attribute on [Model Designer] (http://doc.wakanda.org/Datastore-Model-Designer/Datastore-Model-Designer.100-1051416.en.html)
	*/
	setAutoSequenceNumber(counter: Number) : void;
	
	
	
	
	
	
	
/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	* @param DatastoreClassAttribute Attr
	ibute whose sum you want to calculate
	* @param distinct  `false` by Default Use only entities that have different values
	* #### Example 1
	* ```javascript
	*  var highSalaries = ds.Employees.query("salary > 30000").sum("salary" , true);
	* ```
	* #### Example2 With Object attributes
	* ```javascript
	* var propSum = ds.MyClass.all().sum("objectAtt.prop") //sum of all prop attribute values
	* ```
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	
	
	
	
	
	
	/**
	* The toArray() method creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	* @param attributeList DatastoreClassAttribute List of attributes to return as array or "" to return all attributes
	* @param sortList string list of attributes used for the sort
	* @param key boolean Include the entity key and stamp `false` by default
	* @param skip number Position of starting entity to return
	* @param top number Number of entities to return
	* @returns Array containing attributes and values of datastore class or entity collection
	* 
	* #### Note
	* You can of course navigate through dataclasses via relation attributes.
	* In this scenario you can even limit the number of related entities fetched by passing `RelatedAttribure: N` (where N represents the number of sub elements)
	* #### EXAMPLES 
	*  <details> <summary> Click to Expand </summary>
	*  ### Simple case
	* ```javascript
	* var myArray = ds.Employee.toArray("firstName,lastName,salary");
	* // myArray[0] contains {firstName: 'John', lastName: 'Smith', salary: 5000} 
	* ```
	*  ### To get all the attributes from a collection
	* ```javascript
	*  var myColl = ds.Employee.query("salary >= 6000 order by salary asc");
	*  var myArray = myColl.toArray("");     // return all attributes
	* ```
	* ### Example with relations and options (key, skip , top)
	* ```javascript
	*  var myArray = ds.Employee.toArray("name, employer.name, employer.location", true, 0 , 1)  // employer is a relation attribute related to another dataclass
	* // myArray[0] contains { __KEY: '0', __STAMP: 2,name: 'Smith', employer: {name: 'ACME', location: 'Memphis'}}
	*  ```
	* ### Example with Sort, and Sub filtered Relations (three levels)
	* ```javascript
	* 
	* // - Retrieve the first five students.
	* // - Limit the number of courses per student to five.
	* // - Sort arrays by the student's first name and sort course sub-arrays by subject name. Both in ascending order.
	* // - skip the 1st result 
	*  var sel = ds.Student.all();
	*  var myArray = sel.toArray("fullName, Course:5, Course.matter, Course.teacher.fullName", "firstName, Course.matter", 1, 5);
	* ```
	* 
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList?: String, key?: Boolean, skip?: Number, top?: Number): any[];
	
	
	
	
	
	
	/**
	*returns a string representation of the entity or entity collection
	* #### Example 
	* ```
	* ds.Dataclass1.query('ID > 3').toString()  // applied to a collection 
	* ds.Dataclass1.first().toString() // applied to an entity
	* ```
	*/
	toString() : String;
}

interface AttributeEnumerator{
	
}

interface AttributeEnumerator {
    [attributeName: string]: DatastoreClassAttribute;
}