---
tags: ["javascript", "async"]
---

# 20230315: Node callback to async

- Una **función callback** es la que tiene como último argumento un *callback*

```js
aCallbackFunction(x, (err, data) => {
	if (err) {
		console.log(err);
		// ...
		return;
	}
	console.log(data);
	//...
});
```

- La llamada a una función callback se puede transformar en la llamada a una **promise**

```js
const aPromise = (x) => new Promise((resolve, reject) => {
	aCallbackFunction(x, (err, data) => {
		if (err) {
			return reject(err);
		}
		resolve(data);
	});
});

aPromise(x)
	.then(data => {
		console.log(data);
		//...
	})
	.catch(err => {
		console.log(err);
		// ...
	});
```

- La llamada a una promise se puede transfromar en una llamada **async**

```js
const aAsyncFunction = async (x) => {
	try {
		const data = await aPromise(x);
		//...
	} catch(err) {
		console.log(err);
		// ...
	}
};

aAsyncFunction(x);
```

## promisify

- En node, se puede usar **promisify**

```js
const util = require('util');

const aPromise = util.promisify(aCallbackFunction);
```

- Como contraparte, existe **callbackify**, que permite obtener una función callback a partir de una función asyncrona (o que retorne una promesa)

```js
const util = require('util');

const aCallbackFunction = util.callbackify(aPromise);
```