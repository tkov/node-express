const fortune = require('./fortune')

exports.api = {}

exports.home = (req, res) => res.render('home')

exports.about = (req, res) => res.render('about', { fortune: fortune.getFortune() })

/************ adding handlers for our newsletter signup [BROWSER SUBMITTED FORMS] **************/

exports.newsletterSignup = (req, res) => {
	res.render('newsletter-signup', { csrf: 'CSRF token goes here' })
}

exports.newsletterSignupProcess = (req, res) => {
	console.log('Form (from querystring): ' + req.query.form)
	console.log('CSRF token (from hidden field): ' + req.body._csrf)
	console.log('Name (from visible form field): ' + req.body.name)
	console.log('Email (from visible form field): ' + req.body.email)
	res.redirect(303, '/newsletter-signup/thank-you')
}

exports.newsletterSignupThankYou = (req, res) => {
	res.render('newsletter-signup-thank-you')
}

/*************************************************************************************************/

/************ adding handlers for our newsletter signup [FETCH/JSON FORMS] ***********************/
exports.newsletter = (req, res) => {
	res.render('newsletter', { csrf: 'CSRF token goes here' })
}

exports.api.newsletterSignup = (req, res) => {
	console.log('Form (from querystring): ' + req.query.form)
	console.log('CSRF token (from hidden field): ' + req.body._csrf)
	console.log('Name (from visible form field): ' + req.body.name)
	console.log('Email (from visible form field): ' + req.body.email)
	res.send({ result: 'success' })
}
/**************************************************************************************************/


exports.vacationPhotoContest = (req, res) => {
	const now = new Date()
	res.render('contest/vacation-photo', { year: now.getFullYear(), month: now.getMonth() })
}

exports.vacationPhotoContestProcess = (req, res, fields, files) => {
	console.log('field data: ', fields)
	console.log('files: ', files)
	res.redirect(303, '/contest/vacation-photo-thank-you')
}

exports.vacationPhotoContestProcessThankYou = (req, res) => {
	res.render('contest/vacation-photo-thank-you')
}

exports.notFound = (req, res) => res.render('404')

/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render('500')
/* eslint-enable no-unused-vars */