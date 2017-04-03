///<reference path="./filesystemsync.d.ts" />
///<reference path="./folder.d.ts" />
///<reference path="./buffer.d.ts" />
	
	interface File {
		/**
		*constructor of the File type objects
		*/
		new(absolutePath: String) : File;
		/**
		*constructor of the File type objects
		*/
		new(path: Folder, fileName: String) : File;
		/**
		*constructor of the File type objects
		*/
		new(path: FileSystemSync, fileName: String) : File;
		/**
		*Creation date for the file
		*/
		creationDate: Date;
		/**
		*True if the file exists at the defined path. Otherwise, it returns false.
		*/
		exists: Boolean;
		/**
		*File extension
		*/
		extension: String;
		/**
		*FileSystem of the object
		*/
		filesystem: FileSystemSync;
		/**
		*Last modification date for the file
		*/
		//lastModifiedDate: Date;
		/**
		*Name of the file with the extension and without the path
		*/
		//name: String;
		/**
		*Name of the file without the extension
		*/
		nameNoExt: String;
		/**
		*Parent folder of the file
		*/
		parent: Folder;
		/**
		*Full path of the file
		*/
		path: String;
		/**
		*True if the file is read only. Otherwise, it returns false.
		*/
		readOnly: Boolean;
		/**
		*Size of the file in bytes
		*/
		size: number;
		/**
		*Media type of the Blob expressed as MIME or "" if unknown
		*/
		type: string;
		/**
		*True if the file is visible. Otherwise, it returns false.
		*/
		visible: Boolean;
		/**
		*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
		*/
		copyTo(destination: File, overwrite?: Boolean) : void;
		/**
		*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
		*/
		copyTo(destination: File, overwrite?: String) : void;
		/**
		*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
		*/
		copyTo(destination: String, overwrite?: Boolean) : void;
		/**
		*copies the Blob referenced in the BLOB object (the source object) into the specified destination file
		*/
		copyTo(destination: String, overwrite?: String) : void;
		/**
		*stores the file referenced in the File on disk
		*/
		create() : Boolean;
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
		*class method can be used with the File( ) constructor to know if path corresponds to a file on disk
		*/
		isFile(path: String) : Boolean;
		/**
		*moves the file referenced in the File object (the source object) to the specified destination
		*/
		moveTo(destination: File, overwrite?: Boolean) : void;
		/**
		*moves the file referenced in the File object (the source object) to the specified destination
		*/
		moveTo(destination: File, overwrite?: String) : void;
		/**
		*moves the file referenced in the File object (the source object) to the specified destination
		*/
		moveTo(destination: String, overwrite?: Boolean) : void;
		/**
		*moves the file referenced in the File object (the source object) to the specified destination
		*/
		moveTo(destination: String, overwrite?: String) : void;
		/**
		*puts the file pointer on the next file within an iteration of files
		*/
		next() : Boolean;
		/**
		*removes the file or folder referenced in the File or Folder object from the storage volume
		*/
		remove() : Boolean;
		/**
		*allows you to rename a file on disk referenced in the File object
		*/
		setName(newName: String) : Boolean;
		/**
		*creates a new Blob object by referencing the contents of the bytes of the Blob to which it is applied, from start to end
		*/
		slice(start: Number, end: Number, mimeType?: String) : Blob;
		/**
		*returns a Buffer object containing a copy of the Blob bytes
		*/
		toBuffer() : Buffer;
		/**
		*get a string representation of the Blob contents
		*/
		toString(stringFormat?: String) : String;
		/**
		*checks the validity of the pointer to the current File object within an iteration of files
		*/
		valid() : Boolean;
	}