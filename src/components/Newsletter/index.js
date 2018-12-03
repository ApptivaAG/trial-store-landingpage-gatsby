import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Newsletter = () => (
  <>
    <section id="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="section-heading text-uppercase">Newsletter</h2>
            <blockquote>
              Trendsetter sind <br />
              immer Up-to-Date!
            </blockquote>
            <p>
              Mit unserem Newsletter bist du immer top-informiert. Egal ob über die neusten Angebote oder Aktionen – wir
              versorgen dich mit allem, was ein Fashion- und Lifestyle-Trendsetter wissen muss.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="container" id="newsletter-form">
      <form name="newsletter-leih-ich" method="POST" action="/leih-ich-mir/registered" netlify="true">
        <div className="row">
          <div className="col-lg-6">
            <input className="form-control" type="email" name="email" placeholder="DEINE EMAIL EINGEBEN" required />
          </div>
          <div className="col-lg-6">
            <button className="btn btn-primary text-uppercase" type="submit">
              Registrieren
              <svg viewBox="0 0 44 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                  d="M 0,10 L 40,10 M 30, 0 L 40, 10 M 30, 20 L 40, 10"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  </>
)

export default Newsletter
