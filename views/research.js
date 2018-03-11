var html = require('choo/html')
var wrapper = require('../components/wrapper')

module.exports = wrapper(view)

var TITLE = 'Research | Ali'

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <main class="sans-serif pa3">
      <h1>Research</h1>
      <p>My research focuses on narrative, theatre, and performance art in Latin American, the Caribbean, and larger global contexts. I research how geographic spaces transform the creation and reception of text and performance. Particularly, I investigate the effects of transnational movement in works that represent queer and transgender identities.</p>
      <p>Here are some of my interests:</p>
      <ul>
        <li>21st Century Latin American Performance</li>
        <li>Transnational and Diaspora Studies</li>
        <li>Queer Theory</li>
        <li>Transgneder Theory</li>
        <li>Performance Studies</li>
    </main>
  `
}
