var html = require('choo/html')
var wrapper = require('../components/wrapper')

module.exports = wrapper(view)

var TITLE = 'Teaching | Ali'

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <main class="sans-serif pa3">
      <h1>Teaching</h1>
      <p>Teaching is an opportunity to challenge, reconfigure, and affirm peoples' understanding of the world.</p>
      <p> My courses range from Spanish 101 to Advanced Seminars in Performance and Identity.</p>
      <p> Check it out:</p>
      <ul>
        <li>Bodies in text: The writing of the self from Autobiography to Facebook</li>
        <li>Narrativas del Boom y Post-Boom Latinoamericano</li>
        <li>Latino/a Literature and Culture</li>
        <li>Survey of Spanish American Literature</li>
        <li>Survey of Peninsular Literature</li>
        <li>Spanish American Civilization</li>
        <li>Spanish Conversation</li>
        <li>Advanced Grammar and Composition</li>
      <p> See below a performative vision of my work in the classroom:</p>
      <img src="/assets/Teaching.jpg" alt="Classroom">
    </main>
  `
}
