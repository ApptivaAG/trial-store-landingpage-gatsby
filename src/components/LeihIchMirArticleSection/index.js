import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const LeihIchMirArticleSection = ({ children }) => (
  <section className="article-section">
    <div className="container">
      <div id="product-list" className="row">
        {children}
      </div>
    </div>
  </section>
)

export default LeihIchMirArticleSection
