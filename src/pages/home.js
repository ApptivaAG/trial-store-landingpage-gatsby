import { graphql, Link } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import filter from 'lodash/filter'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Header from 'components/Header'
import HowItWorks from 'components/HowItWorks'
import Locations from 'components/Locations'
import Lab from 'components/Lab'
import FAQ from 'components/FAQ'
import Newsletter from 'components/Newsletter'
import ArticlePreview from 'components/ArticlePreview'
import Mission from 'components/Mission'
import GroupNavi from 'components/GroupNavi'
import ExtendedArticleHeader from 'components/ExtendedArticleHeader'
import ExtendedArticleSection from 'components/ExtendesArticleSection'
import HowItWorksExtended from 'components/HowItWorksExtended'
import Team from 'components/Team'

const Home = ({ data, location }) => {
  const home = get(data, 'articles.edges')
  console.log('home', home)
  const heimUndHaushalt = filter(home, { node: { subgroup: 'haushalt' } })
  const dekoration = filter(home, { node: { subgroup: 'dekoration' } })
  return (
    <Layout root="/home/">
      <Meta site={get(data, 'site.meta')} />
      <Header image={data.hero.fluid}>
        <a className="js-scroll-trigger header-button" to="/men/#locations">
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
        </a>
      </Header>
      <ExtendedArticleHeader />
      <GroupNavi>
        <div style={{ textAlign: 'right' }}>
          <a href="#haushalt">Heim &amp; Haushalt</a>
          <a href="#dekoration">Dekoration</a>
        </div>
      </GroupNavi>
      <ExtendedArticleSection heading="Heim und Haushalt" group="haushalt">
        {heimUndHaushalt.map((article, i) => (
          <ArticlePreview root="home/" article={article} key={i} />
        ))}
      </ExtendedArticleSection>
      <ExtendedArticleSection heading="Dekoration" group="dekoration">
        {dekoration.map((article, i) => (
          <ArticlePreview root="home/" article={article} key={i} />
        ))}
      </ExtendedArticleSection>
      <HowItWorksExtended />
      <Team />
      <Locations />
      <Lab />
      <FAQ />
      <Mission />
      <Newsletter path={location.pathname} />
    </Layout>
  )
}

export default Home

export const homeQuery = graphql`
  query homeQuery {
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
    hero: imageSharp(fluid: { originalName: { regex: "/trialstore-root/" } }) {
      fluid(maxWidth: 2400, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    articles: allArticlesJson(sort: { fields: [sort], order: ASC }, filter: { group: { eq: "haushalt" } }) {
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
