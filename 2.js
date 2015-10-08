//2.js

//methods
//Properties that contain functions are generally called methods of the value they belong to. As in, "toUpperCase is a method of a string which is a builtin".
var mack = [];
mack.push("Mack");
//when used on objects
var rabbit = {};
rabbit.speak = function (line) {
    console.log("The rabbit says '"+line+"'");
};
rabbit.speak("I'm alive."); //The rabbit says 'I'm alive.'

//objects
//Values of the type object are arbitrary collections of properties
var person = {
    name: 'Asif',
    city: 'Bangalore',
    fav_bands: { 'Tool', 'A perfect circle' }
}
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
var myObj = {
    myFunc: function(){
        return "Hello world!";
    }
};
myObj.myFunc(); //  "Hello world!"

// When functions attached to an object are called, they can access the object
// they're attached to using the `this` keyword.
myObj = {
    myString: "Hello world!",
    myFunc: function(){
        return this.myString;
    }
};
myObj.myFunc(); //  "Hello world!"

//since the context of object is important when a call is made to a function inside it the below doesnt work
var myFunc = myObj.myFunc;
myFunc(); // undefined

//however we can assign a function to an existing object and get access to its properties using 'this' keyword
var myOtherFunc = function(){
    return this.myString.toUpperCase();
}
myObj.myOtherFunc = myOtherFunc;
myObj.myOtherFunc(); //  "HELLO WORLD!"

//another way of creating an object is using constructor
var MyConstructor = function(){
    this.myNumber = 5;
}
myNewObj = new MyConstructor(); // {myNumber: 5}
myNewObj.myNumber; // 5

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
Math.max (maximum)
Math.min (minimum)
Math.sqrt (squareroot)
Math.random()
Math.floor()

//global object
var myVar = 10;
console.log("myVar" in window); // true
console.log(window.myVar); // 10

//implementing our own array methods
function remove(array,index){
    return array.slice(0,index).concat(array.slice(index+1));
}
console.log(remove(["a","b","c","d","e"],2)); // ["a","b","d","e"]

function forEach(array, action){
    for(var i = 0;i < array.length; i++)
        action(array[i]);
}
forEach(["Wampeter","Foma","Granfalloon"], console.log);//  Wampeter  Foma  Granfalloon
//similarly filter, map, reduce etc

//understanding this keyword better
//example 1
function speak (line) {
    console.log (" The " + this.type + " rabbit says"+"'"+ line + " ' ") ;
}
var whiteRabbit = { type : "white" , speak : speak };
var fatRabbit = { type : "fat", speak : speak };

whiteRabbit.speak("Oh my ears and whiskers , " +" how late it's getting !") ;
//  The white rabbit says ' Oh my ears and whiskers , how late it's getting ! '
fatRabbit.speak("I could sure use a carrot right now.") ;
//  The fat rabbit says 'I could sure use a carrot right now.'
speak.call(fatRabbit, 'hahahah');
// The fat rabbit says'hahahah ' 
speak.call({type:'old'}, 'Oh my god!');
// The old rabbit says'Oh my god!' 
speak.apply(fatRabbit, ['Oh my god!']);

//example2
function add(a, b){ 
  return a + b; 
} 
assert(add.call(this, 1, 2) == 3, ".call() takes individual arguments"); 
assert(add.apply(this, [1, 2]) == 3, ".apply() takes an array of arguments");

//bind can be used in two ways, first is to bind to an obj
var anotherRabbit = speak.bind(fatRabbit);
typeof anotherRabbit;
anotherRabbit('hahahah');
//or bind to function
var product = function(a, b){ return a * b; }
var doubler = product.bind(this, 2);
doubler(8); // 16

//prototypes
//A prototype is another object that is used as a fallback source of properties.
//every js object has prototypes
//example 1
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
var myObj = function() {
    myString: "Hello world!"
};
myObj.prototype = {
    meaningOfLife: 42,
    myFunc: function(){
        return this.myString.toLowerCase()
    }
};
firstObj = new myObj;
firstObj.meaningOfLife; //  42

// Built-in types like strings and numbers also have constructors that create
// equivalent wrapper objects.
var myNumber = 12;
var myNumberObj = new Number(12);
myNumber = myNumberObj; //  true
typeof myNumber; //  'number'
typeof myNumberObj; //  'object'
myNumber === myNumberObj; //  false

//using which we can add functions to a string, for example
String.prototype.firstCharacter = function(){
    return this.charAt(0);
}
"abc".firstCharacter(); // "a"
//prototypes are used in polyfilling
