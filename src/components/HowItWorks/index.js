import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const HowItWorks = () => (
  <section id="howitworks" className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">SO FUNKTIONIERT’S</h2>
          <blockquote>Fast zu einfach, um wahr zu sein.</blockquote>
          <p className="section-heading">In drei Schritten zu deiner Luxus-Tasche.</p>
        </div>
      </div>
      <div id="steps" className="row text-center">
        <div className="col-md-4">
          <img src="/img/how/icon-auswahl.svg" />
          <h3>AUSWÄHLEN</h3>
          <p className="text-muted">
            Die Qual der Wahl: Entscheide dich für deine neue Premium-Handtasche. Mit nur einem Klick kannst du sie nach
            Hause liefern lassen oder im GLOBUS Warenhaus in deiner Nähe abholen
          </p>
        </div>
        <div className="col-md-4">
          <img src="/img/how/icons-auswahl.svg" />
          <h3>AUSLEIHEN</h3>
          <p className="text-muted">
            Anstatt die Tasche gleich zu kaufen, kannst du sie dir 100 Tage lang für nur 25% des Preises ausleihen.
            Danach kannst du sie für den Restbetrag von 75% des Preises kaufen! So kannst du testen, ob das Modell
            wirklich zu dir passt.
          </p>
        </div>
        <div className="col-md-4">
          <img src="/img/how/icon-retour-oder-behalten.svg" />
          <h3>BEHALTEN ODER ZURÜCKGEBEN</h3>
          <p className="text-muted">
            Ob nur für heute oder für immer entscheidest du. In der Ausleihphase kannst du die Tasche jederzeit
            zurückschicken. Aber keine Sorge – bevor der Trennungsschmerz einsetzt , leihst du dir einfach die nächste.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default HowItWorks
