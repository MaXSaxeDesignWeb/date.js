# date.js

## Simple JavaScript date functions

```js
var d = new Date();
var year = d.getFullYear().toString();
var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = m[d.getMonth()];
var space = " ";
var date = month.concat(space.concat(year));
```
