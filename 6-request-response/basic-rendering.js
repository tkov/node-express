// basic usage
app.get('/about', (req, res) => {
	res.render('about')  // will render an 'about' view in our views folder
})