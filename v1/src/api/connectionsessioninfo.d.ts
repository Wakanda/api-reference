interface ConnectionSessionInfo{
    /**
     *UUID string referencing the user. It can be any ID but must not be an existing user ID
     */
    ID : string;
    /**
     *Username of the User
     */
    name : string;
    /**
     *Full Name of the User
     */
    fullName : string;
    /**
     *Array of UUID strings or array of group names referencing the groups the user must belong to
     */
    belongsTo : string[];
    /**
     *sessionStorage property of the user session (optional)
     */
    storage : Object;
    /**
     *Define the session time to live for the user session (optional)
     */
    lifeTime : Number;
}