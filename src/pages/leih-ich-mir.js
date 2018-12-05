import { graphql, Link } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Header from 'components/Header'
import HowItWorks from 'components/HowItWorks'
import Locations from 'components/Locations'
import Lab from 'components/Lab'
import FAQ from 'components/FAQ'
import Newsletter from 'components/Newsletter'
import LeihIchMirArticleHeader from 'components/LeihIchMirArticleHeader'
import LeihIchMirArticleSection from 'components/LeihIchMirArticleSection'
import ArticlePreview from 'components/ArticlePreview'
import Mission from 'components/Mission'

const DasLeihIchMir = ({ data, location }) => {
  const articles = get(data, 'articles.edges')
  return (
    <Layout root="/leih-ich-mir/">
      <Meta site={get(data, 'site.meta')} />
      <Header image={data.hero.fluid}>
        <Link className="js-scroll-trigger header-button" to="/leih-ich-mir/#locations">
          <div className="round-button">
            <div>
              Nur Online <br />
              und in allen teilnehmenden Filialen.
              <br />
              <u>
                <small>MEHR</small>
              </u>
            </div>
          </div>
        </Link>
      </Header>
      <LeihIchMirArticleHeader />
      <LeihIchMirArticleSection>
        {articles.map((article, i) => (
          <ArticlePreview root="leih-ich-mir/" article={article} key={i} />
        ))}
      </LeihIchMirArticleSection>
      <HowItWorks />
      <Locations />
      <Lab />
      <FAQ />
      <Mission />
      <Newsletter path={location.pathname} />
    </Layout>
  )
}

export default DasLeihIchMir

export const feiernQuery = graphql`
  query leihenQuery {
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
    hero: imageSharp(fluid: { originalName: { regex: "/das-leih-ich-mir-dez/" } }) {
      fluid(maxWidth: 2400, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    articles: allArticlesJson(sort: { fields: [sort], order: ASC }, filter: { group: { eq: "bags" } }) {
      edges {
        node {
          group
          urlPath
          sort
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
          mainVariation
          variations {
            name
            article
          }
        }
      }
    }
  }
`