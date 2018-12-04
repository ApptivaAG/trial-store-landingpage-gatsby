import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import './style.scss'

const Header = ({ image }) => (
  <header className="masthead">
    <Img fluid={image} /> <Link className="js-scroll-trigger header-button" to="/#locations" />
  </header>
)

export default Header
