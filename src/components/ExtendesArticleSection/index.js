import React from 'react'
import './style.scss'

import wishImg from '../../../content/img/wish-box.svg'

const ExtendedArticleSection = ({ children, heading, backgroundColor, group }) => (
  <section id={group} className="article-section" style={{ backgroundColor }}>
    <div className="container">
      <blockquote>{heading}</blockquote>
      <div id="product-list" className="row">
        {children}
        <div className="col-6 col-lg-4">
          <a href="mailto:trialstore@globus.ch">
            <img src={wishImg} alt="Email" />
          </a>
          <h3>Nichts gefunden?</h3>
          <p className="wish-text">
            Lass uns wissen, was du gerne ausleihen möchtest und wir organiseren dir dein Lieblingsprodukt.
          </p>
          <a href="mailto:trialstore@globus.ch">
            <button className="btn btn-primary">Jetzt Produkt wünschen</button>
          </a>
        </div>
      </div>
      <p className="text-center">
        * Nach Ablauf der 100 Tage werden die restlichen 75% des Betrages in Rechnung gestellt.
      </p>
    </div>
  </section>
)

export default ExtendedArticleSection
