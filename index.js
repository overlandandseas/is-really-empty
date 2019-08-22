module.exports = function isEmpty(value) {
  // nothing
  if (arguments.length === 0) return isEmpty;

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
