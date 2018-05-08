export default function(value) {
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

  // WeakMaps
  if (value.toSting() === "[object WeakMap]") return false;

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
