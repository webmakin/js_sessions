//1.js

//this is a comment

/*
can use this format for multiline comments
*/

//fixed number
13
// this denotes a number in js. Javascript uses 64 bits to store a fixed number
// hence maximum number that can be represented is 2^64 which is 18 quintillion

//fractional number
9.81

//exponential number
2.99e8

//arithmetic
1+2-100*4/11

//operator precedence
// / and * have same precendence(more than + and -)
// + and - have same precedence
// when the appear next to each other left to right precedence is applied
// always use parens to avoid confusion for ex: (100 + 4) * 11
// % is the remainder for ex: 6%3=0 and 8%3=2

//special numbers
// there are 3 special numbers which dont behave like normal numbers
// Infinity, -Infinity and NaN(try 0/0 in console)

//boolean
true;
false;

//logical operators
// negation uses !
// equality === ==
// inequality !==
// less than <
// greater than <
// lt eq <=
// something to be careful with when checking equality
// == doesnt check type for ex: "5" == 5
// false || true //true
// false && true //false
// ternary ex:
console.log(true ? 1 : 2); // 1

//null is used for a non value
//undefined is for a value not present usually checked for arrays and objects having a key

//this is a variable declaration
var num1 = 13;
var str = 'Hello World'; 

//strings
// ex: 'Mary had a little lamb'
// ex: "Whose fleece was white as snow"
// both the above are valid
// ex: 'test hellow \n world' will output two lines since there is a newline char \n
// since \ is the escape character if you want to have a backslash you have to escape it
// for ex: 'test hello \ world' will need to be change to 'test hello \\ world' (try both in console)
// string concat
console.log('Hello'+' '+'Hashcube');
// You can access characters in a string with `charAt`
"This is a string".charAt(0);  // = 'T'
// ...or use `substring` to get larger pieces.
"Hello Hashcube".substring(0, 5); // = "Hello"
// `length` is a property, so don't use ().
"Hello".length; // = 5
// Variables declared without being assigned to are set to undefined.
var some_variable; // = undefined
// num1 += 10; //23
// num1++; //incremented value next
// ++num1; //increment and use the value

//typeof operator
typeof 3
// "number"
typeof 'asif'
// "string"
//beware of automatic type conversion in js(type coercion)
console.log(8*null) //  0
console.log("5"-1) //4
console.log("5"+1) //51
console.log("five"*2) //NaN
console.log(false==0) //true

//arrays
var mixed_array = ["Hello", 45, true];
mixed_array[1];
mixed_array.push('World');
mixed_array.length; //4
// arrays are mutable
mixed_array[1] = 'Hashcube'; //["Hello", "Hashcube", true, "World"]

//objects
var my_obj = {key1: "Hello", key2: "World"};
my_obj['key1']; //Hello
// objects are mutable
my_obj['key1'] = 'Hahaha';
// using dot syntax
my_obj.key1; //Hahaha

//if
var count = 1;
if (count == 3){
    // evaluated if count is 3
} else if (count == 4){
    // evaluated if count is 4
} else {
    // evaluated if it's not either 3 or 4    
}

//while
while (true){
    // An infinite loop!
}

//do-while loops are like while loops, except they always run at least once.
var input;
do {
    input = getInput();
} while (!isValid(input))

//for
for(var i = 0; i < 5; i++){
    // will run 5 times
}

//&& is logical and, || is logical or
if (house.size == "big" && house.colour == "blue"){
    house.contains = "bear";
}

// The `switch` statement checks for equality with `===`.
// use 'break' after each case 
// or the cases after the correct one will be executed too. 
grade = 'B';
switch (grade) {
  case 'A':
    console.log("Great job");
    break;
  case 'B':
    console.log("OK job");
    break;
  case 'C':
    console.log("You can do better");
    break;
  default:
    console.log("Hey");
    break;
}

//functions
//A function is a piece of program wrapped in a value
//useful debugging functions
alert("Good morning!");
console.log(Math.min(2,4)+100);
//useful functions for getting user data
var input= confirm("Are you sure?");
val the_name = prompt("Whats your name?");
//defining
var square = function(x) {
    return x * x;
};
function square(x){
    return x * x;
}
//how similar are functions and objects
var obj = {}; 
var fn = function(){}; 
obj.prop = "some value"; 
fn.prop = "some value"; 
assert( obj.prop == fn.prop, "Both are objects, both have the property." );
//A function can have multiple parameters or no parameters at all
//scope
var x = "outside";
var f1 = function () {
    var x = "inside f1";
    console.log(x);
};
f1() ;
console.log(x) ;// outside
//no scope for if blocks
if (true){
    var i = 5;
}
i; //  5
//to prevent scope from leaking use immediate functions
(function(){
    var temporary = 5;
    console.log(temporary)
    // We can access the global scope by assiging to the "global object", which
    // in a web browser is always `window`.
    window.permanent = 10;
})();
temporary; // raises ReferenceError
permanent; // 10

//nested scope
//Also, functions can be created inside other functions, producing several degrees of locality
function outer(){
    var out_var = 'outer';
    console.log(in_var); // error
    inner();
    function inner(){
        var in_var = 'inner';
        console.log(out_var); //outer
    }
    console.log(in_var); // error
}
outer();

//break and continue
for(var current = 20; ; current ++) {
    if ( current % 7 == 0)
        break;
}
console.log(current); //21

for(var current = 0; current<20 ; current ++) {
  if(current===10){
      continue;
  }
  else{
      console.log(current);
  }
}

//interesting
function chicken () {
    return egg () ;
}
function egg () {
    return chicken () ;
}
console.log( chicken () + " came first ."); //?

//optional arguments
alert ("Hello" , "Good Evening", "How do you do?") ; //?
checkMulti(3);
function checkMulti(x) {
    console.log(x);
    console.log(y);
    return 'ok';
} // 3 undefined 'ok'

//closures
//being able to reference a specific instance of local variables in an enclosing function is called closure
function multiplier(factor) {
    return function(number) {
        return number * factor ;
    };
}
var twice = multiplier (2) ;
console.log(twice(5)) ;
//scope in closures
function sayHelloInFiveSeconds(name){
    var prompt = "Hello, " + name + "!";
    // Inner functions are put in the local scope by default, as if they were
    // declared with `var`.
    function inner(){
        alert(prompt);
    }
    setTimeout(inner, 5000);
    // setTimeout is asynchronous, so the sayHelloInFiveSeconds function will
    // exit immediately, and setTimeout will call inner afterwards. However,
    // because inner is "closed over" sayHelloInFiveSeconds, inner still has
    // access to the `prompt` variable when it is finally called.
}
sayHelloInFiveSeconds("Adam"); // will open a popup with "Hello, Adam!" in 5s

//recursion
//A function that calls itself is called recursive.
function power(base, exponent){
    if(exponent == 0)
        return 1;
    else
        return base*power(base,exponent-1);
}
console.log(power(2, 3)) ;

_________________END________________________