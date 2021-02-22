/*
 JS
 var: function-scoped variables
 - redeclarable, reassignable

 ES6(ES2015) 
 let and const: block-scoped variables
 let: not redeclarable, reassignable
 const: not redeclarable, not reassignable
 
*/

// Declaration:

// var is redeclarable
var firstName = "John"; // also it's attached to window object (global declaration)
var firstName = "Mary";
console.log(firstName); // logs 'Mary'

// The only control JS offers is for using declared variables using "use strict" convention
(function () {
  "use strict";
  n = "new undeclared var";
  console.log(n); // throws an error because n is not declared
})();

// var is also function-scoped
(function () {
  if (true) {
    var color = "red";
  }
  console.log(color);
})();

// Let and const cannot be re declared

let lastName = "Simpson";
let lastName = "Thompson"; //throws an error
console.log(lastName);

const nickName = "Flea";
const nickName = "Lion"; //throws an error - cannot be re-declared
nickName += "Lion"; // throws an error - cannot be re-assigned

// var
var bar = "one";
{
  var bar = "two";
}
console.log(bar); // two

// let
let bar2 = "one";
if (true) {
  let bar2 = "two";
  console.log(bar2); // two
}
console.log(bar2); // one

// Modifiying an array or an object declared with const

const fruits = ["orange"];
fruits.push("Apple");
console.log(fruits);

const dog = { name: "Bingo" };
dog.numLegs = 4;
console.log(dog);

// Prevent object mutations
Object.freeze(dog);
dog.color = "black";
console.log(dog);

// Copy object instead of modifying it
const newDog = { ...dog, color: "black" };
console.log(newDog);

// Interview question:

const age = 40;
const users = [];
const group = {};
const user = {};

(function (user, age, group, users) {
  user.name = "Jhon";
  age = 35;
  group.user = user;
  users.push(user);
})(user, age, group, users);

console.log("age:", age);
console.log("user:", user);
console.log("users:", users);
console.log("group:", group);

// Functions can mutate variables, not reassign them
// We need to be aware of this for functional programing... coming soon
