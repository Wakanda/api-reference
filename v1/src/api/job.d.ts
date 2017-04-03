
	interface Job {
		/**
		*Unique ID of the job on the server
		*/
		id: String;
		/**
		*logs the messageInfo event for the job
		*/
		log(messageInfo: String) : void;
		/**
		*logs the messageInfo event for the job and terminates the job
		*/
		terminate(messageInfo: String) : void;
	}