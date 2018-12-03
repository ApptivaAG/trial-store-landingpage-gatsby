import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Lab = () => (
  <section id="lab" className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <h2 className="section-heading text-uppercase">UMFRAGE & GEWINNSPIEL</h2>
          <blockquote>Deine Meinung ist viel Wert!</blockquote>
          <p className="section-heading">
            Sag uns, was du willst! Damit wir unser Angebot ständig optimieren können, brauchen wir deine Hilfe. Sag uns
            deine Meinung und sicher dir die Chance auf den Gewinn eines 20%-Gutscheins. Diesen kannst du beim nächsten
            Ausleihen einer Traumtasche oder eines anderen Produktes im Trial Store einlösen. Viel Glück
          </p>
          <p>
            <a
              className="btn btn-primary btn-xl lab-button"
              href="https://globustrialstore.typeform.com/to/OD0YSG"
              target="_blank"
            >
              Teilnehmen
            </a>
          </p>
        </div>
        <div className="col-lg-1" />
        <div className="col-lg-6 text-center">
          <img src="/img/voucher.jpg" alt="Handtasche vor rotem Hintergrund" />
        </div>
      </div>
    </div>
  </section>
)

export default Lab
