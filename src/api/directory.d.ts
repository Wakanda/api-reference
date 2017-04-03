///<reference path="./connectionsession.d.ts" />
///<reference path="./connectionsessioninfo.d.ts" />
///<reference path="./user.d.ts" />
///<reference path="./group.d.ts" />
///<reference path="./file.d.ts" />

interface WAKDirectory {
    /**
     * Create a new user session and sets it as the current session.
     * 
     * ```javascript
     * var cur = directory.currentSession;
     * console.log( cur.ID );
     * // BF44D6E51B8FAKE485D8966ED3EDF6DD
     * 
     * // Create a new session and keep previous session
     * directory.createUserSession(
     *     {
     *         ID: '0001000100010001000100010001000100010001',
     *         name: 'jsmith',
     *         fullName: 'Jennifer Smith',
     *         belongsTo: [ 'Manager' ],
     *         lifeTime: 60*60
     *     },
     *     true
     * );
     * 
     * console.log( directory.currentSession.ID );
     * // 1E121BA4AE82446B9FDB430F0A9055C6
     * // The new session is now the current session
     * 
     * var previousSession = directory.getSession( 'BF44D6E51B8FAKE485D8966ED3EDF6DD' );
     * console.log( previousSession.ID );
     * // BF44D6E51B8FAKE485D8966ED3EDF6DD
     * // The previous session is still valid
     * ```
     * 
     * @param sessionObj Describes the session to create
     * @param keepPreviousSession (default `false`) Set to `true` if you want to keep the previous user session, `false` if you want to expire the previous user session.
     * 
     */
    createUserSession(sessionObj: WAKConnectionSessionInfo, keepPreviousSession?: Boolean): void;
    /**
     * The current user who opened the user session.
     */
    currentUser: User;
    /**
     * The current user session.
     */
    currentSession: WAKConnectionSession;
    /**
     * Add a new group to the directory and returns it.
     * 
     * ```javascript
     * var myNewGroup = directory.addGroup( 'astronauts' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param name Describes the group name
     * @returns Returns the new group
     */
    addGroup(name: String): Group;
    /**
     * Add a new user to the directory and returns it.
     * 
     * ```javascript
     * var myNewUser = directory.addUser( 'Thomas Pesquet' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param name Describes the user name
     * @param password Describes the user password
     * @param fullName Describes the user fullname
     * @returns Returns the new user
     */
    addUser(name: String, password: String, fullName?: String): User;
    /**
    * Gets the HA1 key resulting from the combination of userName, password and (optionally) realm parameters using a hash Function.
    */
    computeHA1(userName: String, password: String, realm?: String): String;
    /**
     * Returns all directory groups starting with `filterString`.
     * 
     * ```javascript
     * var myGroups = directory.filterGroups( '*pers' );
     * ```
     * 
     * @param filterString Describe the filtering string
     * @returns Returns an array of group
     */
    filterGroups(filterString: String): Array<Group>;
    /**
     * Returns all directory users starting with `filterString`.
     * 
     * ```javascript
     * var myUsers = directory.filterUsers("Jo*");
     * ```
     * 
     * @param filterString Describe the filtering string
     * @returns Returns an array of user
     */
    filterUsers(filterString: String): Array<User>;
    /**
     * Get an active session object from a session id.
     * 
     * ```javascript
     * var previousSession = directory.getSession( 'BF44D6E51B8FAKE485D8966ED3EDF6DD' );
     * ```
     * 
     * @param sessionID Describes the string session id
     * @returns Returns the session object if any
     */
    getSession(sessionID: String): WAKConnectionSession;
    // /**
    //  * Get all active user sessions.
    //  * 
    //  * ```javascript
    //  * // Get all active user session
    //  * var sessionArray = directory.getUserSessions();
    //  * ```
    //  * 
    //  * @returns Returns an array of session object if any
    //  */
    // getUserSessions(): Array<ConnectionSession>;
    // /**
    //  * Get all active user sessions for a user ID.
    //  * 
    //  * ```javascript
    //  * // Get all active user session for the current user
    //  * var sessionArray = directory.getUserSessions( currentSession().user.ID );
    //  * ```
    //  * 
    //  * @param userId Describes a user ID.
    //  * @returns Returns an array of session object if any.
    //  */
    // getUserSessions(userId: String): Array<ConnectionSession>;
    // /**
    //  * Get all active user sessions for a user.
    //  * 
    //  * ```javascript
    //  * // Get all active user session for the current user
    //  * var sessionArray = directory.getUserSessions( currentSession().user );
    //  * ```
    //  * 
    //  * @param user Describes a user object.
    //  * @returns Returns an array of session object if any.
    //  */
    // getUserSessions(user: User): Array<ConnectionSession>;
    /**
     * Returns the local Group Object referencing the remote group with the alias (i.e. the local name) you passed in the alias parameter.
     * @warning Requires LDAP component.
     */
    getRemoteGroupByAlias(alias: String): Group;
    /**
     * Returns a local Group Object referencing the remote group that corresponds to the unique Distinguished Name (DN) you passed in the dn parameter.
     * @warning Requires LDAP component.
     */
    getRemoteGroupByDN(dn: String): Group;
    /**
     * Gets a group from its name or ID.
     * 
     * ```javascript
     * var myGroup = directory.group( 'Spies' );
     * ```
     * 
     * @param name Describes the group name or ID
     * @returns Returns the group
     */
    group(name: String): Group;
    /**
     * Authenticates a user by their name and key and, in case of success, opens a new user Session on the server.
     * 
     * ```javascript
     * directory.loginByKey('john', '6153A6FA0E4880D9B8D0BE4720F78E895265D0A9');
     * directory.loginByKey('john', '6153A6FA0E4880D9B8D0BE4720F78E895265D0A9', 60*60);
     * ```
     * 
     * @param name Describes the user name
     * @param key Describes a computed key associated to the user
     * @param timeOut Defines the user session timeout (in seconds)
     * @returns Returns `true` if authentication succeed and `false` if an error occured
     */
    loginByKey(name: String, key: String, timeOut?: Number): Boolean;
    /**
     * Authenticates a user by their name and password and, in case of success, opens a new user Session on the server.
     * 
     * ```javascript
     * directory.loginByPassword('john', 'my-password');
     * directory.loginByPassword('john', 'my-password', 60*60);
     * ```
     * 
     * @param name Describes the user name
     * @param password Describes the user password
     * @param timeOut (seconds) Defines the user session timeout
     * @returns Returns `true` if authentication succeed and `false` if an error occured
     */
    loginByPassword(name: String, password: String, timeOut?: Number): Boolean;
    /**
     * Logs out the user from its current session on the Wakanda server.
     * 
     * ```javascript
     * directory.logout();
     * ```
     * 
     * @returns Returns `true` if the user has been successfully logged out and `false` if an error occured
     */
    logout(): Boolean;
    /**
     * Saves all changes made in the directory.
     * 
     * ```javascript
     * directory.save();
     * ```
     * 
     * @returns Returns `true` if successfully saved, `false` otherwise.
     */
    save(): Boolean;
    /**
     * Saves all changes made in the directory.
     * 
     * ```javascript
     * directory.save( 'PROJECT/backups/2016-01-01.waDirectory' );
     * ```
     * 
     * @warning Destination file must exist
     * @param backup Describes a file path for the directory backup.
     * @returns Returns `true` if successfully saved, `false` otherwise.
     */
    save(backup: String): Boolean;
    /**
     * Saves all changes made in the directory.
     * 
     * ```javascript
     * var myFile = new File( 'PROJECT/backups/2016-01-01.waDirectory' );
     * directory.save( myFile );
     * ```
     * 
     * @warning Destination file must exist
     * @param backup Describes a file for the directory backup.
     * @returns Returns `true` if successfully saved, `false` otherwise.
     */
    save(backup: WAKFileInstance): Boolean;
    /**
     * Sets the session whose UUID is passed in sessionID as the new current session of the running thread.
     * 
     * ```javascript
     * console.log(directory.currentSession.ID);
     * // 2EA82764A075497181278B2F05DA2EDA
     * directory.setCurrentSession('E8CBA745124D4BE4BF7D5A224183EC8E', true);
     * console.log(directory.currentSession.ID);
     * // E8CBA745124D4BE4BF7D5A224183EC8E
     * directory.getSession('2EA82764A075497181278B2F05DA2EDA');
     * // null
     * // Previous session has expire
     * ```
     * 
     * @param sessionId Describes the active user session to set as current user session
     * @param forceExpire (default: `false`) Set to `true` if the previous user session must expire, `false` otherwise. 
     */
    setCurrentSession(sessionId: String, forceExpire?: Boolean): void;
    /**
     * Handles and manages sessions through a SSJS module.
     * 
     * ```javascript
     * // Usually defined in a boostrap file
     * directory.setSessionManager( 'session' );
     * // Refers to PROJECT/modules/session/index.js module
     * ```
     * 
     * The module must export the following methods to handle all session operations:
     * 
     * ```javascript
     * // PROJECT/modules/session/index.js
     * // This session manager saves all session in the storage (could be a Redis instead)
     * 
     * // Called everytime the server creates or updates a session
     * exports.writeSession = function( session ){
     *     // Handle/save this data anywhere you want
     *     console.log( session.userName +' logged-in at '+ new Date() );
     *     // Save session in the storage
     *     var sessionInfo = JSON.stringify( session );
     *     storage[ session.sessionID ] = sessionInfo;
     *     
     *     // Return true as everything is ok
     *     return true;
     * }
     * // Called everytime the server needs a session description
     * exports.readSession = function( session ){
     *     var sessionID = session.sessionID;
     *     var sessionInfo = storage[ sessionID ];
     *     
     *     if( sessionInfo === undefined ){
     *         return false; // Error, sessionInfo is empty
     *     }
     *     
     *     sessionInfo = JSON.parse( sessionInfo );
     *     
     *     session.userID = sessionInfo.userID;
     *     session.userName = sessionInfo.userName;
     *     session.storage = sessionInfo.storage;
     *     session.belongsTo = sessionInfo.belongsTo;
     *     session.requestInfo = sessionInfo.requestInfo;
     *     session.lifeTime = sessionInfo.lifeTime;
     *     session.expiration = new Date( sessionInfo.expiration );
     *     
     *     // Return true as everything is ok
     *     return true;
     * }
     * // Calles everytime the server removes a session
     * exports.removeSession = function( session ){
     *     console.log( session.userName +' logged-out at '+ new Date() );
     *     var sessionID = session.sessionID;
     *     storage[ sessionID ] = undefined;
     *     // Return true as everything is ok
     *     return true;
     * }
     * ```
     * 
     * @param modulePath Describes the module path
     */
    setSessionManager(modulePath: String);
    /**
     * Defines a module to manage all login requests to Wakanda Server.
     * 
     * ```javascript
     * directory.setLoginManager('my-login-module');
     * directory.setLoginManager('my-login-module', 'myDirectoryGroup');
     * ```
     * 
     * This module is defined inside `PROJECT/modules/my-login-module` or `SOLUTION/modules/my-login-module`.
     * If the module is not found in the project, it is then check inside the solution.
     * It must export a `login()` method and return the `user` object.
     * 
     * ```javascript
     * // my-login-module/index.js
     * // Export a login() function
     * exports.login = function(username, password){
     *     // Verify the username/password through Directory or any other User DB
     *     // If user is authenticated then return the user object
     *     if (user)
     *         return {
     *           // Unique user ID. Must not collide with an existing user ID
     *           ID: 545642165412,
     *           name: user.name,
     *           fullName: user.fullname,
     *           // References the Directory group where the user belongs
     *           belongsTo: 'free-customer',
     *           // Defines the sessionStorage property of the user session
     *           storage: {}
     *         };
     *     }
     *     // If user not authenticated then return an error
     *     else if (!user)
     *     {
     *         return {
     *           // Error code returned
     *           error: 548,
     *           // Error text returned
     *           errorMessage: 'Authentication failed. Login or Password maybe wrong.'
     *         };
     *     }
     *     // or continue using the standard process (with the internal directory)
     *     else
     *     {
     *         return false;
     *     }
     * }
     * ```
     * 
     * @param moduleName Module name which handles the login
     * @param group Group rights assign to the login manager for handling its actions
     */
    setLoginManager(moduleName: String, group?: String): void;
    /**
     * Synchronizes the local Wakanda directory with a remote LDAP directory.
     * @warning Requires LDAP component.
     */
    sync(remoteLDAP?: Object): void;
    /**
     * Gets a user from its name or ID.
     * 
     * ```javascript
     * var myUser = directory.user( 'Thomas Pesquet' );
     * ```
     * 
     * @param name Describes the user name or ID
     * @returns Returns the user
     */
    user(name: String): User;
}
