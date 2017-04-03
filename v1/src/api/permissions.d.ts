
	interface Permissions {
		/**
		*returns a JSON object describing the permission defined for the specified type, resource and action
		*/
		findResourcePermission(type: String, resource: String, action: String) : Object;
	}