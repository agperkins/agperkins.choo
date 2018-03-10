var html = require('choo/html')

module.exports = view

function view (state, emit) {
  return html`
    <body class="sans-serif pa3">
      <h1>About Me, Losers</h1>
      <p>I'm 33 and learning to code</p>
    </body>
  `
}