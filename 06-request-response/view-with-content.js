app.get('/greeting', (req, res) => {
	res.render('greeting', {
		message: 'Hello programmer!',
		style: req.query.style,
		userid: req.cookies.userid,
		username: req.session.username
	}) // passing an object to our view... can access message,style,userid and username values in our view
})