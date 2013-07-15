TemplateJS
==========

<b>TemplateJS</b> is a library to have control over JSON-data that get inserted into html or get further processed. The lib is made for API-processes and visualization of JSON-data in various ways. 

<h3>Notation-Examples:</h3>

<p><b>Objects</b> -> [{KEY_NAME : '...'},{KEY_NAME : '...'},...]</p>

Assume that <b>objects</b> have got an KEY_NAME, the notation would be:

var template = "{KEY_NAME}";

<p>and a HTML-notation would be:</p>

var template = "&lt;p&gt;{KEY_NAME}&lt;/p&gt;";

<p>-------------------------------------------------------------------------------------</p>

When the objects have got nested keys like this:

<p><b>Objects</b> -> [{A : { B: { C: 123}}},...]</p>

you can write templates in this way:

var template = "{A}{B}{C}";

<p>-------------------------------------------------------------------------------------</p>

Another case can be that <b>objects</b> have got more than one value to extract like this:

<p><b>Objects</b> -> [{KEY : '...', KEY2 : '...' },{KEY : '...', KEY2 : '...' },...]</p>

In this case you can write following template:

var template = "{KEY} | {KEY2}";

<h3>Methods</h3>

The lib offers following methods:

<b>transformTemplate</b> takes following params:

@param objs is an array that contains JSON-objects 

@param template it an string that contains the notations, you can see at the Notation-Examples above.

<p><b>transformTemplate( in objs:Array, in template:String ) : Array</b></p>

<b>insertTemplate</b> takes following params:

@param objs is an array that contains JSON-objects 

@param template is an string that contains the notations, you can see at the Notation-Examples above.

@param tagDesc is an string that identifies the HTML-tag or tags that the user wants the template to be inserted into.

<p><b>insertTemplate( in a:Array, in template:String, out tagDesc:String )</b></p>

