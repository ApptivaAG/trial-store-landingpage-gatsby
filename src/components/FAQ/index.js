import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const FAQ = () => (
  <section id="faq">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">FAQ</h2>
          <blockquote>Damit keine Fragen offen bleiben.</blockquote>
          <p style={{ marginBottom: '3em' }}>
            Wir wollen, dass du rundum glücklich bist. <br />
            Hier findest du all die Antworten, die dir noch zu deinem Glück fehlen.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <h3 className="faq-f">Kann es sein, dass ich ein "Occasion-Produkt" ausleihe?</h3>
          <p className="faq-a">Die gesamte Ware im Globus- und Trial Store ist neu und wurde noch nie verliehen.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <h3 className="faq-f">Wie läuft das Retournieren ab?</h3>
          <p className="faq-a">
            Innerhalb der Laufzeit kannst du deinen Artikel jederzeit in derselben Filiale retournieren, in der du ihn
            bekommen hast. Kontaktiere bitte einfach den Kundendienst vor Ort, lege die Quittung des Kaufes vor und
            begleiche die erste Rechnung. Wenn du die Ware innerhalb von 100 Tagen retournierst, erhältst du keine
            weitere Rechnung.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <h3 className="faq-f">Was passiert mit den Artikeln, die ich retourniere?</h3>
          <p className="faq-a">
            Unsere höchste Motivation ist, die Ware im Umlauf zu halten. Aktuell werden Artikel gekennzeichnet im Outlet
            ausgestellt, weitere Ansätze über Partnerschaften sind in Arbeit. Defekte Artikel werden umweltfreundlich
            recycelt.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h3 className="faq-f">Was passiert, wenn ich defekte Ware retourniere?</h3>
          <p className="faq-a">
            Solange der Artikel komplett retourniert wird, entstehen keine Kosten für dich. Bei defekten Artikeln prüfen
            wir in Absprache mit dem Hersteller, ob der Artikel repariert werden kann. Falls das nicht möglich ist, wird
            der Artikel umweltfreundlich recycelt.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <h3 className="faq-f">Wie läuft die Zahlung nach 100 Tagen ab?</h3>
          <p className="faq-a">
            Falls du den Artikel nach 100 Tagen noch nicht retourniert hast, gilt er als gekauft. Du erhältst von uns
            eine Rechnung über den Restbetrag.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <h3 className="faq-f">Wie kann sich das rentieren?</h3>
          <p className="faq-a">
            Mit diesem speziellen Service-Angebot möchte Globus neue Käufer erreichen und faszinieren. Dadurch erreicht
            Globus höhere Umsätze in den Filialen und stärkere Aufmerksamkeit – was sich wiederum positiv auf das
            Gesamtergebnis von Globus auswirkt.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default FAQ
