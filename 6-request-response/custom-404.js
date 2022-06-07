// should be after ALL routes
app.use((req, res) => {
	res.status(404).render('404')
})