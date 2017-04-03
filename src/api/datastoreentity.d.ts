/// <reference path="./datastoreclass.d.ts" />


interface Entity {
/**
	* Returns the datastore class (object of the DatastoreClass type) of the entity. 
	*
	* #### For more information go [here](entitycollection.html#getdataclass)
	*/
	getDataClass() : DatastoreClass;
	
	
	
	
	
	/**
	*returns the timestamp of the last save of the entity to which it is applied
	* @returns  Date object in local format
	*/
	getTimeStamp() : Date;
	
	
	
	
	/**
	* returns True or False depending on whether the entity iterator points to an entity that is currently loaded in memory
	*/
	isLoaded() : Boolean;
	
	
	
	/**
	* returns True or False depending on whether the entity to which it is applied has been modified since the last time it was loaded from the datastore.
	* #### Note
	* You can use this method to find out if you need to save the entity.
	* This method always returns True for a new entity.
	*
	* #### Example
	* ```javascript
	* emp = ds.Employee.first();
    *    //... process the data in the entity
	* if (emp.isModified())     // if at least one of the attributes has been changed
    * emp.save(); 
    * // otherwise, no need to save the entity
	* ```
	*/
	isModified() : Boolean;
	
	
	
	
	/**
	*returns True or False depending on whether the entity to which it is applied has just been created in the datastore (and not saved yet)
	*/
	isNew() : Boolean;



	/**
	*puts the entity pointer on the next entity within an iteration of entities
	*
	* #### Example with a `for` loop
	* ```javascript
	*  var myColl = ds.People.query("nationality = :1", "FR");
    * for (var onePerson = myColl.first(); onePerson != null; onePerson=onePerson.next())
    * // onePerson will return null after the last entity of the collection
	* {
    * onePerson.name = onePerson.name.toUpperCase();
    * onePerson.save();
	* }
	* ```
	* #### Same Example with `while`
	* ```javascript
	* var myColl = ds.People.query("nationality = :1", "FR");
	* var onePerson = myColl.first(); 
	* while (onePerson != null)
    * {
    *    onePerson.name = onePerson.name.toUpperCase();
    *    onePerson.save();
    *    onePerson=onePerson.next();
    * }
	*/
	next() : Entity;
	
	
	
	
	/**
	*reloads the entity as it is stored in the datastore
	* @warning 
	* If values are modified and not saved, they are lost.
	*  #### Note : This method is useful :
	* - when you attempt to save an entity but receive an error because this entity was modified in the meantime by another user
	* - when adding new related entities (see below):
	* ```javascript
	* ///For instance, if you have classes with a company/employee relationship...
	* ///If you get a collection of the employees related to a company like this:
	* locationsColl_Before = company.locations; //3 locations
	* //Then you create a new location related to the company.  You might expect calling this again:
	* locationsColl_After = company.locations; //3 locations
	* //It will not, it will still return the original 3.  In order to get all 4 locations related to the company you need to refresh:
	* company.refresh();  locationsColl_AfterRefresh = company.locations; //4 locations
	* ```
	*/
	refresh() : void;
	
	
	
	
	
	/**
	*releases the entity from memory
	*
	* <details> <summary>**Note** : How to use this method (advanced) : </summary>
	* ***
	* ````text
	* Once unloaded by this method, the entity is not unusable. 
	* Wakanda keeps a reference to the entity and automatically reloads it as soon as it becomes used again.
	* This utility method lets you optimize memory consumption when the server needs to load and work with numerous large objects, such as pictures or BLOBs. 
	* 
	* In principle, the garbage collection mechanism of JavaScript will purge unused objects from memory. However, this mechanism operates * * autonomously and can prove to be insufficient in some cases. For example, when the server has loaded dozens of large pictures on the JavaScript side, only references are handled, which may not require the intervention of the garbage collector. 
	* 
	* However, on the server side, the memory is in high demand. In a case like this, it is useful to be able to "force" entities to be unloaded using the release( ) method.
	* 
	* Note that after calling release( ), if you want to make sure that the JavaScript reference to an entity has been deleted without having to wait for garbage collection (and thus for a subsequent access to the entity to return an error), you must force its value to null.
	* ````
	* 
	* #### Example :
	* ```javascript
	* myEntity.release();   //unload the entity from the server
	* myEntity = null;     // delete its reference
	* ```
	*/
	release() : void;
	
	
	
	
	
	
	/**
	*removes the entity from the datastore
	*
	* #### Note:
	* When this method is executed, it triggers a call to the remove event on the server if it has been set for the entity's datastore class or one of the datastore class attributes.
	* 
	* For more information and examples about the remove() method, check its description [here (collection section)](entitycollection.html#remove)
	*/
	remove() : void;
	
	
	
	
	
	
	/**
	* Saves the changes made to the entity in the datastore
	* 
	* 
	* **How to update an existing entity :**
	* ```javascript 
	* var a = ds.Employee.first();
	* a.firstname = "MyNewFirstName" ;
	* a.lastname =  "MyNewLastName" ;
	* a.save();
	* ```
	* **How to create then save an entity:**
	* ```javascript
	* new ds.Employee(
*{
*	firstname : "MyNewFirstName" ,
*	lastname  : "MyNewLastName"
*}).save();
	* ```
	* 
	* </p> 
	* ***
	* 
	* #### Events
	* 
	* When executing a save() action, on the server side the events (if defined) are performed in the following order :
	* 1. validate on each attribute
	* 2. validate on the datastore class
	* 3. save on the datastore class
	* 4. save on each attribute
	*
	* #### Example 
	*
	* ```javascript
	* //You can intercept and manage the error returned by the engine when the entity's internal stamp being saved is different from the one that is saved in the data
	* //To do this, you can place the save statement in a try/catch type structure. For example:
	* // select an entity and change its name to uppercase
	* function toUpperEmployee(lastName, firstName) 
	* {
    	* var emp = ds.Employee.find("lastName = :1 and firstName = :2", lastName, firstName);
    	* emp.lastName.toUppercase();
    	* try
    	* {
    	*    emp.save();
    	* }
    	* catch(e)
       	* {  ... // put the error-processing code here
* }
	* ```
	*/
	save() : void;
	
	
	
	
	/**
	*returns a string representation of the entity or entity collection
	* Examples are available [here](entitycollection.html#tostring)
	*/
	toString() : String;



	/**
	 * The getKey( ) method returns the primary key value of the entity to which it is applied.
	 * ```javascript
	 * 	var ent = ds.Person.find("name = :1", "Smith");
	 *	var key = ent.getKey();
	 * ```
	 * This method is useful to identify the entity to update for instance.  
	 * The KEY value is also needed when you pass a POST request
	 * 
	 * 
	 * 
	 */
	getKey() : String;


	/**
	 * The getStamp( ) method returns the current value of the internal stamp of the entity.
	 * The internal locking stamp is automatically incremented by Wakanda each time the entity is saved on the server. 
	 * **It manages concurrent user access**
	 * 
	 * #### Note 
	 * The entity's STAMP value is needed when executing POST request throught XRH to update an entity
	 * 
	 */
	getStamp() : Number;






	/**
	 * The lock( ) method tries to lock the entity for the session and returns true if the entity is locked successfully, or false if the entity is already locked by another session.
	 * @returns True if the entity is locked for the session, false otherwise
	 * 
	 * @warning The lock()/unlock() method only works with WakandaDB and 4D Mobile Connector. It does not work when working with the **MYSQL & OBDC Connectors**
	 *  
	 * For more details about locking entities check this pages :
	 *  - [lock() API Description](http://doc.wakanda.org/Datastore/Entity/lock.301-1074685.en.html)
	 *  - [In-Depth description of locking mecanism](http://doc.wakanda.org/Datastore/Entity/Locking-Entities.300-606099.en.html)
	 * 
	 */
	lock() : Boolean;




	/**
	 * The unlock() method unlocks the entity in the running session.
	 * This method must be called after the lock( ) method to unlock the entity for the other sessions.
	 * 
	 * @warning The lock()/unlock() method only works with WakandaDB and 4D Mobile Connector. It does not work when working with the **MYSQL & OBDC Connectors**
	 *  
	 * For more details about locking entities check this pages :
	 *  - [unlock() API Description](http://doc.wakanda.org/Datastore/Entity/unlock.301-1074691.en.html)
	 *  - [In-Depth description of locking mecanism](http://doc.wakanda.org/Datastore/Entity/Locking-Entities.300-606099.en.html)
	 * 
	 */
	unlock() : void;



	/**
	 * The getModifiedAttributes( ) method returns an array containing the names of attributes that have been modified in the entity.
	 * This method is useful in validation control functions.(validate events for instance or methods, functions..)
	 * @returns Array of attributes 
	 * 
	 * #### Example in a Dataclass Validate Event 
	 * ```javascript
	 * model.Invoice.events.validate = function(event) {
	 *           //get the array of attributes that were changed
     *   var attributeMods = this.getModifiedAttributes();
     *      //cycle through them
     *   attributeMods.forEach(function(attribName){
     *       switch (attribName){ 
     *          case 'ID': //if the ID was changed
     *          case 'InvoiceDate': //or the invoiceDate was changed
     *                   //assign an error number and message
     *               result = {error: 1000, errorMessage: 'Invalid Change !'};
     *               break;
     *       }
     *   });
     *   return result; //return result regardless
     * }
	 * ```
	 *  
	 * 
	 * ```javascript
	 *  //Then each time you perform a save action the entity will go through this validation process
	 *  var a = ds.Invoice.first();
	 *  a.ID = 12;
	 *  a.save();
	 *  // Running this will thow the error message 'Invalid Change !
	 * ```
	 */
	getModifiedAttributes() : Array;







	/**
	 * The validate( ) method passes the entity through the validation process.
	 * Precisely it means  that on the server, the code associated with the **validate (attribute) and validate (datastore class) event(s)** is executed.
	 * @returns True in case of success (the entity successfully passes the validation process)
	 * @warning Keep in mind that the entity is not saved until you actually call the save( ) method.  
	 *
	 * 
	 * </br> </p>
	 * <details> 
	 * <summary> 
	 * 
	 *  #### Validation  Example (click to Expand) 
	 * </summary>
	 * ```javascript
	 * // first let's create a dataclass validate event
	 * model.Elem.events.validate = function(event) //onValidate until Wakanda v8
    *{
    *if (this.name == "Unknown") {
    *    return {
    *        error: 100, // an object with 'error' will make validation fail
    *        errorMessage: "The name cannot be 'Unknown'"
    *    };
   * }
*} ```
	 * Then you could create a datastore class method
	 * ```javascript
	 * checkValidity:function()
    {
    try {
            return this.validate(); // returns true if successful
    }
    catch (e) {
        throw { // if fail
                // send an exception with the customized message
                // from the error stack
            message: e.messages[e.messages.length - 1] 
             
        };
    }
} 
	 * //Finally you would simply call your Validation process by calling 
	 *  // - the validate() method (server side) or , 
	 * //  - the CheckValidity class method (server side or client side)
	* ```
	*/
	validate() : Boolean;
}
