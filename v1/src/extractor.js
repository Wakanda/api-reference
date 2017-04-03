function cleanup(){
		Array.prototype.forEach.call(document.querySelectorAll(".revision_min_p_tire"), function(element){
			element.remove();
		});
}

function parseDefinition(def){
	def = def.trim();
	var response 		= {};
	response.string = def;
	var params 			= [];
	var regRetType 		= /^(\S+)/;
	var regChunkItem    = /(\w+)/g;
	var regChunk 		= /[\(,]\s*[^\],]+]?/g;
	var optional 		= false;
	
	/*
	 * Return Type
	 */
	var retType 		= regRetType.exec(def);
	
	response.params     = params;
	//if(!retType || !retType.length) debugger;
	response.returnType = retType[1];
	
	/*
	 * Chunks
	 */
	
	var chunks = def.match(regChunk);
	
	/*
	 * Params
	 */
 	 if(chunks){
		  for(var i = 0 ; i < chunks.length ; ++i){
		
			var chunk = chunks[i];
			
			if(!optional && chunk.lastIndexOf(']') > -1 ){
				optional = true;
			}
			
			chunk = chunk.replace(/[\(\[\]]/g, '').trim();		
			
			var param = {};
			var result;
			
			param.types = [];
			
			while( ( result = regChunkItem.exec(chunk) ) !== null ){
				param.types.push(result[1]);
			}
			if(param.types.length === 0) break;
			var paramName = param.types.pop();		
			param.name = paramName;
			param.optional 	= optional;
			
			params.push(param);
			
		}
	  }
	
	/*
	console.log(response.string);
	console.log(response);
	*/
	return response;
}

cleanup();

var APIs = [];
var elements = document.querySelectorAll(".Syntax_Cmd_Wkd");

for(var i = 0 ; i < elements.length ; ++i){
	var element = elements[i];
	var api  = {};
	var step = 0;
	var children = element.children;
	
	for(var j = 0 ; j < children.length ; ++j){
		var p = children[j];
		switch(step){
			case 0:
				var tmp = p.innerText.replace(/[ \t\r\n ]*/g,"");
				if( p.innerHTML.match('ak_700.png') ){
					api.kind = "method";
					api.name = tmp.split("(")[0].trim();
					api.definitions = [];
				} else {
					api.kind = "property";
					tmp = tmp.split("-");
					api.name = tmp[0].trim();
					try{
						api.type = tmp[1].trim();
					}catch(e){
						//known issue, example : http://doc.wakanda.org/home2.en.html#/XMLHttpRequest/XMLHttpRequest-Instances.201-867301.en.html
						api.type = "???";
					}
					
				}				
				step++;
				break;
			case 1:
			case 2:
				step++;
				break;
			case 3:
				api.description = p.innerText;
				step++;
				break;
			case 4:
				var definition = parseDefinition(p.innerText);
				
				api.definitions.push(definition);
				break;
		}
	};
	
	APIs.push(api);			
};

function addProperty(lines, api){
	//console.log(api.name + ": " + api.type + ";");
	lines.push("/**");
	lines.push("*" + api.description.replace(/[\r\n]/g,''));
	lines.push("*/");
	lines.push(api.name + ": " + api.type + ";");
};

function addMethod(api, lines, definition){
	//TODO: Handle multiple return types
	
	//if(api.name==="BinaryStream") debugger;
	
	var paramsCount = definition.params.length;
	var counters	= [];
	var inc			= true;
	
	for(var i = 0 ; i < paramsCount ; ++i){
		counters[i] = 0;
	}
	
	while(inc){
		var types = [];
		
		inc   = false;
		
		for(var i = paramsCount-1 ; i >= 0 ; --i){
			types.unshift(definition.params[i].types[ counters[i] ]);
			if(!inc && counters[i] < definition.params[i].types.length - 1 ){
				counters[i]++;
				inc = true;
				for(var j = i+1 ; j < paramsCount ; ++j){
					counters[j] = 0;
				}
			}			
		}
		
		var str = api.name +"(";
		var strOptional;
		var chunk = "";
		for(var i = 0 ; i < paramsCount ; ++i){
			strOptional = definition.params[i].optional ? "?" : "";
			//if(typeof definition.params[i].name == "undefined") debugger;
			chunk = definition.params[i].name + strOptional + ": " + types[i];
			chunk+=(i==paramsCount-1)?"":", ";
            str+=chunk;
		}
		
		str+= ") : " + definition.returnType + ";";
		lines.push("/**");
		lines.push("*" + api.description.replace(/[\r\n]/g,''));
		lines.push("*/");
		lines.push(str);
	}
};

var interfaceName = document.querySelector("#ChapterTitle").innerText.trim();

var defHeader 	= 'interface ' + interfaceName + ' {\r\n\t';
var defBody		= '';
var defFooter 	= '}';
var lines		= [];

APIs.forEach(function(api){
	//console.log('*****************');
	//console.log(api.name);
	switch(api.kind){
		case "method":
			api.definitions.forEach(function(definition){
				addMethod(api, lines, definition);
			});
			break;
		case "property":
			addProperty(lines, api);
			break;
	}
	//console.log('*****************');
});
clear();
var output = "interface " + interfaceName + " {\r\n";
output+=lines.join('\r\n\t');
output+="\r\n}";