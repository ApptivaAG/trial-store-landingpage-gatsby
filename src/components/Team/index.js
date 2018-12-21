import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './style.scss'

const Team = ({ data }) => (
  <section id="team" className="bg-black">
    <div className="container text-center">
      <h2 className="section-heading text-uppercase">Trial Store Team</h2>
      <blockquote>Jeden Tag für den Trial Store engagiert</blockquote>
      <p className="section-heading">
        Wir suchen für euch die neusten Teile, versenden die Artikel, updaten die Webseite und vieles mehr. Bei Fragen
        stehen wir jederzeit zur Verfügung.
      </p>
      <p>Dein Trial Store Team.</p>

      <div className="row portraits">
        <div className="col-md-4">
          <Img fluid={data.cem.fluid} />
          <h3>Cem</h3>
          <p>
            "Aus tiefster Überzeugung das Nachhaltigkeit eine gemeinsame Verantwortung ist. Dank Trial Store ein
            nächster Schritt zum Wandel. Das leih ich mir in Zukunft!"
            <br />
            Gesamtverantwortlicher Trial Store
          </p>
        </div>
        <div className="col-md-4">
          <Img fluid={data.daniela.fluid} />
          <h3>Daniela</h3>
          <p>
            "Trial Store ist für mich Shopping-Freiheit mit gutem Gewissen. Ich kann Produkte für einen kurzen Moment
            nutzen und ein tolles Erlebnis damit haben oder Lieblingsteile draus machen. Beides sinnvolle
            Entscheidungen."
            <br />
            Brand Builder
          </p>
        </div>
        <div className="col-md-4">
          <Img fluid={data.philip.fluid} />
          <h3>Philip</h3>
          <p>
            "Ich will nur besitzen was ich liebe oder unbedingt brauche. Der Trail Store ermöglicht genau dies: Neuware
            zu Hause testen oder einfach nur für kurze Dauer nutzen. Top!"
            <br />
            Konzept Chef
          </p>
        </div>
        <div className="col-md-4">
          <Img fluid={data.nicole.fluid} />
          <h3>Nicole</h3>
          <p>
            "Trial Store ist für mich die neue Art des Shoppens. Jeden Monat werden von Globus-Experten die
            angesagtesten Produkte kuratiert. Das inspiriert und spart Zeit."
            <br />
            Design Guru
          </p>
        </div>
        <div className="col-md-4">
          <Img fluid={data.roman.fluid} />
          <h3>Roman</h3>
          <p>
            "Ich glaube an die Idee des Trial Stores, weil ich damit neue Dinge auszuprobieren kann, ohne meine
            Flexibilität einzubüssen."
            <br />
            Entwicklungsgenie
          </p>
        </div>
        <div className="col-md-4">
          <Img fluid={data.jill.fluid} />
          <h3>Jill</h3>
          <p>
            "Trial Store ist mein digitaler Kleiderschrank – immer aktuell und individuell! Egal ob die neuesten
            Kollektionen meiner liebsten Brands, All Time Favorites oder saisonale Must-Haves. Hier bekomme ich alles
            was ich will, solange wie ich will."
            <br />
            Marketing Kampagnen Boss
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        cem: imageSharp(fluid: { originalName: { regex: "/cem/" } }) {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        daniela: imageSharp(fluid: { originalName: { regex: "/daniela/" } }) {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        roman: imageSharp(fluid: { originalName: { regex: "/roman/" } }) {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        philip: imageSharp(fluid: { originalName: { regex: "/philip/" } }) {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        jill: imageSharp(fluid: { originalName: { regex: "/jill/" } }) {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        nicole: imageSharp(fluid: { originalName: { regex: "/nicole/" } }) {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    `}
    render={data => <Team data={data} {...props} />}
  />
)
