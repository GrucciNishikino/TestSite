//prompt name
window.onload = function() {
	var name = prompt("What is your username?");

	if (name != null) {
		
	} else {
		var para = document.createElement("p");
		var node = document.createTextNode("This is new.");
		para.appendChild(node);

		var element = document.getElementById("errorbox");
		element.appendChild(para);
	};
}
var Hero = function(name,type){
	this.my_name=name;
	this.my_type=type;
};
var hero = new Hero();