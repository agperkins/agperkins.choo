var html = require('choo/html')
var wrapper = require('../components/wrapper')

module.exports = wrapper(view)

var TITLE = 'Research | Ali'

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <main class="pa3">
      <h1>Research</h1>
      <p>How do we describe who we are? This question informs my research. From sonnets to selfies, fashion to photography, self-expression pushes artistic and cultural boundaries. I investigate how queer and transgender performers in Latin America use different media to represent key aspects of their identities.</p>
      <p>Here are my areas of research and the theoretical apparatuses I like to use:</p>
      <ul>
        <li>21st Century Latin American Performance</li>
        <li>Transnational and Diaspora Studies</li>
        <li>Queer Theory</li>
        <li>Transgender Theory</li>
        <li>Performance Studies</li>
    </main>
  `
}
