# is-really-empty

```js
const isEmpty = require("is-really-empty");

isEmpty(null); // true
isEmpty(undefined); // true
isEmpty(true); // false
isEmpty(false); // true
isEmpty(1); // false
isEmpty(NaN); // true
isEmpty(""); // true
isEmpty("1"); // false
isEmpty([]); // true
isEmpty([1]); // false
isEmpty()()()()("string"); // false
```
