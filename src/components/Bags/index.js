import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Bags = ({ children }) => (
  <section id="articles" className="article-wrapper">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">HANDTASCHEN AUF ZEIT</h2>
        <blockquote>Erfinde dich neu!</blockquote>
        <p className="section-heading">
          Wir haben für dich die angesagtesten Luxus-Handtaschen von Furla, Lagerfeld, MCM u.v.m. zusammengestellt. Sei
          spontan! Anstatt zu kaufen, leih dir jetzt dein exklusives Luxus-Modell – solange es dir gefällt.
        </p>
      </div>
      <p className="info-text">Nur Online und in allen teilnehmenden Filialen erhältlich!</p>
      <div id="product-list" className="row">
        {children}
      </div>
    </div>
  </section>
)

export default Bags
