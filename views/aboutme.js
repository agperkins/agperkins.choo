var html = require('choo/html')
var wrapper = require('../components/wrapper')

module.exports = wrapper(view)

var TITLE = 'About Me | Ali'

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <main class="sans-serif pa3">
      <h1>Alexandra Gonzenbach Perkins, Ph.D.</h1>
      <p>I am an Instructor of Spanish at The University of Alabama.</p>
      <p>I enjoy pretentious photos, yoga, running, performance art, and software engineering.</p>
      <img src="/assets/han.jpg" alt="me">
    </main>
  `
}
