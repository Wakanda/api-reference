///<reference path="./group.d.ts" />

	interface User {
		/**
		*Full name of the user
		*/
		fullName: String;
		/**
		*Internal ID of the user
		*/
		ID: String;
		/**
		*Name of the user
		*/
		name: String;
		/**
		*Storage object of the user
		*/
		storage: Storage;
		/**
		*returns an array of the groups to which the User belongs, filtered using the filterString parameter
		*/
		filterParents(filterString: String, level?: Boolean) : Array<Group>;
		/**
		*returns an array of the groups to which the User belongs, filtered using the filterString parameter
		*/
		filterParents(filterString: String, level?: String) : Array<Group>;
		/**
		*returns an array of the groups to which either the User belongs
		*/
		getParents(level?: Boolean) : Array<Group>;
		/**
		*returns an array of the groups to which the User belongs
		*/
		getParents(level?: String) : Array<Group>;
		/**
		*adds the User to the group(s) you passed in the groupList parameter
		*/
		putInto(...groupList: String[]) : void;
		/**
		*adds the User to the group(s) you passed in the groupList parameter
		*/
		putInto(...groupList: Group[]) : void;
		/**
		*removes the User or Group from the solution's Directory
		*/
		remove() : void;
		/**
		*removes the User from the group(s) you passed in the groupList parameter
		*/
		removeFrom(...groupList: String[]) : void;
		/**
		*removes the User from the group(s) you passed in the groupList parameter
		*/
		removeFrom(...groupList: Group[]) : void;
		/**
		*allows you to change the password for the User
		*/
		setPassword(password: String) : void;
	}