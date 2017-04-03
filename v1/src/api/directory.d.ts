	///<reference path="./user.d.ts" />
	///<reference path="./group.d.ts" />
	///<reference path="./connectionsession.d.ts" />
	///<reference path="./datastore.d.ts" />
	
	interface Directory {
		/**
		*Internal directory datastore
		*/
		internalStore: Datastore;
		/**
		 *The user who opened the current user session on the server 
		 */
		currentUser : User;
		/**
		 * object identifying the current session under which the current user is actually running on the server
		 */
		currentSession : ConnectionSession;
		/**
		*creates a new group in the solution's Directory and returns it as a Group object
		*/
		addGroup(name: String, fullName?: String) : Group;
		/**
		*creates a new user in the solution's Directory and returns it as a User object
		*/
		addUser(name: String, password: String, fullName?: String) : User;
		/**
		*returns the HA1 key resulting from the combination of userName, password and (optionally) realm parameters using a hash function
		*/
		computeHA1(userName: String, password: String, realm?: String) : String;
		/**
		*returns all groups whose name starts with filterString in the Directory
		*/
		filterGroups(filterString: String) : Array<Group>;
		/**
		*returns all users whose names starts with filterString in the Directory
		*/
		filterUsers(filterString: String) : Array<User>;
		/**
		*returns the name of the loginListener function set by setLoginListener( ) for the solution, if any
		*/
		getLoginListener() : String;
		/**
		*returns the local Group object referencing the remote group with the alias (i.e. the local name) you passed in the alias parameter
		*/
		getRemoteGroupByAlias(alias: String) : Group;
		/**
		*returns a local Group object referencing the remote group that corresponds to the unique Distinguished Name (DN) you passed in the dn parameter
		*/
		getRemoteGroupByDN(dn: String) : Group;
		/**
		*returns a Group object containing the group corresponding to the name (or ID) you passed in the name parameter
		*/
		group(name: String) : Group;
		/**
		*returns true if the solution is currently running under the controlled admin access mode, and false if it is under the free access mode
		*/
		hasAdministrator() : Boolean;
		/**
		*saves all changes made to the open solution directory
		*/
		save(backup?: String) : Boolean;
		/**
		*saves all changes made to the open solution directory
		*/
		save(backup?: File) : Boolean;
		/**
		 *set a Wakanda SSJS module as session manager, to handle all session operations : readSession, writeSession and deleteSession
		 */
		setSessionManager(modulePath: String);
		/**
		*set a loginListener function to handle login requests for your Wakanda solution
		*/
		setLoginListener(loginListener: String, group?: Group) : void;
		/**
		*set a loginListener function to handle login requests for your Wakanda solution
		*/
		setLoginListener(loginListener: String, group?: String) : void;
		/**
		*synchronizes the local Wakanda directory (.waDirectory file) with a remote LDAP directory
		*/
		sync(remoteLDAP?: Object) : void;
		/**
		*returns an User object containing the user corresponding to the name (or ID) you passed in the name parameter
		*/
		user(name: String) : User;
	}
	