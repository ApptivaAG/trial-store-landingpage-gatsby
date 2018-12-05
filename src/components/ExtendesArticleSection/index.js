import React from 'react'
import './style.scss'

const ExtendedArticleSection = ({ children, heading, backgroundColor, group }) => (
  <section id={group} className="article-section" style={{ backgroundColor }}>
    <div className="container">
      <blockquote>{heading}</blockquote>
      <div id="product-list" className="row">
        {children}
      </div>
    </div>
  </section>
)

export default ExtendedArticleSection
