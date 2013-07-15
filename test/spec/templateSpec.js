describe("TemplateJS-Tests", function() {
	
  var instance = new TemplateJS();
  var data;
  var output = document.getElementById('output');
  
  describe("testing geometry template", function() {
		
	  it('get geometry objects', function() {
		data = testObjs.shift();
	  });
	  
	  var template = "<p>The {name} has got the position: | <b style='color:green'>{dim}{x}px</b> | <b style='color:red'>{dim}{y}px</b> | <b style='color:yellow'>{dim}{z}px</b></p>";
	  var result;
	  
	  it("should be equal with original data", function() {
		
		result = instance.transformTemplate(data,template);
		
		//console.log('result of geometry template: ',result);
		
		expect(result.length).toEqual(data.length);
		
	  });

	  it("result should not contain neither curls nor pipes", function() {
		
		result = instance.transformTemplate(data,template).join('');
		
		expect(result.indexOf('|')).toEqual(-1);
		expect(result.indexOf('{')).toEqual(-1);
		expect(result.indexOf('}')).toEqual(-1);
		
	  });
	  
	  it("html should contain as much signs as previous result", function() {
		
		instance.insertTemplate(data,template,'#output');
		/*console.log('output.innerHTML: ',output.innerHTML);
		console.log('output.innerHTML.length: ',output.innerHTML.length);
		console.log('result: ',result);
		console.log('result.length: ',result.length);*/
		
		expect(output.innerHTML.length).toEqual(result.length);
		output.innerHTML = '';
		
	  });
	  
  });
  
  
  describe("testing person template", function() {
	
	  it('get person objects', function() {
		data = testObjs.shift();
	  });
	  
	  var template = "<p>{name} lives at |{address}{street} in the city |{address}{city} of the country |{address}{country}</p>";
	  
	  it("should be equal with original data", function() {
		
		var result = instance.transformTemplate(data,template);
		
		//console.log('result of person template: ',result);
		
		expect(result.length).toEqual(data.length);
		
	  });

  });
  
  
  describe("testing deepNestedObj template", function() {
	
	  it('get deepNestedObj object', function() {
		data = testObjs.shift();
	  });
	  
	  var template = "{a}{b}{c}{d}{e}{f}{g}{h}{i}{j}{k}{l}{m}{n}{o}{p}{q}{r}{s}{t}{u}{v}{w}{x}{y}{z}";
	  var valueToParse = 'Hello World';
	  
	  it(("should parse "+valueToParse+" out of deep nested objects"), function() {
		
		var result = instance.transformTemplate(data,template).join('');
		
		//console.log('result of deepNestedObj template: ',result);
		
		expect(result).toEqual(valueToParse);
		
	  });

  });
  
});