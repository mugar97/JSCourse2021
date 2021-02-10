// Console object
// log types
function logTypes() {
  console.log("normal log");
  console.info("informational");
  console.warn("watch out");
  console.error("not good");
  console.table({ a: 1, b: "John" });
  console.assert(false, "showing due to falsy");
  console.assert(true, "showing when true?");
  console.assert(0 / 0, "showing log due to error");
}

// log groups
// Simple group
console.log("outside the first group (before)");
console.group("first group");
logTypes();
console.groupEnd();
console.log("outside the first group (after)");

// "Collapsed" group
console.log("outside the second group (before)");
console.groupCollapsed("second 'collapsed' group");
logTypes();
console.groupEnd();
console.log("outside the second group (after)");

// log trace
function myFun1() {
  console.log("I'm doing something really important...");
  console.trace();
}

function myFun2() {
  myFun1();
}

function myUnknownFunction() {
  myUnknownFunction2();
}

function myUnknownFunction2() {
  myUnknownFunction3();
}

function myUnknownFunction3() {
  myFun1();
}

// ... let's run some functions
myFun2();
myUnknownFunction();

// Time
const square1 = function (num) {
  return Math.pow(num, 2);
};
const square2 = function (num) {
  return num ** 2;
};
const square3 = function (num) {
  return num * num;
};

console.time("method 1");
square1(9);
console.timeEnd("method 1");

console.time("method 2");
square2(9);
console.timeEnd("method 2");

console.time("method 3");
square3(9);
console.timeEnd("method 3");
