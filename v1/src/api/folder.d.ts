
	interface Folder {
		/**
		*creates a new object of type Folder
		*/
		new(path: String) : Folder;
		/**
		*Creation date for the folder
		*/
		creationDate: Date;
		/**
		*True if the folder exists at the defined path. Otherwise, it returns false.
		*/
		exists: Boolean;
		/**
		*Folder extension
		*/
		extension: String;
		/**
		*Array of File objects
		*/
		files: Array<File>;
		/**
		*FileSystem of the object
		*/
		filesystem: FileSystemSync;
		/**
		*First file found in the folder
		*/
		firstFile: File;
		/**
		*First folder (i.e., subfolder) in the folder
		*/
		firstFolder: Folder;
		/**
		*Array of Folder objects
		*/
		folders: Array<Folder>;
		/**
		*Last modification date for the folder
		*/
		modificationDate: Date;
		/**
		*Name of the folder without the path
		*/
		name: String;
		/**
		*Name of the folder without the extension
		*/
		nameNoExt: String;
		/**
		*Parent folder of the folder
		*/
		parent: Folder;
		/**
		*Full path of the folder
		*/
		path: String;
		/**
		*True if the folder is visible. Otherwise, it returns false.
		*/
		visible: Boolean;
		/**
		*creates the folder referenced in the Folder object on disk
		*/
		create() : Boolean;		
		/**
		*executes the callbackFn function once for each file present at the first level of the Folder object
		*/
		forEachFile(callbackFn: (file: File)=>void, thisArg?: Object) : void;
		/**
		*executes the callbackFn function once for each subfolder present at the first level of the Folder object
		*/
		forEachFolder(callbackFn: (folder: Folder)=>void, thisArg?: Object) : void;
		/**
		*returns the size of the free space (expressed in bytes) available on the volume where the File or Folder object is stored
		*/
		getFreeSpace(quotas?: Boolean) : Number;
		/**
		*returns the size of the free space (expressed in bytes) available on the volume where the File or Folder object is stored
		*/
		getFreeSpace(quotas?: String) : Number;
		/**
		*returns the absolute URL of the File or Folder object
		*/
		getURL(encoding?: Boolean) : String;
		/**
		*returns the absolute URL of the File or Folder object
		*/
		getURL(encoding?: String) : String;
		/**
		*returns the total size (expressed in bytes) of the volume where the File or Folder object is stored
		*/
		getVolumeSize() : Number;
		/**
		*class method can be used with the Folder( ) constructor to know if path corresponds to a folder on disk
		*/
		isFolder(path: String) : Boolean;
		/**
		*puts the folder pointer on the next subfolder in an iteration of subfolders
		*/
		next() : Boolean;
		/**
		*executes the callbackFn function once for each file or subfolder present in the Folder object
		*/
		parse(callbackFn: Function, thisArg?: Object) : void;
		/**
		*removes the file or folder referenced in the File or Folder object from the storage volume
		*/
		remove() : Boolean;
		/**
		*removes the contents of the folder referenced in the Folder object from the storage volume
		*/
		removeContent() : Boolean;
		/**
		*allows you to rename the folder referenced in the Folder object on disk
		*/
		setName(newName: String) : void;
		/**
		*checks the validity of the pointer to the current folder within an iteration of folders
		*/
		valid() : Boolean;
	}