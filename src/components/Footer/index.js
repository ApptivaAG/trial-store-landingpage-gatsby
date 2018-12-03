import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-6" style={{ textAlign: 'left' }}>
          <p className="copyright">© 2018 Trial Store by GLOBUS</p>
          <p>
            Tel. 058 455 21 11 <br />
            trialstore@globus.ch
          </p>
        </div>
        <div className="col-md-6">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a data-toggle="modal" data-target="#impressumModal">
                Impressum
              </a>
            </li>
            <li className="list-inline-item">
              <a data-toggle="modal" data-target="#agbsModal">
                Allgemeine Geschäftsbedingungen
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
