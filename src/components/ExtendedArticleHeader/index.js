import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const ExtendedArticleHeader = () => (
  <section id="articles" className="article-heading">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">HIGHLIGHTS IM M&Auml;</h2>
        <blockquote>Leih’ dir aus, was dich gl&uuml;cklich macht.</blockquote>
        <p className="section-heading">
          Überrasch’ dich selbst! Im Ausleih-Store f&uuml;r Luxus hast du alle Freiheiten. Leih’ dir unsere
          M&Auml;-Highlights so lange du willst. Die neueste Mode, Accessoires und Gadgets der angesagtesten Brands
          wurden exklusiv von GLOBUS-Experten f&uuml;r dich kuratiert – freu dich auf den Fr&uuml;hling.
          <br />
          Viel Spass beim St&ouml;bern!
        </p>
      </div>
      <p className="info-text">Nur Online und in allen teilnehmenden Filialen erh&auml;ltlich!</p>
    </div>
  </section>
)

export default ExtendedArticleHeader
