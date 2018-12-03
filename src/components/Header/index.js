import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Header = ({ imageUrl }) => (
  <header className="masthead">
    <img src={imageUrl} /> <Link className="js-scroll-trigger header-button" to="/#locations" />
  </header>
)

export default Header
