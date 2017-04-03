
interface Mutex {
    /**
     * Mutex allows to control code execution order and to prevent conflicts in a multi-thread application.
     * It provides a way to pause execution in one thread until a condition is met in another.
     * 
     * ```javascript
     * // Creates/gets the "writeMutex" mutex available in all threads
     * var writeMutex = Mutex('writeMutex');
     * ```
     * 
     * @param key Describes the global mutex key
     */
    new(key: String): WAKMutexProxy;
}

interface WAKMutexProxy {
    /**
     * Locks the mutex or wait until it has been released to lock it; the thread execution is paused until then.
     * 
     * ```javascript
     * var writeMutex = Mutex('writeMutex');
     * writeMutex.lock();
     * ```
     * 
     * @returns Returns `true` if the mutex is locked
     */
    lock(): Boolean;
    /**
     * Tries to lock the mutex or returns false if it is already locked. The thread execution is not paused.
     * 
     * ```javascript
     * var writeMutex = Mutex('writeMutex');
     * writeMutex.tryLock();
     * ```
     * 
     * @returns Returns `true` if the mutex is locked, `false` otherwise
     */
    tryLock(): Boolean;
    /**
     * Unlock the mutex. The mutex must be lock in the same thread to be unlock.
     * 
     * ```javascript
     * var writeMutex = Mutex('writeMutex');
     * writeMutex.lock();
     * writeMutex.unlock();
     * ```
     * 
     * @returns Returns `true` if the mutex is unlocked, `false` otherwise
     */
    unlock(): Boolean;
}