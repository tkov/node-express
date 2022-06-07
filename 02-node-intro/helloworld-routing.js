const http = require('http')
const port = process.env.PORT || 3000

const fs = require('fs') // *** //

// **************************************************************** // 
// helper function for handling our static content
function serveStaticFile(res, path, contentType, responseCode = 200) {
	// `fs.readFile` is asynchronous, and requires a callback function which is executed when (after) the
	// file is read
	fs.readFile(__dirname + path, (err, data) => {
		if (err) {
			res.writeHead(500, { 'Content-Type': 'text/plain' })
			return res.end('500 - Internal Error')
		}

		res.writeHead(responseCode, { 'Content-Type': contentType })
		res.end(data)
	})
}


const server = http.createServer((req, res) => {
	// res.writeHead(200, { 'Content-Type': 'text/plain' })  // set content type to plain text
	// res.end('Hello world!')	// sends the string 'Hello world!'
	const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

	switch(path) {
		case '':
			serveStaticFile(res, '/public/home.html', 'text/html') // responseCode is 200 by default
			break
		case '/about':
			serveStaticFile(res, '/public/about.html', 'text/html') // responseCode is 200 by default
			break
		case '/img/logo.png':
			serveStaticFile(res, '/public/img/logo.png', 'image/png') // responseCode is 200 by default
			break
		default:
			serveStaticFile(res, '/public/404.html', 'text/html', 404)
			break
	}


})

server.listen(port, () => console.log(`server started on port ${port}; ` + 
	'press Ctrl-C to terminate...'))

