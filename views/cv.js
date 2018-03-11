var html = require('choo/html')
var wrapper = require('../components/wrapper')

module.exports = wrapper(view)

var TITLE = 'CV | Ali'

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <main class="sans-serif pa3">
      <h1>CV</h1>
      <p>Click below for all my info.</p>
      <a href="/assets/Perkins_CV_Public.pdf" download="Perkins_CV">Click away!</a>
    </main>
  `
}
