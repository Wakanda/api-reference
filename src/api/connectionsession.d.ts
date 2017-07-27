///<reference path="./group.d.ts" />
///<reference path="./storage.d.ts" />

interface WAKConnectionSession {
    /**
     * Describes the session expiration date.
     */
    expiration: Date;
    /**
     * Describes the session internal ID.
     */
    ID: String;
    /**
     * Describes the session lifetime (default: 3600 seconds).
     */
    lifeTime: Number;
    /**
     * Describes the user session storage.
     */
    storage: KeyValueStorage;
    /**
     * Describes the session user.
     */
    user: User;
    /**
     * Check if the session belongs to the group.
     * @param Describes a group name
     * @returns Returns `true` if the user belongs to the group, `false` otherwise.
     */
    belongsTo(group: String): Boolean;
    /**
     * Check if the session belongs to the group.
     * @param Describes a group object
     * @returns Returns `true` if the user belongs to the group, `false` otherwise.
     */
    belongsTo(group: Group): Boolean;
    /**
     * Check if the current session belongs to the group.
     * @returns `true` if the session belongs to the group, throws an error otherwise.
     * @throws An error if the session does not belongs to the group
     */
    checkPermission(group: String): Boolean;
    /**
     * Check if the current session belongs to the group.
     * @returns `true` if the session belongs to the group, throws an error otherwise.
     * @throws An error if the session does not belongs to the group
     */
    checkPermission(group: Group): Boolean;
    /**
     * Expires the user session.
     */
    forceExpire(): void;
    /**
     * Temporarily promotes the current session into the group.
     */
    promoteWith(group: Group): Number;
    /**
     * Temporarily promotes the current session into the group.
     */
    promoteWith(group: String): Number;
    /**
     * Stops the temporary promotion set for the current session using the `promoteWith()` method.
     */
    unPromote(token: Number): void;
}