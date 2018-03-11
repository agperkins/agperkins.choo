var html = require('choo/html')
var wrapper = require('../components/wrapper')

module.exports = wrapper(view)

var TITLE = 'Publications | Ali'

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <main class="sans-serif pa3">
      <h1>Publications</h1>
      <p>I wrote a book!</p>
      <img src="/assets/Book.jpg" alt="Book">
      <p>Fluid Bodies traces the intersections of global movement with transgender and queer identities from authors and artists of the Hispanic Caribbean. Utilizing the theme of fluidity and travel, Fluid Bodies analyzes novels, graphic novels, theatre, and performance art. These works demonstrate how transgender and queer bodies redefine belonging, particularly national belonging, through global movement and community making practices.</p>
      <p>Check out this <a href="https://www.amazon.com/Representing-Queer-Transgender-Identity-Caribbean/dp/1611488427/ref=sr_1_1?ie=UTF8&qid=1520808027&sr=8-1&keywords=gonzenbach+perkins">link</a> to purchase a copy.</p>
      <p>Other publications:</p>
      <ul>
        <li>“We are family: Translocations of Queer Kinship in Mayra Santos-Febres’ Sirena Selena vestida de pena” <em>Chasqui</em> 46.1 (2017): 70-83.</li>
        <li>“Queer Affect and Transnational Movement in Yolanda Arroyo Pizarro’s Caparazones.” <em>Romance Studies</em> 34.2 (2016): 89-100.</li>
        <li>“Un pacto tácito: Escritura y poder en Autobiografía del esclavo poeta de Juan Francisco Manzano.” <em>Decimonónica</em> 11.2 (2014): 52-69.</li>
        <li>“Loose Tongues/Promiscuous Identities: Linguistic Register and Code-switching as Catalysts of Intersectionality in ‘Pollito Chicken’ and Dominicanish.” <em>Letras Femeninas</em> 39.2 (2013): 9-25. Winner of the Tenth Annual Feministas Unidas Graduate Student Essay Prize, 2012</li>
        <li>“Bleeding Borders: Abjection and Female Body Art.” <em>Letras Femeninas</em> 37.1 (2011): 31-46.</li>

    </main>
  `
}
