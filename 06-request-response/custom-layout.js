// using a custom layout that resides in the views/layouts directory
app.get('/custom-layout', (req, res) => {
	res.render('custom-layout', { layout: 'custom' })
})

