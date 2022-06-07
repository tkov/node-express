const express = require('express')
// ** //
const expressHandlebars = require('express-handlebars')

const app = express()

// configuring Handlebars view engine
app.engine('handlebars', expressHandlebars.engine({
	defaultLayout: 'main',
}))
app.set('view engine', 'handlebars');

// meadowlark.js -- our *entry point*

const port = process.env.PORT || 3000

const fortunes = [
	"Conquer you fears or they will conquer you.",
	"Rivers need springs",
	"Do not fear what you don't know",
	"You will have a pleasant surprise",
	"Whenever possible, keep it simple",
]

/* adding static resource middleware */
app.use(express.static(__dirname + '/public'))

/* adding our routes */

// app.METHOD takes two params: a `path` and a `function`
// - the path is what defines the route
// - the function is invoked when the route is matched

app.get('/', (req, res) => {
	// res.type('text/plain')
	// res.send('Meadowlark Travel');
	res.render('home')
})

app.get('/about', (req, res) => {
	// res.type('text/plain')
	// res.send('About Meadowlark Travel')
	const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
	res.render('about', { fortune: randomFortune })
}) 


// custom 404 page
app.use((req, res) => {
	res.status(404)
	// res.type('type/plain')
	// res.send('404 - Not Found')
	res.render('404')
})

// custom 500 page
app.use((err, req, res, next) => {
	console.error(err)
	res.status(500)
	// res.type('type/plain')
	// res.send('500 - Server Error')
	res.render('500')
})

app.listen(port, () => console.log(
	`Express started on http://localhost:${port}; ` +
	`press Ctrl-C to terminate.`))

