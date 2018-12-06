import React from 'react'
import './style.scss'

const ExtendedArticleSection = ({ children, heading, backgroundColor, group }) => (
  <section id={group} className="article-section" style={{ backgroundColor }}>
    <div className="container">
      <blockquote>{heading}</blockquote>
      <div id="product-list" className="row">
        {children}
      </div>
      <p className="text-center">
        * Nach Ablauf der 100 Tage werden die restlichen 75% des Betrages in Rechnung gestellt.
      </p>
    </div>
  </section>
)

export default ExtendedArticleSection
