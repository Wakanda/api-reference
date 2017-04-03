interface ModelAttributeEvent {
	clientRefresh(event:ModelAttributeEventObject):any;
	init(event:ModelAttributeEventObject):any;
	load(event:ModelAttributeEventObject):any;
	remove(event:ModelAttributeEventObject):any;
	save(event:ModelAttributeEventObject):any;
	set(event:ModelAttributeEventObject):any;
	validate(event:ModelAttributeEventObject):any;
	validateremove(event:ModelAttributeEventObject):any;
}

interface ModelAttributeEventObject {
	
}