///<reference path="./directoryentrysync.d.ts" />
	
	interface EntrySync {
		/**
		*File system of the entry
		*/
		filesystem: FileSystemSync;
		/**
		*Absolute path of the entry
		*/
		fullPath: String;
		/**
		*True if the EntrySync is a directory
		*/
		isDirectory: Boolean;
		/**
		*True if the EntrySync is a file
		*/
		isFile: Boolean;
		/**
		*Name of the entry, excluding the path leading to it
		*/
		name: String;
		/**
		*copies the EntrySync object to a different location in the filesystem
		*/
		copyTo(dest: DirectoryEntrySync, name?: String) : EntrySync;
		/**
		*returns a Metadata object providing information about the state of a file or directory
		*/
		getMetadata() : Object;
		/**
		*returns the parent DirectoryEntrySync of the EntrySync to which it is applied
		*/
		getParent() : DirectoryEntrySync;
		/**
		*moves the EntrySync object to a different location in the filesystem
		*/
		moveTo(dest: DirectoryEntrySync, name?: String) : EntrySync;
		/**
		*deletes the entry (file or directory) from the filesystem
		*/
		remove() : void;
		/**
		*returns a URL that can be used to identify the EntrySync
		*/
		toURL() : String;
	}