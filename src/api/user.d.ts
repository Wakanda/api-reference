///<reference path="./group.d.ts" />
///<reference path="./keyvaluestorage.d.ts" />

interface User {
    /**
     * Describes the user full name.
     */
    fullName: String;
    /**
     * Describes the internal user ID.
     */
    ID: String;
    /**
     * Describe the user name.
     */
    name: String;
    /**
     * Defines the user storage object.
     * This object is maintained as long as the server is alive. It is not stored after the server shuts down. This property is user-related and not session-related.
     * 
     * ```javascript
     * directory.currentUser.storage.setItem( 'itemInBox', 19 );
     * var result = directory.currentUser.storage.getItem( 'itemInBox' );
     * console.log(result);
     * // 19
     * ```
     */
    storage: LockableKeyValueStorage;
    /**
     * Get all groups where the user belongs to.
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     * @returns Returns an array of group
     */
    getParents(level?: Boolean): Array<Group>;
    /**
     * Assignes a user to one or more groups.
     * 
     * ```javascript
     * myUser.putInto( 'sales', 'finance' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group name
     */
    putInto(...groupList: String[]): void;
    /**
     * Assignes a user to one or more groups.
     * 
     * ```javascript
     * var group1 = directory.group( 'finance' ); 
     * var group2 = directory.addGroup( 'account' );
      * myUser.putInto( group1 , group2 )
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group object
     */
    putInto(...groupList: Group[]): void;
    /**
     * Removes the user from the directory.
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     */
    remove(): void;
    /**
     * Removes the user from group list.
     * 
     * ```javascript
     * myUser.removeFrom( 'sales', 'finance' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group name
     */
    removeFrom(...groupList: String[]): void;
    /**
     * Removes the user from group list.
     * 
     * ```javascript
     * var group1 = directory.group( 'finance' ); 
     * var group2 = directory.addGroup( 'account' );
     * myUser.removeFrom( group1 , group2 )
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group object
     */
    removeFrom(...groupList: Group[]): void;
    /**
     * Update the user password in the directory.
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param password The new password to save
     */
    setPassword(password: String): void;
}