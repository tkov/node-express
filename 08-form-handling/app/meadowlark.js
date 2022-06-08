// meadowlark.js -- our *entry point*

const express = require('express')
// ** //
const expressHandlebars = require('express-handlebars')

const handlers = require('./lib/handlers')

const bodyParser = require('body-parser')

const app = express()

// configuring Handlebars view engine
app.engine('handlebars', expressHandlebars.engine({
	defaultLayout: 'main',
}))
app.set('view engine', 'handlebars');


const port = process.env.PORT || 3000

// const fortunes = [
// 	"Conquer you fears or they will conquer you.",
// 	"Rivers need springs",
// 	"Do not fear what you don't know",
// 	"You will have a pleasant surprise",
// 	"Whenever possible, keep it simple",
// ]

/* adding static resource middleware */
app.use(express.static(__dirname + '/public'))


/* ADDING BODY-PARSER */
app.use(bodyParser.json())

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


app.get('/newsletter', handlers.newsletter)
app.post('/api/newsletter-signup', handlers.api.newsletterSignup)

// app.get('/', handlers.home)

// app.get('/about', handlers.about)


/* linking our handlers for our newsletter signup */
app.get('/newsletter-signup', handlers.newsletterSignup)

app.post('/newsletter-signup/process', handlers.newsletterSignupProcess)

app.get('/newsletter-signup/thank-you', handlers.newsletterSignupThankYou)

/*************************************************/

// app.use(handlers.notFound)

// app.use(handlers.serverError)


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


if (require.main === module) {
  app.listen(port, () => {
    console.log( `Express started on http://localhost:${port}` +
      '; press Ctrl-C to terminate.' )
  })
} else {
  module.exports = app
}

