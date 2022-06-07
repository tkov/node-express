// should be after ALL routes
app.use((err, req, res, next) => {
	console.error('** SERVER ERROR: ' + err.message)
	res.status(500).render('error', { message: ' You should not have clicked that!' })
})