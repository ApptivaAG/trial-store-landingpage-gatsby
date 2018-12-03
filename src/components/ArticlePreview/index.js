import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const ArticlePreview = ({ root, article }) => {
  return (
    <div className="col-lg-4">
      <Link to={root + article.node.urlPath + '/' + article.node.variations[0].article}>
        <img className="article-img" src={article.node.image} alt={article.node.name} />
      </Link>
      <h3>{article.node.name}</h3>
      <p>
        CHF {article.node.price25.toFixed(2)} für 100 Tage <br />
        <small>statt Vollpreis CHF {article.node.priceFull.toFixed(2)}*</small>
      </p>
      <p>
        {article.node.variationName}: {article.node.variations.map(v => v.name).join(', ')}
      </p>
      <Link to={root + article.node.urlPath + '/' + article.node.variations[0].article}>
        <button className="btn btn-primary">Ausleihen für 100 Tage</button>
      </Link>
    </div>
  )
}

export default ArticlePreview
