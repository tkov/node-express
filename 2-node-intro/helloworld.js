const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' })  // set content type to plain text
	res.end('Hello world!')	// sends the string 'Hello world!'
})

server.listen(port, () => console.log(`server started on port ${port}; ` + 
	'press Ctrl-C to terminate...'))

