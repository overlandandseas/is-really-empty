# is-really-empty 🌌
[![npm](https://img.shields.io/npm/dw/is-really-empty.svg)](https://www.npmjs.com/package/is-really-empty)


A Small library to tell if the passed value is _really_ empty.

## Prerequisites
This library uses `for in` and `for of` so at least **node 4.x** is required.

## What "empty" means
##### Marriam-Webster definition of empty
> Lacking reality, substance, meaning, or value. Marked by the absence of human
life, activity, or comfort

A value proves to be "empty" when we can determine it contains nothing. An
object or array that has been instantiated (even with a length value being set)
if no fields have been populated, then it proves to be empty. WeakMaps and
WeakSets are never empty since there is no way to tell if they've ever been
filled. A function is empty when it accepts no parameters. False, null,
undefined, and NaN are all empty as they are the absence of value and often
defaults for some cases.

#### Iterables
Since the only way to tell if an iterable is empty is by traversing it, this
will call a getter or a yield (in a generator function) if they exist as the
first property.

## Usage
A more comprehensive list is on the [project website](https://overlandandseas.github.io/is-really-empty/).

```js
const isEmpty = require("is-really-empty");

isEmpty(undefined); // true
isEmpty(1); // false
isEmpty(NaN); // true
isEmpty(""); // true
isEmpty("1"); // false
isEmpty([]); // true
isEmpty([1]); // false
isEmpty(new Array(2)) // true
isEmpty()()()()("string"); // false
```

## Testing
```
$ npm test
```

## License
WTFPL
