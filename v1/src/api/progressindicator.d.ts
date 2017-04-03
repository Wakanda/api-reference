
	interface ProgressIndicator {
		/**
		*stops the current session of the ProgressIndicator object
		*/
		endSession() : void;
		/**
		*automatically increments the value of the current element for the ProgressIndicator object
		*/
		incValue() : Boolean;
		/**
		*dynamically modifies the maximum number of elements whose processing must be shown by the ProgressIndicator object
		*/
		setMax(numElements: Number) : void;
		/**
		*dynamically modifies the name of the execution session for the ProgressIndicator object
		*/
		setMessage(sessionName: String) : void;
		/**
		*sets a current element value for the ProgressIndicator object
		*/
		setValue(curValue: Number) : Boolean;
		/**
		*interrupts the current execution session of the ProgressIndicator object
		*/
		stop() : void;
		/**
		*creates and manages the display of a second ProgressIndicator object in the main ProgressIndicator session being executed
		*/
		subSession(numElements: Number, sessionName: String, stoppable?: Boolean) : void;
		/**
		*creates and manages the display of a second ProgressIndicator object in the main ProgressIndicator session being executed
		*/
		subSession(numElements: Number, sessionName: String, stoppable?: String) : void;
	}