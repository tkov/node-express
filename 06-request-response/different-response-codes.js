app.get('/error', (req, res) => {
	res.status(500)   // setting status code to 500, since default is 200
	res.render('error')
})

// or on one line...
app.get('/error', (req, res) => res.status(500).render('error'))