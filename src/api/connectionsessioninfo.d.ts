///<reference path="./keyvaluestorage.d.ts" />

interface WAKConnectionSessionInfo {
    /**
     * UUID String referencing the user. It can be any ID but must not be an existing user ID.
     */
    ID: String;
    /**
     * Username of the User.
     */
    name: String;
    /**
     * Full Name of the User.
     */
    fullName?: String;
    /**
     * Array of UUID strings or Array of group names referencing the groups the user must belong to.
     */
    belongsTo?: String[];
    /**
     * Defines the session storage property of the user session.
     */
    storage?: KeyValueStorage;
    /**
     * Defines the session time to live in seconds for the user session.
     */
    lifeTime?: Number;
}