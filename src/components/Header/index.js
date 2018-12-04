import Img from 'gatsby-image'
import React from 'react'
import './style.scss'

const Header = ({ image, children }) => (
  <header className="masthead">
    <Img fluid={image} />
    {children}
  </header>
)

export default Header
