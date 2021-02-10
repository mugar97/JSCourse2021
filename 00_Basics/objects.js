// Declaration
var obj1 = { key1: "value1", key2: "value2" };
var obj2 = {
  text: "this is a string",
  num: 2,
  fun: function (n) {
    return n ** 2;
  },
  objArr: [
    {
      x: 2,
      y: 5,
    },
    {
      x: 3,
      y: -1,
    },
  ],
};

// Using an object (dot notation vs bracket notation)
var user = {
  "first name": "John",
  "last name": "Doe",
  isAdmin: false,
  todos: ["clean", "wash"],
  age: 31,
};

console.log(user);

console.log("The user is " + user.age + " years old");

var lastNameProp = "last name";
console.log(
  "Its full name is: " + user["first name"] + " " + user[lastNameProp]
);

console.log(user.isAdmin ? "It's an admin" : "It is not an admin");

user["first name"] = "Mark";
user[lastNameProp] = "Thompson";
user.isAdmin = true;
user.todos.push("study");
// Adding props
user["birthDate"] = "1989-08-31";
user.isNew = false;
// Deleting props
delete user.age;

console.log(user);

// Checking props
console.log(user.hasOwnProperty("age"));
console.log(user.hasOwnProperty(lastNameProp));

// Using objects as lookup tables
// Switch case

function getCapabilities(browser) {
  switch (browser) {
    case "chrome":
      return "--headless";
    case "firefox":
      return "--disable-dev-shm-usage";
  }
}

var capabilities = {
  chrome: "--headless",
  firefox: "--disable-dev-shm-usage",
};

var browser = "chrome";
console.log(getCapabilities(browser));
console.log(capabilities[browser]);

// Cleaner code
// declare a constants object / enum
var USER_TYPES = {
  ADMIN: "ADMIN",
  SERVICE_REPRESENTATIVE: "SRV_RPRSTTV",
  CONSUMER: "CONS",
};
// use the constant for your code
var newUser = {
  name: "Ana",
  type: USER_TYPES.SERVICE_REPRESENTATIVE,
};

console.log(
  newUser.type === USER_TYPES.SERVICE_REPRESENTATIVE
    ? "the user is a Service Representative"
    : "not a SR"
);

// Challenge: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
