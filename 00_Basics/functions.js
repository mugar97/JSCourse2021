// Functions

// Three ways to write functions
function name1(param1) {
  return "returning " + param1;
}

var name2 = function (param1) {
  return "returning " + param1;
};

var name3 = (param1) => {
  return "returning " + param1;
};
var name4 = (param1) => "returning " + param1;

console.log(name1("test1"));
console.log(name2("test2"));
console.log(name3("test3"));
console.log(name4("test4"));

// a function always returns something
var fun1 = function () {
  console.log("doing something great");
};
console.log(fun1());

// self-invoking functions
(function () {
  console.log("doing something awesome");
})();

(function (env) {
  console.log("running app on " + env);
})("QA");

// Default parameters
// JS
function myClick(element, times) {
  times = times || 1;
  console.log("number of clicks for " + element + ": " + times);
}
myClick("button", 2);
myClick("button");
myClick();

// ES6
function myClickES6(element, times = 3) {
  console.log("number of clicks for " + element + ": " + times);
}
myClickES6("button", 2);
myClickES6("button");
myClickES6();

function f([x, y] = [1, 2], { z: z } = { z: 3 }) {
  return x + y + z;
}

console.log(f());

// Callbacks
function test(name, testFn) {
  console.log("Starting test: " + name);
  testFn();
  console.log("Finishing test: " + name);
}

test("Form should work", function () {
  console.log("testing form success");
});

test("Form should fail", function () {
  console.log("testing form failure");
});

// Recursion to replace loops
// countdown should return an array with the numbers from n down to 0. If n<0 return an empty array
function countdown1(n) {
  var arr = [];
  if (n >= 0) {
    for (var i = n; i >= 0; i--) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(countdown1(5));
console.log(countdown1(-1));
console.log(countdown1(0));

//Using recursion
function countdown2(n) {
  return n >= 0 ? [n].concat(countdown2(n - 1)) : [];
}
console.log(countdown2(5));
console.log(countdown2(-1));
console.log(countdown2(0));

// Math case
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(7));

// Useful case for automation
function deepNavigation(sections) {
  for (section of sections) {
    Array.isArray(section)
      ? deepNavigation(section)
      : console.log("checking " + section);
  }
}
var menu = [
  "About",
  [
    "Sections - Course",
    "Sections - Workshop",
    ["Sections - Tasks - Task 1", "Sections - Tasks - Task 2"],
    "Sections - Ticket",
    [
      "Sections - Events - E1",
      ["Sections - Events - E2 - part 1", "Sections - Events - E2 - part 2"],
    ],
  ],
  "Contact Us",
];
deepNavigation(menu);
