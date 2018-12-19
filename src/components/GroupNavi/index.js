import { Link } from 'gatsby'
import React from 'react'

import './style.scss'

const isActive = currentPath => ({ location }) => {
  return location.pathname === currentPath || location.pathname === currentPath + '/'
    ? { className: 'group-navi-bar-item active' }
    : { className: 'group-navi-bar-item' }
}

export default ({ children }) => (
  <section id="group-navi">
    <div className="container">
      <div className="group-navi-bar">
        <Link id="woman" to="/#group-navi" getProps={isActive('/')}>
          Für Sie
        </Link>
        <Link id="men" to="men#group-navi" getProps={isActive('/men')}>
          Für Ihn
        </Link>
        <Link id="home" to="home#group-navi" getProps={isActive('/home')}>
          Für Zuhause
        </Link>
      </div>
      <div className="group-navi-sublinks">{children}</div>
    </div>
  </section>
)
