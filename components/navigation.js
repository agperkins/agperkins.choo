var html = require('choo/html')

module.exports = navigation

function navigation () {
  return html`
    <nav class="pa3">
        <a class="navlink" href="/">About Me</a> |
        <a class="navlink" href="/research/">Research</a> |
        <a class="navlink" href="/publications/">Publications</a> |
        <a class="navlink" href="/teaching/">Teaching</a> |
        <a class="navlink" href="/gallery/">Gallery</a> |
        <a class="navlink" href="/contactme/">Contact Me</a> |
        <a class="navlink" href="/cv/">CV</a>
      </nav>
  `
}
