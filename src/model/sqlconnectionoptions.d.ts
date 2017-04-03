/** 
   interface SQLConnectionOptions {
    /**
     * Address of the remote SQL server you want to connect to
     *
	hostname: string,
    /**
     * Port number of the SQL server
     *
    port: number,
    /**
     * User name required to login to the SQL server for opening an outside session
     *
    user: string, 
    /**
     * Password required to login to the SQL server for opening an outside session
     *
    password: string,
    /**
     * Name of the remote SQL database from which you want to replicate the catalog
     *
    database: string,
    /**
     *  (optional) custom name for the JavaScript configuration file to associate with the localName catalog
     *
    jsFile: string,
    /**
     *  true to open a secured connection to the SQL server, and false or omit the property to open a standard connection
     *
    ssl: boolean,
    /**
     * Kind of the remote SQL database. Currently, only "mysql" is supported
     *
    dbType: "mysql"
}
*/

