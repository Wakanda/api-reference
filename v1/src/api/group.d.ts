///<reference path="./user.d.ts" />

	
	interface Group {
		/**
		*Full name of the group
		*/
		fullName: String;
		/**
		*Internal ID of the group
		*/
		ID: String;
		/**
		*Name of the group
		*/
		name: String;
		/**
		*returns an array of the subgroups belonging to the Group, filtered using the filterString parameter
		*/
		filterChildren(filtrerString: String, level?: Boolean) : Array<Group>;
		/**
		*returns an array of the subgroups belonging to the Group, filtered using the filterString parameter
		*/
		filterChildren(filtrerString: String, level?: String) : Array<Group>;
		/**
		*returns an array of the groups to which the Group belongs, filtered using the filterString parameter
		*/
		filterParents(filterString: String, level?: Boolean) : Array<Group>;
		/**
		*returns an array of the groups to which the Group belongs, filtered using the filterString parameter
		*/
		filterParents(filterString: String, level?: String) : Array<Group>;
		/**
		*returns an array of the users that belong directly or indirectly to the Group, filtered using the filterString parameter
		*/
		filterUsers(filterString: String, level?: Boolean) : Array<User>;
		/**
		*returns an array of the users that belong directly or indirectly to the Group, filtered using the filterString parameter
		*/
		filterUsers(filterString: String, level?: String) : Array<User>;
		/**
		*returns an array of the subgroups belonging to the Group
		*/
		getChildren(level?: Boolean) : Array<Group>;
		/**
		*returns an array of the subgroups belonging to the Group
		*/
		getChildren(level?: String) : Array<Group>;
		/**
		*returns an array of the groups to which the Group belongs
		*/
		getParents(level?: Boolean) : Array<Group>;
		/**
		*returns an array of the groups to which the Group belongs
		*/
		getParents(level?: String) : Array<Group>;
		/**
		*returns an array of users belonging to the Group
		*/
		getUsers(level?: Boolean) : Array<User>;
		/**
		*returns an array of users belonging to the Group
		*/
		getUsers(level?: String) : Array<User>;
		/**
		*adds Group to the group(s) you passed in the groupList parameter
		*/
		putInto(...groupList: String[]) : void;
		/**
		*adds Group to the group(s) you passed in the groupList parameter
		*/
		putInto(...groupList: Group[]) : void;
		/**
		*removes the User or Group from the solution's Directory
		*/
		remove() : void;
		/**
		*removes the Group from the group(s) you passed in the groupList parameter
		*/
		removeFrom(...groupList: String[]) : void;
		/**
		*removes the Group from the group(s) you passed in the groupList parameter
		*/
		removeFrom(...groupList: Group[]) : void;
		/**
		*sets a local name (alias) to the Group object corresponding to a remote group from a LDAP directory
		*/
		setAlias(alias: String) : void;
	}