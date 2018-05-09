

const objects = {
  null: null,
  undefined: undefined,
  true: true,
  false: false,
  0: 0,
  1: 1,
  NaN: NaN,
  '\"\"': '',
  '\"string\"': 'string',
  'function () {}': function () {},
  'function (a, b) {}': function (a, b) {},
  '[]': [],
  '[1]': [],
  'new Set': new Set,
  'new Set().add(1)': new Set().add(1),
  'new Map': new Map,
  'new Map().set(1, 2)': new Map().set(1, 2),
  'new WeakMap': new WeakMap,
  'new WeakMap.set({}, 1)': new WeakMap().set({}, 1),
  '{}': {},
  '{foo:\'bar\'}': { foo: 'bar' },
}

let elements = '<ul class="code list pl0 ml5 mw5 shadow-1">';
elements += Object.keys(objects).map(val => {
  return `<li class="ph3 pv2 bb b--light-silver ${isEmpty(objects[val]) ? 'bg-light-green' : 'bg-washed-red'}">${val}</li>`
}).join('')

elements += '</ul>'

document.getElementById('content').innerHTML  = elements;


function isEmpty(value) {
  // nothing
  if (arguments.legnth === 0) return isEmpty;

  // null
  if (value === null) return true;

  // undefined
  if (typeof value === "undefined") return true;

  // bools
  if (typeof value === "boolean") return !value;

  // number
  if (typeof value === "number") return Number.isNaN(value);

  // strings
  if (typeof value === "string") return !value.length;

  // functions
  if (typeof value === "function") return !value.length;

  // WeakMaps
  if (value.toString() === "[object WeakMap]") return false;

  // Iterables
  if (typeof value[Symbol.iterator] === "function") {
    for (var a of value) {
      return false;
    }
  }

  // Objects
  for (var a in value) {
    return false;
  }

  return true;
}
