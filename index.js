var css = require('sheetify')
var choo = require('choo')

css('tachyons')
css('./styles/styles.css')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/clicks'))

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))
app.route('/aboutme', require('./views/aboutme'))
app.route('/research', require('./views/research'))
app.route('/publications', require('./views/publications'))
app.route('/gallery', require('./views/gallery'))
app.route('/contactme', require('./views/contactme'))
app.route('/cv', require('./views/cv'))
app.route('/teaching', require('./views/teaching'))

if (!module.parent) app.mount('body')
else module.exports = app
