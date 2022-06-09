# Form Handling

- Typically collect info from users with the use of HTML forms.


## Sending Client Data to the Server

- GET and POST are available, though POST is preferred due to increased security 


## Form Handling with Express

If you use GET for form handling, fields will be exposed in the URL, and thus
be available on the `req.query` object.

If you have an `input` field with the `name` attribute, `name='email`, the inputted data
will be passed as `req.query.email`.

If you use POST, we will need *middleware* to parse the URL-encoded body.

`npm install body-parser`


Linking the `body-parser` middleware:
```js
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
```

`req.body` is now available! (where your form fields are made available)



## Using `fetch` to Send Form Data

The contents of the HTML form itself don't need to be changed.
We do not have to specify an `action` or `method`.


## File Uploads

We are going to use `multiparty` for multipart form processing.

[File Upload Form](app/views/contest/vacation-photo.handlebars)

**Note:** we must specify `enctype="multipart/form-data"` to enable *file uploads*. We are also *restricting* file types with the `accept` attribute.