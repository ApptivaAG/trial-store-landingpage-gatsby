import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Navi extends React.Component {
  render() {
    const { root, title } = this.props

    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <div className="navbar-brand">
            <a href="#page-top">
              <div className="trialstore">Trial Store</div>
              <div className="subline">by GLOBUS</div>
            </a>
          </div>
          <Link className="nav-locations text-uppercase js-scroll-trigger" to={root + '#articles'}>
            Produkte
          </Link>
          <Link className="nav-locations text-uppercase js-scroll-trigger" to={root + '#howitworks'}>
            So funktionierts
          </Link>
          <Link to={root} className="snipcart-checkout nav-locations text-uppercase">
            Warenkorb
          </Link>
        </div>
      </nav>
    )
  }
}

export default Navi
