import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Navi extends React.Component {
  render() {
    const { root, detail = false } = this.props

    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <div className="navbar-brand">
            <a href="#page-top">
              <div className="trialstore">Trial Store</div>
              <div className="subline">by GLOBUS</div>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navi
