import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const ExtendedArticleSection = ({ children, heading }) => (
  <section className="article-section">
    <div className="container">
      <blockquote>{heading}</blockquote>
      <div id="product-list" className="row">
        {children}
      </div>
    </div>
  </section>
)

export default ExtendedArticleSection
