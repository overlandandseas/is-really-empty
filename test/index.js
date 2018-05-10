const isEmpty = require("../index");

const objects = [
  null,
  undefined,
  true,
  false,
  0,
  1,
  NaN,
  "",
  "string",
  function() {},
  function(a, b) {},
  [],
  [1],
  new Set(),
  new Set().add(1),
  new Map(),
  new Map().set(1, 2),
  new WeakMap(),
  new WeakMap().set({}, 1),
  new WeakSet(),
  new WeakSet().add({}),
  {},
  { foo: "bar" },
  (function*() {})(),
  (function*() {
    yield 1;
  })(),
  new function() {}(),
  new function(a) {
    this.a = a;
  }(),
  new Array(2),
  new Array(2).fill(),
];

const objectList = [
  "null",
  "undefined",
  "true",
  "false",
  "0",
  "1",
  "NaN",
  "Empty String",
  "String",
  "function 0 params",
  "function multiple params",
  "empty array",
  "filled array",
  "empty set",
  "filled set",
  "empty map",
  "filled map",
  "empty weakmap",
  "filled weakmap",
  "empty weakset",
  "filled weakset",
  "empty object",
  "filled object",
  "iterator with no yield",
  "iterator with yield",
  "instance",
  "instance with data member",
  "array created with constructor",
  "array from constructor filled",
];

const answers = [
  true,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  false,
  false,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false
];
const errors = [];
objects.map(isEmpty).forEach((val, index) => {
  if (val !== answers[index]) {
    errors.push(objects[index]);
    console.log(
      `Failed for object '${objectList[index]}', should be ${answers[index]}`
    );
  }
});

if (isEmpty(errors)) {
  console.log("Test Pass");
  process.exit(0);
} else {
  process.exit(1);
}
