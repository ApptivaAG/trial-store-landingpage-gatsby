import React from 'react'
import './style.scss'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from 'components/Layout'
import SnipCart from 'components/SnipCart/index'

const Article = ({ data, pageContext, pageResources }) => {
  const { pathRoot, articleNumber } = pageContext
  const article = data.extendedArticlesJson
  const currentUrl = pageResources.page.path
  const currentVariation = article.variations.find(v => v.article === articleNumber)
  return (
    <Layout root={pathRoot}>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Img fluid={article.image.childImageSharp.fluid} />
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
      <SnipCart />
    </Layout>
  )
}

const VariationButton = (variation, active, currentUrl) => {
  const variationUrl = currentUrl.substr(0, currentUrl.lastIndexOf('/')) + '/' + variation.article
  return (
    <Link to={variationUrl} key={variation.article}>
      <span className={'variation ' + (active ? 'active' : '')}>{variation.name}</span>
    </Link>
  )
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
    extendedArticlesJson(variations: { elemMatch: { article: { eq: $articleNumber } } }) {
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
      }
    }
  }
`
