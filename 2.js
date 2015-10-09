//2.js

/*
methods are member functions of an object. A method allows you to operate on an
object */
var mack = [];
mack.push("Mack");

// "Object" can
var rabbit = {};
rabbit.speak = function (line) {
  console.log("The rabbit says '" + line + "'");
};
rabbit.speak("I'm alive."); //The rabbit says 'I'm alive.'

//objects
//Values of the type object are arbitrary collections of properties
var person = {
  name: 'Asif',
  city: 'Bangalore',
  fav_bands: ['Tool', 'A perfect circle' ]
};
person.interests = ['Reading', 'Games', 'Travelling'];
//objects are mutable
var object1 = { value : 10};
var object2 = object1 ;
var object3 = { value : 10};
console.log(object1 == object2); //true
console.log(object1 == object3); //false
object1 = null;
console.log(object1); //null
console.log(object2); //Object { value=10}

// Objects can contain methods.
var my_obj = {
  myFunc: function(){
    return "Hello world!";
  }
};
my_obj.myFunc(); //  "Hello world!"

// When functions attached to an object are called, they can access the object
// they're attached to using the `this` keyword.
my_obj = {
  my_string: "Hello world!",
  myFunc: function(){
    return this.my_string;
  }
};
my_obj.myFunc(); //  "Hello world!"

//since the context of object is important when a call is made to a function
//inside it the below doesnt work
var my_func = my_obj.myFunc;
my_func(); // undefined

//however we can assign a function to an existing object and get access to its
//properties using 'this' keyword
var myOtherFunc = function(){
  return this.my_string.toUpperCase();
}
my_obj.myOtherFunc = myOtherFunc;
my_obj.myOtherFunc(); //  "HELLO WORLD!"

//another way of creating an object is using constructor
var MyConstructor = function(){
  this.my_number = 5;
}
var my_new_obj = new MyConstructor(); // {myNumber: 5}
my_new_obj.myNumber; // 5

//some interesting array methods
console.log([1,2,3,2,1].indexOf(2)); // 1
console.log([1,2,3,2,1].lastIndexOf(2)); // 3
console.log([0,1,2,3,4].slice(2,4)); // [2,3]
console.log([0,1,2,3,4].slice(2)); // [2,3,4]
//more
console.log("okay\n".trim()); // okay
var string = "abc";
console.log(string.length); // 3
console.log(string.charAt(0)); // a
console.log(string[1]); // b
//math
Math.max(10, -100);
Math.min(56, 42);
Math.sqrt(49);
Math.random();
Math.floor();

//global object
var my_var = 10;
console.log("my_var" in window); // true
console.log(window.my_var); // 10

//implementing our own array methods
function remove(array,index){
  return array.slice(0,index)
	  .concat(array.slice(index+1));
}
console.log(remove(["a","b","c","d","e"],2)); // ["a","b","d","e"]

function forEach(array, action){
  for(var i = 0;i < array.length; i++){
    action(array[i]);
	}
}
forEach(["Wampeter","Foma","Granfalloon"], console.log);//  Wampeter  Foma  Granfalloon
//similarly filter, map, reduce etc

//understanding this keyword better
//example 1
function speak (line) {
  console.log (" The " + this.type + " rabbit says"+"'"+ line + " ' ") ;
}
var white_rabbit = { type : "white" , speak : speak };
var fat_rabbit = { type : "fat", speak : speak };

white_rabbit.speak("Oh my ears and whiskers , " + " how late it's getting !") ;
//  The white rabbit says ' Oh my ears and whiskers , how late it's getting ! '
fat_rabbit.speak("I could sure use a carrot right now.") ;
//  The fat rabbit says 'I could sure use a carrot right now.'
speak.call(fat_rabbit, 'hahahah');
// The fat rabbit says'hahahah '
speak.call({type:'old'}, 'Oh my god!');
// The old rabbit says'Oh my god!'
speak.apply(fat_rabbit, ['Oh my god!']);

//example2
function add(a, b){
  return a + b;
}
assert(add.call(this, 1, 2) == 3, ".call() takes individual arguments");
assert(add.apply(this, [1, 2]) == 3, ".apply() takes an array of arguments");

//bind can be used in two ways, first is to bind to an obj
var another_rabbit = speak.bind(fat_rabbit);
typeof another_rabbit;
another_rabbit('hahahah');
//or bind to function
var product = function(a, b){
	return a * b;
};
var doubler = product.bind(this, 2);
doubler(8); // 16

// prototypes
// All objects in JavaScript are descended from Object;
// all objects inherit methods and properties from Object.prototype
// example 1
function Ninja(){}
Ninja.prototype.swingSword = function(){
  return true;
};
var ninjaA = Ninja();
assert( !ninjaA, "Is undefined, not an instance of Ninja." );  //Pass
var ninjaB = new Ninja();
assert( ninjaB.swingSword(), "Method exists and is callable." ); //Pass

//example 2
function Ninja(){
  this.swingSword = function(){
    return true;
  };
}
// Should return false, but will be overridden
Ninja.prototype.swingSword = function(){
  return false;
};
var ninja = new Ninja();
assert( ninja.swingSword(), "Calling the instance method, not the prototype method." ); //Pass
//why did it pass?
//If instance method is not found, prototype methods are checked by the interpreter
//example 3
my_obj = {
  my_string: "Hello world!"
}
my_obj.prototype = {
  meaning_of_life: 42,
  myFunc: function(){
	  return this.my_string.toLowerCase()
	}
};
var first_obj = my_obj;
first_obj.prototype.meaning_of_life;

// Built-in types like strings and numbers also have constructors that create
// equivalent wrapper objects.
var my_number = 12;
var my_number_obj = new Number(12);
my_number = my_number_obj; //  true
typeof my_number; //  'number'
typeof my_number_obj; //  'object'
my_number === my_number_obj; //  false

//using which we can add methods to a string, for example
String.prototype.firstCharacter = function(){
  return this.charAt(0);
}
"abc".firstCharacter(); // "a"
//prototypes are used in polyfilling

// Trivia: JS has hoisted objects and native objects.
// Native objects are Date, String, Number.
// What are hoisted objects?
