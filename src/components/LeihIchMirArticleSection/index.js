import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const LeihIchMirArticleSection = ({ group, children }) => (
  <section id={group} className="article-section">
    <div className="container">
      <div id="product-list" className="row">
        {children}
      </div>
      <p className="text-center">
        * Nach Ablauf der 100 Tage werden die restlichen 75% des Betrages in Rechnung gestellt.
      </p>
    </div>
  </section>
)

export default LeihIchMirArticleSection
