import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import get from 'lodash/get'
import filter from 'lodash/filter'

import '../scss/teaser.scss'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Header from 'components/Header'
import Locations from 'components/Locations'
import Lab from 'components/Lab'
import FAQ from 'components/FAQ'
import Newsletter from 'components/Newsletter'
import Mission from 'components/Mission'
import GroupNavi from 'components/GroupNavi'
import ExtendedArticleSection from 'components/ExtendesArticleSection'
import ArticlePreview from 'components/ArticlePreview'
import ExtendedArticleHeader from 'components/ExtendedArticleHeader'
import HowItWorksExtended from 'components/HowItWorksExtended'
import Team from 'components/Team'
import Learnings from 'components/Learnings/index'
import Freeze from 'components/Freeze/index'

const Index = ({ data, location }) => {
  const women = get(data, 'articles.edges')
  const bags = filter(women, { node: { subgroup: 'bags' } })
  const mode = filter(women, { node: { subgroup: 'mode' } })
  const accessoires = filter(women, { node: { subgroup: 'accessoires' } })

  return (
    <Layout root="/">
      <Meta site={get(data, 'site.meta')} />
      <Header image={data.hero.fluid} />

      <Freeze />

      <Team />
    </Layout>
  )
}

export default Index

export const rootQuery = graphql`
  query rootQuery {
    hero: imageSharp(fluid: { originalName: { regex: "/trialstore-freeze/" } }) {
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
    articles: allArticlesJson(sort: { fields: [sort], order: ASC }, filter: { group: { eq: "frauen" } }) {
      edges {
        node {
          group
          subgroup
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
