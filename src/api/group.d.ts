///<reference path="./user.d.ts" />

interface Group {
    /**
     * Describes the internal group ID.
     */
    ID: String;
    /**
     * Describes the group name.
     */
    name: String;
    /**
     * Returns all children directory groups starting with `filterString`.
     * 
     * ```javascript
     * var myABCDEFG;
     * var myGroups = directory.filterChildren("*cien");
     * ```
     * 
     * @param filterString Describe the filtering string
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     * @returns Returns an array of group
     */
    filterChildren(filterString: String, level?: Boolean): Array<Group>;
    /**
     * Returns all children directory groups starting with `filterString`.
     * 
     * ```javascript
     * var myGroups = directory.filterParents("*cien");
     * ```
     * 
     * @param filterString Describe the filtering string
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     * @returns Returns an array of group
     */
    filterParents(filterString: String, level?: Boolean): Array<Group>;
    /**
     * Get children groups belonging to the current group.
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     */
    getChildren(level?: Boolean): Array<Group>;
    /**
     * Get parent groups to which the current group belongs.
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     */
    getParents(level?: Boolean): Array<Group>;
    /**
     * Get users belonging to the current group.
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     */
    getUsers(level?: Boolean): Array<User>;
    /**
     * Assignes a group to one or more groups.
     * 
     * ```javascript
     * myGroup.putInto( 'sales' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group name
     */
    putInto(...groupList: String[]): void;
    /**
     * Assignes a group to one or more groups.
     * 
     * ```javascript
     * var SalesGroup = directory.group( 'sales' ); 
     * myGroup.putInto( SalesGroup );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group object
     */
    putInto(...groupList: Group[]): void;
    /**
     * Removes the group from the directory.
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     */
    remove(): void;
    /**
     * Removes the group from group list.
     * 
     * ```javascript
     * myGroup.removeFrom( 'sales', 'finance' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group name
     */
    removeFrom(...groupList: String[]): void;
    /**
     * Removes the group from group list.
     * 
     * ```javascript
     * var group1 = directory.group( 'finance' ); 
     * var group2 = directory.addGroup( 'account' );
      * myGroup.removeFrom( group1 , group2 )
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group object
     */
    removeFrom(...groupList: Group[]): void;
    /**
     * Sets a local name (alias) to the group object corresponding to a remote group from a LDAP directory.
     * @warning Requires LDAP component
     */
    setAlias(alias: String): void;
}