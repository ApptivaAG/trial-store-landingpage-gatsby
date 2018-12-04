import { graphql } from 'gatsby'
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
import ExtendedArticleHeader from 'components/ExtendedArticleHeader'
import ArticlePreview from 'components/ArticlePreview'
import ExtendedArticleSection from 'components/ExtendesArticleSection'

const NeueArtDesFeierns = ({ data, location }) => {
  const articles = get(data, 'articles.edges').sort((a, b) => {
    return a.node.sort - b.node.sort
  })
  const herren = articles.filter(a => a.node.group === 'herren')
  const frauen = articles.filter(a => a.node.group === 'frauen')
  const haushalt = articles.filter(a => a.node.group === 'haushalt')
  return (
    <Layout root="/neue-art-des-feierns/">
      <Meta site={get(data, 'site.meta')} />
      <Header image={data.hero.fluid} />
      <ExtendedArticleHeader />
      <ExtendedArticleSection heading="Herren – Ausleihen mit Stil">
        {herren.map((article, i) => (
          <ArticlePreview root="neue-art-des-feierns/" article={article} key={i} />
        ))}
      </ExtendedArticleSection>
      <ExtendedArticleSection heading="Frauen – Dein Blickfang f&uuml;r den Winter">
        {frauen.map((article, i) => (
          <ArticlePreview root="neue-art-des-feierns/" article={article} key={i} />
        ))}
      </ExtendedArticleSection>
      <ExtendedArticleSection heading="Haushalt – Highlights f&uuml;r deine vier W&auml;nde">
        {haushalt.map((article, i) => (
          <ArticlePreview root="neue-art-des-feierns/" article={article} key={i} />
        ))}
      </ExtendedArticleSection>
      <HowItWorks />
      <Locations />
      <Lab />
      <FAQ />
      <Newsletter path={location.pathname} />
    </Layout>
  )
}

export default NeueArtDesFeierns

export const feiernQuery = graphql`
  query feiernQuery {
    hero: imageSharp(fluid: { originalName: { regex: "/neue-art-des-feierns/" } }) {
      fluid(maxWidth: 2400, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
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
    articles: allArticlesJson(sort: { fields: [priceFull], order: DESC }) {
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
