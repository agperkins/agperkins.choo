var html = require('choo/html')
var wrapper = require('../components/wrapper')

module.exports = wrapper(view)

var TITLE = 'About Me | Ali'

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <main class="sans-serif pa3">
      <h1>Alexandra Gonzenbach Perkins</h1>
      <p>I'm 33 and learning to code</p>
    </main>
  `
}
