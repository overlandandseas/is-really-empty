"use strict";

const objects = {
  null: null,
  undefined: undefined,
  true: true,
  false: false,
  0: 0,
  1: 1,
  NaN: NaN,
  '""': "",
  '"string"': "string",
  "function () {}": function() {},
  "function (a, b) {}": function(a, b) {},
  "[]": [],
  "[1]": [1],
  "new Array(3)": new Array(3),
  "new Array(3).fill()": new Array(3).fill(),
  "[,,,]": [,,,],
  "new Set": new Set(),
  "new Set().add(1)": new Set().add(1),
  "new Map": new Map(),
  "new Map().set(1, 2)": new Map().set(1, 2),
  "new WeakMap": new WeakMap(),
  "new WeakMap().set({}, 1)": new WeakMap().set({}, 1),
  "new WeakSet": new WeakSet(),
  "new WeakSet().add({})": new WeakSet().add({}),
  "{}": {},
  "{ foo: 'bar' }": { foo: "bar" },
  "(function * () {})()": (function*() {})(),
  "(function * () { yield 1 })()": (function*() {
    yield 1;
  })(),
  "new function () {}": new function() {}(),
  "new function (a) { this.a = a }": new function(a) {
    this.a = a;
  }()
};

let elements =
  '<ul class="code list pl0 ml5-l mr3 ml3 shadow-1" style="max-width: 432px">';
elements += Object.keys(objects)
  .map(val => {
    return `<li class="ph3 pv2 bb b--light-silver ${
      isEmpty(objects[val]) ? "bg-light-green" : "bg-washed-red"
    }">${val}</li>`;
  })
  .join("");
elements += "</ul>";

document.getElementById("content").innerHTML = elements;

function isEmpty(value) {
  // nothing
  if (arguments.length === 0) return true;

  // null
  if (value === null) return true;

  // undefined
  if (typeof value === "undefined") return true;

  // bools
  if (typeof value === "boolean") return false;

  // number
  if (typeof value === "number") return Number.isNaN(value);

  // strings
  if (typeof value === "string") return !value.length;

  // functions
  if (typeof value === "function") return !value.length;

  // WeakMaps
  if (Object.prototype.toString.call(value) === "[object WeakMap]")
    return false;

  // WeakSets
  if (Object.prototype.toString.call(value) === "[object WeakSet]")
    return false;

  // Iterables
  if (!Array.isArray(value) && typeof value[Symbol.iterator] === "function") {
    for (var a of value) {
      return false;
    }
  }

  // Objects & Arrays
  for (var a in value) {
    return false;
  }

  return true;
};
