import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from 'components/Layout'

import './style.scss'

const Article = ({ data, pageContext, location }) => {
  const { pathRoot, articleNumber } = pageContext
  const article = data.articles
  const currentUrl = location.pathname
  const currentVariation = article.variations.find(v => v.article === articleNumber)
  const fluidImage = currentVariation.image
    ? currentVariation.image.childImageSharp.fluid
    : article.image.childImageSharp.fluid
  return (
    <Layout root={pathRoot} detail>
      <section id="article">
        <div className="container">
          <div className="back">
            <Link to={`${pathRoot}#${article.group}`}>
              <svg viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="11" x2="11" y2="1" strokeWidth="2" />
                <line x1="1" y1="1" x2="11" y2="11" strokeWidth="2" />
              </svg>
              Zurück zur Übersicht
            </Link>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Img fluid={fluidImage} />
            </div>
            <div className="col-lg-6">
              <h2>{article.name}</h2>
              <p>
                CHF {article.price25.toFixed(2)} für 100 Tage <br />
                <small>statt Vollpreis CHF {article.priceFull.toFixed(2)}*</small>
              </p>
              <p className="variations">
                {article.variationName}:<br />
                {article.variations.map(v => VariationButton(v, v.article === articleNumber, currentUrl))}
              </p>
              <p>
                <button
                  className="snipcart-add-item btn btn-primary"
                  data-item-id={articleNumber}
                  data-item-name={article.name + ' ' + article.variationName + ' ' + currentVariation.name}
                  data-item-price={article.price25}
                  data-item-url={currentUrl}
                  data-item-description={`Vollpreis CHF ` + article.priceFull.toFixed(2)}
                  data-item-custom1-name="75% nach 100 Tagen*"
                  data-item-custom1-value={`CHF ` + (article.priceFull - article.price25).toFixed(2)}
                >
                  Ausleihen f&uuml;r 100 Tage
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

const VariationButton = (variation, active, currentUrl) => {
  const variationUrl = currentUrl.substr(0, currentUrl.lastIndexOf('/')) + '/' + variation.article
  if (variation.color) {
    const style = { background: variation.color }
    const className = 'variation-with-color ' + (active ? 'variation-with-color-active' : '')
    return (
      <Link to={variationUrl} key={variation.article}>
        <span className={className} style={style} />
      </Link>
    )
  } else {
    const className = 'variation ' + (active ? 'variation-active' : '')
    return (
      <Link to={variationUrl} key={variation.article}>
        <span className={className}>{variation.name}</span>
      </Link>
    )
  }
}
export default Article

export const pageArticleQuery = graphql`
  query PageArticle($articleNumber: Int!) {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    articles: articlesJson(variations: { elemMatch: { article: { eq: $articleNumber } } }) {
      id
      group
      urlPath
      name
      image {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      priceFull
      price25
      variationName
      variations {
        name
        article
        color
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
