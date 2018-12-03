import React from 'react'
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
          <a className="nav-locations text-uppercase js-scroll-trigger" href={root + '#articles'}>
            Produkte
          </a>
          <a className="nav-locations text-uppercase js-scroll-trigger" href={root + '#howitworks'}>
            So funktionierts
          </a>
          <a href={root} className="snipcart-checkout nav-locations text-uppercase">
            Warenkorb
          </a>
        </div>
      </nav>
    )
  }
}

export default Navi
