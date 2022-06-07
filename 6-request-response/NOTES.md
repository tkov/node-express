# The Request and Response Objects

## Parts of a URL

`http://localhost:3000/about?test=1#history`

- protocol: how the request will be transmitted 
	-- *http, https, ftp, mongodb, etc*
- host: identifies the server
- port
- path
- querystring: optional collection of name/value pairs
- fragment: strictly for use by the browser


## HTTP Request Methods

- often referred to as HTTP *verbs*

The HTTP verbs most commonly used are:
- GET
- POST
- PUT
- DELETE


## Request Headers

- some "invisible" info is passed when you navigate to a page


## Response Headers

- 'Content-Type' : what kind of content is being transmitted (*HTML, img, CSS, JavaScript, etc*)

To see response header in the developer's tools:

1. Open JS console
2. Click 'Network' tab.
3. Reload the page.
4. Pick the HTML from the list of requests (the first one).
5. Click the 'Headers' tab; you will see all response headers


## Request Body

# The Request Object

The *request object* (the first param of a request handler) starts its life as an instance of `http.IncomingMessage`, a core Node object.

The properties/methods of the `request` object.

- *req.params* : an array containing the *named route parameters*
- *req.query* : an object containing querystring parameters (GET parameters) as name/value pairs
- *req.body* : an object containing POST parameters
	-- to make *req.body* available, we need some middleare that can parse the body content type

- *req.route* : info about the currently matched route (useful for route debugging)
- *req.cookies/req.signedCookies*: objects containing cookie values passed from client

- *req.headers* : the headers received from the client

...


# The Response Object

The *response object* (the second param of a request handler) starts its life as an instance of `http.ServerResponse`

The properties/methods of the `response` object.

- *res.status(code)*: sets the HTTP status code; returns the response object, which is useful for **chaining**
- *res.set(name, value)*: sets a response header...
- *res.cookie(name, value, [options])*, *res.clearCookie(name, [options])*: sets or clears cookies that are stored on the client (requires middleware support)

- *res.redirect([status], url)*: redirects the browswer

- *res.send(body)*: sends a response to the client; Express defaults to a content-type of 'text/html'; to change, call res.type(type) method
- *res.json(json)*: sends JSON to the client
- *res.end()*: ends the connection without sending a response
- *res.type(type)*: a convenience method to set the 'Content-Type' header

- *res.format(object)*: allows you to send different content dependant on the `Accept` request header.

- *res.attachment([filename]), res.download(path, [filename], [callback])*: set a response header `Content-Disposition` to `attachment`

- *res.sendPath(path, [options], [callback])*: reads a file specified by `path` and sends its contents to the client; there should be **little need** for this method

- *res.links(links)*: sets the `Links` response header (not used very much)

- *res.locals, res.render(view, [locals], callback)*


# Boiling it Down

## Rendering Content

When rendering content, we will usually use `res.render`.

See the `.js` files for relevant rendering tasks.

[Basic Rendering](basic-rendering.js)

[Different Response Codes](different-response-codes.js)

[Passing context to a view](view-with-content.js)

[Rendering a View without a Layout](view-no-layout.js)

[Rendering a View with a Custom Layout](custom-layout.js)

[Rendering Plain Text](plaintext-output.js)

[Error Handler](error-handler.js)

[404 handler](custom-404.js)

