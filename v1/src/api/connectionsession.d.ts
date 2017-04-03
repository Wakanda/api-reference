///<reference path="./group.d.ts" />

	interface ConnectionSession {
		/**
		*Expiration date
		*/
		expiration: Date;
		/**
		*Internal ID of the session
		*/
		ID: String;
		/**
		*Lifetime of the session in seconds (default is 3600)
		*/
		lifeTime: Number;
		/**
		*sessionStorage object of the user session
		*/
		storage: Storage;
		/**
		*User who runs the connection session
		*/
		user: User;
		/**
		*returns true if the current session belongs to the group
		*/
		belongsTo(group: String) : Boolean;
		/**
		*returns true if the current session belongs to the group
		*/
		belongsTo(group: Group) : Boolean;
		/**
		*returns true if the current session belongs to the group and throws an error if false
		*/
		checkPermission(group: String) : Boolean;
		/**
		*returns true if the current session belongs to the group and throws an error if false
		*/
		checkPermission(group: Group) : Boolean;
		/**
		*makes the user session expire
		*/
		forceExpire() : void;
		/**
		*temporarily promotes the current session into the group
		*/
		promoteWith(group: Group) : Number;
		/**
		*temporarily promotes the current session into the group
		*/
		promoteWith(group: String) : Number;
		/**
		*stops the temporary promotion set for the current session using the promoteWith( ) method
		*/
		unPromote(token: Number) : void;
	}