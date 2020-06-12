# 0this

## Transformed arrow functions that accept this biding as their first argument.

### example

```javascript
const zt = require("0this");

const func = zt((thiz, arg1, arg2) => {
  console.log(thiz, arg1, arg2);
});

const thiz = {
  prop: "prop",
};

func.apply(thiz, [1, 2]);
```

**outputs**: `{ prop: 'prop' } 1 2`
