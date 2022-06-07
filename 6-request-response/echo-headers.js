app.get('/headers', (req, res) => {
	res.type('text/plain')
	const headers = Object.entries(req.headers)
		.map(([key, value]) => `${key}: ${value}`)
	res.send(headers.join('\n'))
})