///<reference path="./attributeevent.d.ts" />

interface ModelDataClassAttribute {
    /**
	*(String attributes only) true if Wakanda automatically builds a list of possible values based on existing values
	*/
	autoComplete: Boolean;
	/**
	*(UUID attributes only) true if the attribute has the autogenerate property on
	*/
	autogenerate: Boolean;
	/**
	*(number attributes only) true if the attribute has the autosequence property on
	*/
	autosequence: Boolean;
	/**
	*Size in bytes below which the data of the BLOB attribute will be stored within entities (default=0)
	*/
	blob_switch_size: Number;
	/**
	*(Image and Blob attributes only) Client-side cache duration (seconds)
	*/
	cacheDuration: Number;
	/**
	*(relation attributes only) true to generate an array
	*/
	composition: Boolean;
	/**
	*Default format properties
	*/
	defaultFormat: Object;
	/**
	*(Number attributes only) Default value for the attribute
	*/
	defaultValue: Number;
	/**
	*Object containing events for the attribute
	*/
	events: ModelAttributeEvent;
	/**
	*(String attributes only) Length of the attribute value
	*/
	fixedLength: Number;
	/**
	*true if the attribute can be used to identify related entities
	*/
	identifying: Boolean;
	/**
	*Index kind of the attribute: "btree", "cluster", "keywords", "auto" or "objectPath"
	*/
	indexKind: String;
	/**
	*Attribute kind: "storage", "calculated", "alias", "relatedEntity", "relatedEntities", or "removed"
	*/
	kind: String;
	/**
	*Length limit of the entered text
	*/
	limiting_length: Number;
	/**
	*Previous name(s) for the attribute at the database level
	*/
	matchColumn: String;
	/**
	*(String attributes only) Maximum length allowed for the attribute
	*/
	maxLength: Number;
	/**
	*(Number attributes only) Maximum value for the attribute
	*/
	maxValue: Number;
	/**
	*(String attributes only) Minimum length allowed for the attribute
	*/
	minLength: Number;
	/**
	*(Number attributes only) Minimum value for the attribute
	*/
	minValue: Number;
	/**
	*true if the attribute contains multi-line values
	*/
	multiLine: Boolean;
	/**
	*true = attribute value cannot be null
	*/
	not_null: Boolean;
	/**
	*JavaScript accessor function to execute for evaluating a calculated attribute
	*/
	onGet: Function;
	/**
	*JavaScript function to call when a query uses the calculated attribute
	*/
	onQuery: Function;
	/**
	*JavaScript accessor function to execute for processing a value entered in a calculated attribute
	*/
	onSet: Function;
	/**
	*JavaScript function to call when a calculated attribute is sorted
	*/
	onSort: Function;
	/**
	*true to store BLOB data outside of the data file (default=false)
	*/
	outside_blob: Boolean;
	/**
	*Path for a related or an alias attribute
	*/
	path: String;
	/**
	*(String attributes only) RegEx pattern to control data entry
	*/
	pattern: String;
	/**
	*true if the attribute is the primary key
	*/
	primKey: Boolean;
	/**
	*Attribute is read-only (can only be set by the code)
	*/
	readOnly: Boolean;
	/**
	*(relation attributes only) true if the relation attribute uses the reverse path of an existing relation
	*/
	reversePath: Boolean;
	/**
	*"public" (default) or "publicOnServer"
	*/
	scope: String;
	/**
	*(Date attributes only) true if the date attribute stores only the "MM/DD/YYYY" format
	*/
	simpleDate: Boolean;
	/**
	*true if queries and sorts carried out in the data stored in the attribute do not take any style tags into account
	*/
	styled_text: Boolean;
	/**
	*Type of the attribute
	*/
	type: String;
	/**
	*true if values in the attribute must be unique
	*/
	unique: Boolean;
	/**
	*associate an event listener function with the attribute
	*/
	addEventListener(event: String, jsCode: Function) : void;
}

declare var Attribute : {
	new (name:String, kind:String, type:String , indexOrPath?:String, options?:Object): ModelDataClassAttribute;
}
