///<reference path="./directoryentrysync.d.ts" />


	interface FileSystemSync {
		/**
		*Name of the file system
		*/
		name: String;
		/**
		*Root directory of the file system
		*/
		root: DirectoryEntrySync;
	}