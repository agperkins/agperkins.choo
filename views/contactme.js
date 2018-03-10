var html = require('choo/html')
var wrapper = require('../components/wrapper')

module.exports = wrapper(contactme)

var TITLE = 'Contact Me | Ali'

function contactme (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <main class="sans-serif pa3">
      <h1>Contact Me, Losers</h1>
      <p>I'm 33 and learning to code</p>
    </main>
  `
}
