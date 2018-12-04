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

const NeueArtDesFeierns = () => {
  return (
    <Layout root="/">
      <Header imageUrl="/img/neue-art-des-feierns.png" />
      <HowItWorks />
      <Locations />
      <Lab />
      <FAQ />
      <Newsletter />
    </Layout>
  )
}

export default NeueArtDesFeierns
