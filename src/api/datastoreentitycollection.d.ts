/// <reference path="./datastoreentity.d.ts" />

interface EntityCollection {
	/**
	*Number of entities in the entity collection.
	*
	* `
	*var myCount = ds.Dataclass.length ;
	*`
	*/
	length: Number;
	/**
	*Description of the query as it was actually performed
	* ```javascript
	*var mySet = ds.Employee.query("salary > :1  and employer.name = :2", 2000, "ACME", {queryPath: true})
	*var thePath = mySet.queryPath 
	* ```
	* @param `true`
	* @returns An object describing how the query is performed
	*/
	queryPath: String;
   /**
	*Description of the query just before it is executed
	*
	*```javascript
	*var mySet = ds.Employee.query("salary > :1  and employer.name = :2", 2000, "ACME", {queryPlan: true})
	*var thePath = mySet.queryPlan 
	* ```
	*
	* @param `true` 
	* @returns object containing the detailed description of the query just before it was executed (i.e., the planned query).
	*/
	queryPlan: String;
   /**
	* Adds entity collection passed in the toAdd parameter to the entity collection
	* ```javascript 
	* var myColl = ds.Employee.createEntityCollection(); //Create an empty collection
    * myColl.add(ds.Employee.first()); //Add the first datastore class entity
	* var myQuery = ds.Employee.query("lastName == :1","H*"); //Find some employees
 	* if(myQuery != null) //some entities were found
    * myColl.add(myQuery); //Add the collection itself
	* ```
	* @warning By default, if the atTheEnd parameter is omitted or False, the original type of the entity collection is left unchanged. 
	* @param atTheEnd `true` to add the collection at the end of the current collection, `false` for AnyWhere
	*/
	add(toAdd: EntityCollection, atTheEnd?: Boolean) : void;
   /**
	* Adds the entity passed in the toAdd parameter to the entity collection
	* ```javascript 
	* var myColl = ds.Employee.createEntityCollection(); //Create an empty collection
    * myColl.add(ds.Employee.first()); //Add the first datastore class entity
	* var entity = ds.Employee.find("lastName == :1","H*"); //Find an employee
 	* if(entity != null) //An entity was found
    * myColl.add(entity); //Add the entity 
	* ```
	* @warning By default, if the atTheEnd parameter is omitted or False, the original type of the entity collection is left unchanged. 
	* @param atTheEnd `true` to add the collection at the end of the current collection, `false` for AnyWhere
	*/
	add(toAdd: Entity, atTheEnd?: Boolean) : void;


	/**
	* The and( ) method compares the entity collection to which it is applied and the collection2 and returns a new entity collection that contains only the entities that are referenced in both collections.
    * You can compare sorted and/or unsorted entity collections. 
	* The resulting collection is always unsorted.
	* @param collection2 Collection to compare with
	* @returns Resulting (unsorted) entity collection
	* ```javascript
	* var coll1 = ds.Employee.query("name =:1", "Jones") ;
	* var coll2 = ds.Employee.query("city=:1", "New York") ;
	* var coll3 = coll1.and(coll2);
	* ```
	*/
	and(collection2: EntityCollection) : EntityCollection;
	/**
	* The average method returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	* @param attribute `string` Attribute whose average you want to calculate
	* @param distinct `boolean` Use only entities that have different values
	* @returns Number Arithmetic average of attribute values
	* @warning By default `distinct` : false
	* #### Example 1
	* ``` javascript
	* var averageSalary = ds.Employee.average("salary", true);
	* var mySet = ds.Employee.query( "salary > :1", averageSalary);
	* ```
	* #### Example 2 - With Object Attribute `dimensions`
	* ```javascript
	* var coll = ds.Box.query("dimensions.bLength > :1", 200);
	* var vAvg = coll.average("dimensions.bWidth");
	* ```
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
	* Returns the datastore class (object of the DatastoreClass type) of the entity collection.
	*
	* To get the DataClass name displayed in must be followed by the getName() or toString() api 
	* #### Example
	* ```javascript
	* - ds.MyDataClass.all().getDataClass().toString()  //to a collection with toString
	* - ds.MyDataClass.first().getDataClass().getName() // to an entity with getName()
	* ```
	* Another example on a model event :
	* ```javascript
	*  
	*
	* // In the onInit event of an extended datastore class, you want to fill in the 'category' attribute the name of the derived class. 
	* // You can write:
	* model.Manager.events.init = function(event)
	* {
    *    //get the name of the class of the entity
    *  var myType = this.getDataClass().getName();
    *   //fill it in the category attribute
    * this.category = myType;
	* };
	* ```
	*/
	getDataClass() : DatastoreClass;
	
	
	
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
	* Minus method excludes from the entity collection to which it is applied the entities that are in the collection2 and returns the resulting entity collection
	* @param collection2  `The collection to substract`
	* @returns Resulting EntityCollection (unsorted)
	* @warning The resulting collection is always `unsorted`. For more details about sorted/unsorted collection : http://doc.wakanda.org/home2.en.html%23/Datastore/Entity-Collection/length.303-638616.en.html#/Wakanda/0.Beta/Unsorted-vs-Sorted-Entity-Collections.300-932765.en.html
	* #### Example 1
	* ```javascript
	* // We want to have a collection of female employees named "Jones" who live in New York :
	* var coll1 = ds.Employee.query("name =:1", "Jones") ;
	* var coll2 = ds.Employee.query("city=:1", "New York") ;
	* var coll3 = coll1.and(coll2).minus(ds.Employee.query("gender ='male'"));
	* ```
	*/
	minus(collection2: EntityCollection) : EntityCollection;




	/**
	*creates a new entity collection that contains all the entities from the entity collection to which it is applied and all the entities from the collection2 entity collection
	* @param collection2 
	* @returns Merged resulting entity collection (unsorted)
	* @warning The resulting collection is always `unsorted`. For more details about sorted/unsorted collection : http://doc.wakanda.org/home2.en.html%23/Datastore/Entity-Collection/length.303-638616.en.html#/Wakanda/0.Beta/Unsorted-vs-Sorted-Entity-Collections.300-932765.en.html
	* #### Example 
	* ```javascript
	* var coll3 = coll1.or(coll2)
	* ```
	*/
	or(collection2: EntityCollection) : EntityCollection;
	
	
	
	
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
	* @param queryString  `search criteria`
	* @param value  `Value(s) to compare using placeholders`
	* @param options Object `query options` 
	*       
	* 
	* #### Important Note
	* Two different syntaxes are allowed.
	* - **Option** 1 : Pass a valid queryString : 
	* ```javascript
	* ds.People.query("lastname == dubois and firstname == jules");
	* ```
	* - **Option 2** : Use placeholders (useful when using variables) : 
	*```javascript
	* ds.People.query("lastname== :1 AND firstname == :2" , "dubois" , "jules");
	* ```
	*  <!-- -->


	*  **Options object description**


	* <!-- -->
	* - __queryPath__ : boolean; default `false`  Returs the performed query
	* - __queryPlan__ : boolean; default `false`  Returns the planned query
	* - __allowJavascript__ : boolean default `false` Allow direct JavaScript execution in the query string. The queryString must be prefixed with the `$` symbol 
	* ``


	* #### Comparators  

	* | Symbol to use | Comparison               | Comment                                                         |
	* |---------------|--------------------------|-----------------------------------------------------------------|
	* | ==            | like                     | supports the wildcard (*), neither case-sensitive nor diacritic |
	* | ===           | Equal to                 | supports the wildcard (*), neither case-sensitive nor diacritic |
	* | in            | Is in Array              |                                                                 |
	* | !=            | Not Like                 |                                                                 |
	* | !==           | Not Equal to             |                                                                 |
	* | >             | Greater than             |                                                                 |
	* | >=            | Greater than or equal to |                                                                 |
	* | <             | Less han                 |                                                                 |
	* | <=            | Less than or equal to    |                                                                 |
	* | begin         | Begins with              | "Begin t" is thus equivalent to "== t*"                         |
	* | %%            | Contains keyword         | works with text or picture type                                 |
	* | =%            | Matches                  | Use with JavaScript Regex                                       |
	* | !=%           | Does not match           | Use with JavaScript Regex                                       |
	*
	* 
	* #### OPERATORS
	````
	 | Symbol to use | operation | 
	 |---------------|-----------|
	 | &             | AND       |
	 | |             | OR        | 
	 | !             | NOT       |
	 | ^             | EXCEPT    |
	````
	* #### EXAMPLES
	*  <details> <summary>Click __Here__ to Expand </summary>
	* <!-- -->
	*  <summary> Simple placeholders </summary>
	* ```javascript
	* //This example selects suppliers whose name contains "bob":
	* var coll = ds.Supplier.query( "name == :1", "*bob*")
	* // This example selects suppliers whose name does not begin with the letter T:
	* var coll = ds.Supplier.query( "name not like :1", "T*")
	* //This example selects suppliers whose name begins with "Sm" and ends with "th":
	* var coll = ds.Supplier.query( "name == :1", "Sm*th")
	* //This example selects employees hired before November 13, 2011:
	* var emp = ds.Employee.query( "dateHired <= :1", 2011-11-12T23:00:00Z)
	* //The following example finds the entities of American, Spanish and German customers:
	* var coll = ds.Customer.query( "country in :1", ['US','SP','GM']);
	* ```
	* 
	* <!-- -->
	*  <summary> Multi placeholders and variables</summary>
	* ```javascript
	*  // The following example finds all articles containing at least one keyword from a list and then gets all the articles written by the same authors:
	* var arrKey= ["finance", "money" , "financial" , "economic"];
	* var coll1 = ds.Article.query("keywords in :1" , arrKey); // finds all articles containing one or several keywords
	* var coll2 = ds.Article.query( "author in :1" , coll1.author) ; // and finds all articles written by the authors
    * // found in the first query results
	* ```
	* 
	* <!-- -->
	*  <summary> With Options parameters </summary>
	* **queryPath & queryPlan options**
	* ```javascript
	* var mySet = ds.Employee.query("age < :1  or worksFor.name = :2 and ID < :3", 40, "Apple", 8, {queryPath:true, queryPlan:true});
	* var arrComp = [mySet.queryPlan,mySet.queryPath];
	* arrComp;
	* ```
	* <!-- -->
	* **allowJavascript options**
	* ```javascript
	* ////exemple1  
	* ds.Employee.query("$(this.name.length == this.firstname.length)", { allowJavascript: true })  
	* ```
	* ```javascript
	* // exemple2
	* ds.Company.query("name = :1 and city= :2 and $(myString.indexOf(activity) != -1)",  "Acme", "London", { allowJavascript: true }) 
	* ```
	*  
	*/
	query(queryString: String, valueList: any[], options?: Object) : EntityCollection;
	
		
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

interface DatastoreClassAttribute extends String {
	
}