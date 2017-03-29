## Regularize
For what you wish you could do with regular expressions, that while chaining.
```javascript
			result = new Regularize("1. hello hay world\n2. hey again world");	
		
			temp = result.words().execute().result; // Ought to be hello
			temp = result.digits().execute().result; // ought to be 1
			temp = result.wordsAndDigits().execute().result; // Ought to be 1
			temp = result.next().result; // Ought to be hello
```
