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
  "null",                             // true
  "undefined",                        // true
  "true",                             // false
  "false",                            // false
  "0",                                // false
  "1",                                // false
  "NaN",                              // true
  "Empty String",                     // true
  "String",                           // false
  "function 0 params",                // true
  "function multiple params",         // false
  "empty array",                      // true
  "filled array",                     // false
  "empty set",                        // true
  "filled set",                       // false
  "empty map",                        // true
  "filled map",                       // false
  "empty weakmap",                    // false
  "filled weakmap",                   // false
  "empty weakset",                    // false
  "filled weakset",                   // false
  "empty object",                     // true
  "filled object",                    // false
  "iterator with no yield",           // true
  "iterator with yield",              // false
  "instance",                         // true
  "instance with data member",        // false
  "array created with constructor",   // true
  "array from constructor filled",    // false
];

const answers = [
  true,   // null
  true,   // undefined
  false,  // true
  false,   // false
  false,  // 0,
  false,  // 1,
  true,   // NaN
  true,   // Empty String
  false,  // String
  true,   // function 0 params
  false,  // function multiple params
  true,   // empty array
  false,  // filled array
  true,   // empty set
  false,  // filled set
  true,   // empty map
  false,  // filled map
  false,  // empty weakmap
  false,  // filled weakmap
  false,  // empty weakset
  false,  // filled weakset
  true,   // empty object
  false,  // filled object
  true,   // iterator with no yield
  false,  // iterator with yield
  true,   // instance
  false,  // instance with data member
  true,   // array created with constructor
  false,  // array from constructor filled
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
