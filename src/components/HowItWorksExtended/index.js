import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const HowItWorksExtended = () => (
  <section id="howitworks" className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">SO FUNKTIONIERT’S</h2>
          <blockquote>Fast zu einfach, um wahr zu sein.</blockquote>
          <p className="section-heading">In drei Schritten zu deinem Luxus-Highlight.</p>
        </div>
      </div>
      <div id="steps" className="row text-center">
        <div className="col-md-4">
          <img src="/img/how/icon-auswahl.svg" />
          <h3>AUSWÄHLEN</h3>
          <p className="text-muted">
            Die Qual der Wahl: Entscheide dich für dein neues Premium-Produkt. Mit nur einem Klick kannst du es nach
            Hause liefern lassen oder im GLOBUS Warenhaus in deiner Nähe abholen.
          </p>
        </div>
        <div className="col-md-4">
          <img src="/img/how/icons-auswahl.svg" />
          <h3>AUSLEIHEN</h3>
          <p className="text-muted">
            Anstatt dein Produkt gleich zu kaufen, kannst du es dir 100 Tage lang für nur 25% des Preises ausleihen. Und
            das Beste: Danach ist dein Luxus-Highlight dein! So kannst du testen, ob es wirklich zu dir passt.
          </p>
        </div>
        <div className="col-md-4">
          <img src="/img/how/icon-retour-oder-behalten.svg" />
          <h3>BEHALTEN ODER ZURÜCKGEBEN</h3>
          <p className="text-muted">
            Ob nur für heute oder für immer entscheidest du. In der Ausleihphase kannst du dein Produkt jederzeit
            zurückschicken. Aber keine Sorge – bevor der Trennungsschmerz einsetzt, leihst du dir einfach den nächsten
            Hingucker.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default HowItWorksExtended
