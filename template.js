/* made by blauharley (JS Classes)
*  This little library is free to be used and is for api-calls that returns data in JSON-format.
*  this library should be used to insert data into html-structures (templates). 
*/

function TemplateJS(){}

(function(){
    /*
	*  returns keys as elements of an array so that you can reach certain values through iterating
	*/
	function getProperties(str){
	  if(Array.prototype.map){
		return str.match(/[{]\w+[}]/g).map(function(pro){
		   pro = pro.slice(1,pro.length-1); // replace first and last curls
		   return pro;
		});
	  }
	  else{ // IE
		var array = str.match(/[{]\w+[}]/g);
		for(var i=0;i < array.length; i++){
		  array[i] = array[i].slice(1,array[i].length-1);
		}
		return array;
	  }
	}
    /*
	* returns whole key-names with curls that get replaced with certain values
	*/
	function getPropertiesWithCurls(str){
	  var newStr = '';
	  var strArray = str.split('').slice(str.indexOf('{'),str.length);
	  for(var i=0;i < strArray.length; i++){
	  
		newStr += strArray[i];
		
		if(strArray[i] === '}' && strArray[i+1] !== '{' )
			break;
		
	  }
	  return newStr;
	}
    /*
	* returns whole key-names with curls that get replaced with certain values
	*/
	function replaceProperties(objs,template){

	  var proArray = getProperties(template); // get keys of an obj to reach the values
	  var stringToReplace = getPropertiesWithCurls(template); // to signs that get replaced with values of objs
	  
	  var templateArray = [];
	  
	  for(var i=0;i < objs.length; i++){
	  
		  var val = objs[i];
		  var r = 0; 
		  
		  while(r < proArray.length && val[ proArray[r] ]){ // go through object until value
			val = val[ proArray[r++] ]; 
		  }
		  
		  var newTemplate = template.replace(stringToReplace, val);
		  templateArray.push(newTemplate);
	  }
	  return templateArray;
	}
	// [['1','4','7'],['2','5','8'],['3','6','9']] -> ['123', '456', '789']
	function resort2DimArray(array){

	  var innerArray = array[0];
	  var inlength = innerArray.length;
	  var outlength = array.length;
	  
	  for(var i=0; i < inlength; i++){
		for(var o=1; o < outlength; o++){
		  innerArray[i] += array[o][i];
		}
		
	  }
	  
	  return innerArray;
	  
	}
    /*
    * returns an array that contains replaced keys with values
	* @param objects is an array with JSON-objects [{...},...]
    * @param template is a string with curls "<p>{key}</p>"
    */
	TemplateJS.prototype.transformTemplate = function(objects, template){
	  
	  if(objects.constructor === Array){
	  
		  if(template.indexOf('|') === -1){
			return replaceProperties(objects, template);
		  }
		  else{
			
			var temArray = template.split(/[|]/g); 
			var resultArray = [];
			
			for(var i=0;i < temArray.length; i++){
			  var result = replaceProperties(objects, temArray[i]);
			  
			  resultArray.push(result);
			}
			
			
			return resort2DimArray(resultArray);
		  }
	  
	  }
	  
	};
    /* 
    * @param objects is an array with JSON-objects [{...},...]
    * @param template is a string with curls "<p>{key}</p>"
    * @param tag_desc is the identifier of the tag and can be tag-name, id, class or altogether
    */
	TemplateJS.prototype.insertTemplate = function(objects, template, tag_desc){
	  
	  var tagElements = document.querySelectorAll(tag_desc);
	  
	  if(tagElements.length){
	  
		var result = TemplateJS.prototype.transformTemplate(objects,template).join('');
		
		for(var tag=0; tag < tagElements.length; tag++){
		  tagElements[tag].innerHTML += result;
		}
		
	  }
	  
	};

})();
