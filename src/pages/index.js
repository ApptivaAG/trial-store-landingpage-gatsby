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

const Index = ({ data, location }) => {
  return (
    <Layout root="/">
      <Header image={data.hero.fluid} />
      <HowItWorks />
      <Locations />
      <Lab />
      <FAQ />
      <Newsletter path={location.pathname} />
    </Layout>
  )
}

export default Index

export const rootQuery = graphql`
  query rootQuery {
    hero: imageSharp(fluid: { originalName: { regex: "/root/" } }) {
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
  }
`
