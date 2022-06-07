# Saving Time With Express

`npm install express`

To create a `package.json` file, we can run `npm init`.


Handling routes using `app.METHOD` http methods: (*replace METHOD with get, post, put, etc...*)
```js
app.get('/', (req, res) => {
	res.type('text/plain')
	res.send('Meadowlark Travel');
})

app.get('/about', (req, res) => {
	res.type('text/plain')
	res.send('About Meadowlark Travel')
}) 
```


`app.use`: a method by which Express adds *middleware*

**Note:** the order in which *routes* and *middleware* are added is significant


## Views and Layouts

We will be using **Handlebars** as a template engine.

`npm install express-handlebars`


## Static Files and Views

Express relies on *middleware* to handle static files and views.

`app.use(express.static(__dirname + '/public'))`

## Dynamic Content in Views

- Views can contain *dynamic* information.

```js

// inside or main .js file... (meadowlark.js)
const fortunes = [
	"Conquer you fears or they will conquer you.",
	"Rivers need springs",
	"Do not fear what you don't know",
	"You will have a pleasant surprise",
	"Whenever possible, keep it simple",
]
```