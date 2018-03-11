var html = require('choo/html')
var wrapper = require('../components/wrapper')

module.exports = wrapper(view)

var TITLE = 'Gallery | Ali'

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <main class="sans-serif pa3">
      <h1>Gallery</h1>
      <p>Research requires participation.</p>
      <p>From Lima to Chiapas, Miami to North Carolina, here are a few images of my participatory research</p>
      <img src="/assets/alicasalit.jpg" alt="Casa de Literatura">
      <img src="/assets/alidigitalgraffiti.jpg" alt="Digital Graffiti 2017, Alys Beach, FL">
      <img src="/assets/alireception.jpg" alt="Reception at UM">
      <img src="/assets/alistairs.jpg" alt="Poetry">
      <img src="/assets/ChiapasPerformance.jpg" alt="Performance in Chiapas">
      <img src="/assets/GalleryIsmael.jpg" alt="With Ismael Ogando">
      <img src="/assets/GalleryJosefina.jpg" alt="With Josefina Baez">
      <img src="/assets/LatinoGrantPhoto.jpg" alt="Grant Winners">
    </main>
  `
}
