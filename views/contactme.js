var html = require('choo/html')
var obfuscate = require('obfuscate')

var wrapper = require('../components/wrapper')

module.exports = wrapper(contactme)

var TITLE = 'Contact Me | Ali'

function contactme (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <main class="sans-serif pa3">
      <h1>Where to Find Me</h1>
      <p>You can email me at ${obfuscate({
    email: 'aperkins@ua.edu',
    subject: 'Love your website!'
  })}</p>
      <p><p>Check my academia.edu <a href="http://crimson.academia.edu/AlexandraGonzenbachPerkins">page</a> for copies of my publications and syllabi.</p>
    </main>
  `
}
