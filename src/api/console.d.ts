/**
 * Writes message to the log file and the debugger's console.
 * 
 * ```javascript
 * console.log('Hello World!');
 * // Hello World!
 * console.log("I'm %d years old.", userAge);
 * // I'm 20 years old.
 * console.log('My first car was a', car, '. The object is: ', someObject);
 * // My first car was a Toyota. The object is: { name: 'Toyota' }
 * console.log({ str: 'Some text', id: 5 });
 * // { str: 'Some text', id: 5 }
 * ```
 */
interface WAKConsole {
    /**
     * Get logged messages.
     * 
     * ```javascript
     * var lastLogs = console.content.join('\n');
     * ```
     */
    content: Array<String>;
    /**
     * @param message Message to log. Can use the following substitution strings: %o, %s, %d, %i, %f.
     * @param subst Substitution value
     */
    error(message: String, ...subst: any[]): void;
    error(message: Object): void;
    /**
     * @param message Message to log. Can use the following substitution strings: %o, %s, %d, %i, %f.
     * @param subst Substitution value
     */
    log(message: String, ...subst: any[]): void;
    log(message: Object): void;
    /**
     * @param message Message to log. Can use the following substitution strings: %o, %s, %d, %i, %f.
     * @param subst Substitution value
     */
    warn(message: String, ...subst: any[]): void;
    warn(message: Object): void;
}
