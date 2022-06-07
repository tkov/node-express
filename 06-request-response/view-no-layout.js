// views/no-layout.handlebars must include all necessary HTML
app.get('/no-layout', (req, res) => {
	res.render('no-layout', { layout: null }) // has no layout file
})