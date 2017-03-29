## Regularize
For what you wish you could do with regular expressions, that while chaining.

```javascript
var result, index, temp;
result = new R('Hello, World!');

temp = result.index('H');
console.log(temp.result); // Ought to be zero

result.replace('Hello', 'Good-bye');
console.log(temp.result);
```
