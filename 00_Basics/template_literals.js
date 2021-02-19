/*
Template literals:
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
*/

// Characters
console.log(`This is "standard" and any kind of 'quote'`);
console.log(
  `you need to escape backtick \`, backslash \\, and this sequence of chars if you want to print it: \${} or $\{}`
);

//Multiline

console.log(`Hi John,

You won 180 points.

Regards,
Endava`);

// Interpolation - Variable and expression substitutions
const purchase = {
  user: {
    firstName: "John",
  },
  points: 180,
};

console.log(`Hi ${purchase.user.firstName},

You won ${purchase.points} points.

Regards,
Endava`);

//--
// An example with operations
const shoppingCart = [
  {
    itemName: "Hammer",
    price: 1.5,
  },
  {
    itemName: "Tool box",
    price: 4.99,
  },
];

// you can evaluate any kind of expression
console.log(`Net price is: $${((1.5 + 4.99) * 1.2).toFixed(2)}`);

// Or executing a function
const getTotal = function (cart, tax = 0) {
  const total = cart.reduce((acc, item) => +acc + item.price * (1 + tax), 0);
  return total.toFixed(2);
};

console.log(`Net price is: $${getTotal(shoppingCart, 0.2)}`);

// Building a conditional xpath
const menuId = {
  admin: "adm6SQ",
  std: "std3fKQ",
};
const isAdmin = true;
const menuBtnXpath = `//div[@id='${isAdmin ? menuId.admin : menuId.std}']`;
console.log(menuBtnXpath);

// --- Tagged template - parses a template literal with a function
const fun = function (strings, param1, param2) {
  console.log(strings);
  console.log(param1);
  console.log(param2);
  return "***" + param2 + param1 + strings.join("") + "***";
};

const output = fun`This is a tagged template, param 1: ${"value 1"}, param 2: ${
  +5 + 2
}.`;
console.log(output);

// Example 1: convert regexp
const defOrNewExp = /^(default|new)$/;
console.log(defOrNewExp.test("asdf"));
console.log(defOrNewExp.test("default"));
console.log(defOrNewExp.test("new"));

function re(strings, ...values) {
  const str = strings.reduce(
    (acc, string, i) => acc + (string || "") + (values[i] || ""),
    ""
  );
  console.log(str);
  return new RegExp(str);
}

const newExp = "new";
const dinamicRegExp = re`^(default|${newExp})$`;

console.log(dinamicRegExp.test("asdf"));
console.log(dinamicRegExp.test("default"));
console.log(dinamicRegExp.test("new"));
