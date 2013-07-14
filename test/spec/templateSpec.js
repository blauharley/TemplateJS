describe("insert data into template", function() {
	
  var instance = new TemplateJS();
  var data;
  var output = document.getElementById('output');
  
  describe("testing geometry template", function() {
	
	  var template = "<p>The {name} has got the position: | <b style='color:green'>{dim}{x}px</b> | <b style='color:red'>{dim}{y}px</b> | <b style='color:yellow'>{dim}{z}px</b></p>";
	  var result;
	  
	  it("should be equal with original data", function() {
		
		result = instance.transformTemplate(data,template);
		console.log('result of geometry template: ',result);
		
		expect(result.length).toEqual(data.length);
		
	  });
		
	  it("result should not contain any curls or pipes", function() {
		
		result = instance.transformTemplate(data,template).join('');
		
		expect(result.indexOf('|')).toEqual(-1);
		expect(result.indexOf('{')).toEqual(-1);
		expect(result.indexOf('}')).toEqual(-1);
		
	  });
	  
	  it("html should contain as much signs as previous result", function() {
		
		instance.insertTemplate(data,template,'#output');
		console.log('output.innerHTML: ',output.innerHTML);
		console.log('output.innerHTML.length: ',output.innerHTML.length);
		console.log('result: ',result);
		console.log('result.length: ',result.length);
		
		expect(output.innerHTML.length).toEqual(result.length);
		output.innerHTML = '';
		
	  });
	  
  });
  
  
  
  describe("testing person template", function() {
	
	  data = testObjs.shift(); // get person template
	  
	  var template = "<p>{name} lives at |{address}{street} in the city |{address}{city} of the country |{address}{country}</p>";
	  
	  it("should be equal with original data", function() {
		
		var result = instance.transformTemplate(data,template);
		expect(result.length).toEqual(data.length);
		
	  });

  });
  
});