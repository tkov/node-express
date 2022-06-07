const express = require('express')
// ** //
const expressHandlebars = require('express-handlebars')

const app = express()

// configuring Handlebars view engine
app.engine('handlebars', expressHandlebars(
{
	defaultLayout: 'main',
}
))
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000


/* adding our routes */

// app.METHOD takes two params: a `path` and a `function`
// - the path is what defines the route
// - the function is invoked when the route is matched

app.get('/', (req, res) => {
	res.type('text/plain')
	res.send('Meadowlark Travel');
})

app.get('/about', (req, res) => {
	res.type('text/plain')
	res.send('About Meadowlark Travel')
}) 


// custom 404 page
app.use((req, res) = > {
	res.type('type/plain')
	res.status(404)
	res.send('404 - Not Found')
})

// custom 500 page
app.use((err, req, res, next) = > {
	console.error(err)
	res.type('type/plain')
	res.status(500)
	res.send('500 - Server Error')
})

app.listen(port, () => console.log(
	`Express started on http://localhost:${port}; ` +
	`press Ctrl-C to terminate.`))

