# Regularize
For what you wish you could do with regular expressions, that while chaining.

```javascript
	var result;
	result = new R('1. Go to Market 2. Stay home 3. Have roast beef 4. Have none 5. Cry wee wee wee');
	// R is short for Regularize
```
## Flags

Regularize has flags, like regular expressions do. For example, you can ignore case.

```javascript
	result.search('market').getResult()
	// -1
	result.ignore().search('market').getResult()
	// 9
```

## Replace 
 
You can replace something in a text with something else.

```javascript
	result.replace('Market', 'market').getResult()
```