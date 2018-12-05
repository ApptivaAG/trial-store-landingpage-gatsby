import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import get from 'lodash/get'

import '../scss/teaser.scss'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Header from 'components/Header'
import HowItWorks from 'components/HowItWorks'
import Locations from 'components/Locations'
import Lab from 'components/Lab'
import FAQ from 'components/FAQ'
import Newsletter from 'components/Newsletter'
import Mission from 'components/Mission'

const Index = ({ data, location }) => {
  return (
    <Layout root="/">
      <Meta site={get(data, 'site.meta')} />

      <Header image={data.hero.fluid}>
        <a className="js-scroll-trigger header-button" href="#locations">
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

      <section id="teaser">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Premium-Vielfalt zum Ausleihen</h2>
            <blockquote>Luxus ist, sich jeden Tag neu zu entscheiden!</blockquote>
            <p className="section-heading">
              Das Leben ändert sich ständig. Bleibe deshalb flexibel – mit der Premium-Vielfalt von GLOBUS. Bereichere
              dein Leben und leih' dir aus, was dir gefällt. Nur solange du's brauchst. Unkompliziert, online und zu
              einem Bruchteil des Kaufpreises.
            </p>
          </div>
          <div className="row bag-teaser">
            <div className="col-lg-6">
              <h2 className="section-heading text-uppercase">Trend</h2>
              <blockquote>Lass deine Traumtaschen wahr werden!</blockquote>
              <p className="text-muted">
                Entdecke jetzt die neuesten Luxus-Handtaschen der Saison. In der GLOBUS-Kollektion warten exklusive
                Modelle und Marken auf dich – von Lagerfeld über Mollerus, COACH, MCM bis hin zu Ralph Lauren. Wähle die
                Handtasche, die am besten zu dir passt und leih’ sie dir online aus: 100 Tage lang, für nur 25% des
                Preises. Und entscheide bis dahin, ob du sie behalten möchtest.
              </p>
              <Link className="btn btn-primary btn-xl" to="/leih-ich-mir/">
                Jetzt Handtasche wählen
              </Link>
            </div>
            <div className="col-lg-6">
              <Img fluid={data.bags.fluid} alt="Unterschiedliche Handtaschen in einer Reihe" />
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Locations />
      <Lab />
      <FAQ />
      <Mission />
      <Newsletter path={location.pathname} />
    </Layout>
  )
}

export default Index

export const rootQuery = graphql`
  query rootQuery {
    hero: imageSharp(fluid: { originalName: { regex: "/trialstore-root/" } }) {
      fluid(maxWidth: 2400, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    bags: imageSharp(fluid: { originalName: { regex: "/bags/" } }) {
      fluid(maxWidth: 1200, quality: 80) {
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
