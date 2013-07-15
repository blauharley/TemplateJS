var geometryObjs = [
	{ dim: { x: 25, y:14, z: 3}, name: 'circle'},
	{ dim: { x: 19, y:17, z: 8}, name: 'triangle'},
	{ dim: { x: 7, y:44, z: 12}, name: 'quad'},
	{ dim: { x: 13, y:63, z: 67}, name: 'circle'},
	{ dim: { x: 5, y:23, z: -2}, name: 'rectangle'}
];

var personObjs = [
	{ name: 'Sherlock Holmes', address: { street: 'baker street 5', city: 'London', country: 'England' } },
	{ name: 'Dschingis Khan', address: { street: 'none', city: 'Burchan Chaldun', country: 'Mongolia' } },
	{ name: 'Arnold Alois Schwarzenegger', address: { street: 'Linakstraße 9', city: 'Thal', country: 'Austria' } }
];

var deepNestedObj = [];

(function(){
	
	var letter = 'a';
	var stopLetter = 'z';
	var nestObj = '';
	var valueToInsert = 'Hello World';
	
	var obj = {};

	while(letter.charCodeAt() <= stopLetter.charCodeAt()){
		
		nestObj += '[\'' + letter + '\']';
		
		if(letter === 'z'){
			eval(('obj' + nestObj + '=\''+valueToInsert+'\''));
		}
		else{
			eval(('obj' + nestObj + '={};'));
		}
		
		letter = String.fromCharCode(letter.charCodeAt() + 1);
		
	}
	
	deepNestedObj.push(obj);
	
})();

var testObjs = [];
testObjs.push(geometryObjs);
testObjs.push(personObjs);
testObjs.push(deepNestedObj);