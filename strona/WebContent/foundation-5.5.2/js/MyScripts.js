/**
 * 
 */
function getName(){
	var name = null;
	name = prompt('Enter your name: ');
	console.log(name);
	if (name === "" || null)
		getName();
	retun name;
}

function getSurname(){
	var surname = null;
	surname = prompt("Enter your surname: ");
	console.log(surname);
	if (surname === "" || null)
		getSurame();
	retun surname;
}

function getAge(){
	var age = null;
	age = prompt("Enter your surname: ");
	console.log(age);
	if (age === null || typeof age === "number")
		getAge();
	retun age;
}

function _man(name, surname, age){
	this.name=name;
	this.surnmae=surname;
	this.age=age;
	
	
	function pzedstawSie(){
		alert(this.name + " " + this.surname + " " + this.age);
	}
}



























