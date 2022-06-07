# Cookies and Sessions

Important information about cookies:

- Cookies are not secret from the user (signed cookies can obfuscate contents of cookies)
- The user can delete or disallow cookies
- Regular cookies can be tampered with (signed cookies cannot)
- Cookies can be used for attacks (XSS)
- Users will notice if you abuse cookies
- Prefer sessions over cookies
	-- you can use *sessions* to maintain state


## Externalizing Credentials

- to make cookies **secure** a *cookie secret* is necessary

`.credentials.development.json`
```json
// .credentials.development.json
{
	"cookieSecret": "... a cookie secret goes here"
}
```

`config.js`
```js
const env = process.env.NODE_ENV || 'development'
const credentials = require(`./.credentials.${env}`)
module.exports = { credentials }
```