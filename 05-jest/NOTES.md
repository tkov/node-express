# Unit Testing

## Mocking

...

## Code Coverage

- Jest provides some automated code coverage analysis

`npm test -- --coverage`


# Integration Testing

Testing a simple link to our *About* page:

```html
<p>Questions? Check out our 
<a href="/about" data-test-id="about">About Us</a> page!</p>
```

The `data-test-id` attribute is used to keep track (identify) of the link so we can *virtually* click it.


We are going to be using Puppeteer for Integration Testing. But before we install it,
we need to make our application exportable as a module.

```js
if(require.main === module) {
	app.listen(post, () => {
		console.log( `Express started on http://localhost:${port};` +
			'press Ctrl-C to terminate')
	})
} else {
	module.exports = app
}
```

Installing puppeteer

`npm instal --save-dev puppeteer`

`npm install --save-dev portfinder`


### TODO