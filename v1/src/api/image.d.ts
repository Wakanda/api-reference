
	interface Image {
		/**
		*Height of the image
		*/
		height: Number;
		/**
		*Size of the image (expressed in bytes)
		*/
		length: Number;
		/**
		*Metadata associated with the image
		*/
		meta: Object;
		/**
		*Size of the image (expressed in bytes)
		*/
		size: Number;
		/**
		*Width of the image (expressed in pixels)
		*/
		width: Number;
		/**
		*stores locally the Image object in a file
		*/
		save(file: String, type?: String) : void;
		/**
		*stores locally the Image object in a file
		*/
		save(file: File, type?: String) : void;
		/**
		*modifies metadata found in the Image object
		*/
		saveMeta(meta: Object) : void;
		/**
		*associate a file path to an Image object
		*/
		setPath(file: File) : void;
		/**
		*associate a file path to an Image object
		*/
		setPath(file: String) : void;
		/**
		*returns a thumbnail of the source image
		*/
		thumbnail(width: Number, height: Number, mode?: Number) : Image;
	}