import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const snowflake = (leftOrRight = 'left', key) => (
  <img
    style={{
      top: `${Math.random() * 20}vw`,
      [leftOrRight]: `${2 + Math.random() * 20}vw`,
      height: `${Math.random() * 6}vw`,
      transform: `rotate(${Math.random() * 50}deg)`,
    }}
    src="/img/snowflake.svg"
    alt=""
    key={key}
  />
)

const snowflakes = () => {
  var count
  var flakes = []
  for (count = 0; count < 8; count++) {
    flakes.push(snowflake('left', count))
  }
  for (count = 0; count < 8; count++) {
    flakes.push(snowflake('right', count + 8))
  }
  return flakes
}

const ExtendedArticleHeader = () => (
  <section id="articles" className="article-heading">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">HIGHLIGHTS IM DEZEMBER</h2>
        <blockquote>Leih’ dir aus, was dich gl&uuml;cklich macht.</blockquote>
        <p className="section-heading">
          Überrasch’ dich selbst! Im Ausleih-Store f&uuml;r Luxus hast du alle Freiheiten. Leih’ dir unsere
          Dezember-Highlights so lange du willst. Die neueste Mode, Accessoires und Gadgets der angesagtesten Brands
          wurden exklusiv von GLOBUS-Experten f&uuml;r dich kuratiert – f&uuml;r die festlichste Zeit des Jahres.
          <br />
          Viel Spass beim Feiern!
        </p>
      </div>
      <p className="info-text">Nur Online und in allen teilnehmenden Filialen erh&auml;ltlich!</p>
    </div>
    <div className="snowflakes">{snowflakes()}</div>
  </section>
)

export default ExtendedArticleHeader
