import React, { Component } from 'react'
import './style.scss'
import ReactCountUp from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'

class Learnings extends Component {
  constructor(props) {
    super(props)
    this.circulationVisibilityChanged = this.circulationVisibilityChanged.bind(this)
    this.customersVisibilityChanged = this.customersVisibilityChanged.bind(this)
    this.state = { circulationVisible: false, customersVisible: false }
  }

  circulationVisibilityChanged(visible) {
    this.setState({ circulationVisible: visible })
  }

  customersVisibilityChanged(visible) {
    this.setState({ customersVisible: visible })
  }

  render() {
    return (
      <section id="learnings" className="learnings-section">
        <div className="container">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Transparenz</h2>
            <blockquote>Unsere Key-Learnings</blockquote>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="learnings-block">
                <h1 className="text-uppercase">1.8.2018</h1>
                <i className="fa fa-rocket fa-5x" />
              </div>
              <p>
                Unser Trialstore startete am 1. August 2018. Seither haben wir viele Experimente gestartet und unser
                Sortiment laufend angepasst.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <ReactVisibilitySensor onChange={this.circulationVisibilityChanged}>
                <div className="learnings-block">
                  <h1>
                    <ReactCountUp end={this.state.circulationVisible ? 100 : 0} duration="5" /> %
                  </h1>
                  <i className="fa fa-recycle fa-5x" />
                </div>
              </ReactVisibilitySensor>
              <p>
                Bis heute sind alle verliehenen Artikel noch im Umlauf. Die meisten sind noch bei der ersten Kundin.
                Einige warten im Globus-Outlet auf eine neue Käuferin oder haben die Besitzerin bereits gewechselt.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <ReactVisibilitySensor onChange={this.customersVisibilityChanged}>
                <div className="learnings-block">
                  <h1>
                    &gt; <ReactCountUp end={this.state.customersVisible ? 154 : 0} duration="5" />
                  </h1>
                  <i className="fa fa-users fa-5x" />
                </div>
              </ReactVisibilitySensor>
              <p>
                Bis heute haben wir im Pilot weit über 100 Kundinnen bedient. Wir haben mehr als 300 Interessentinnen
                auf Social Media, per Mail und persönlich in Workshops kennen gelernt. Danke allen Unterstützerinnen.
                Wir freuen uns weiterhin auf dein Feedback!
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Learnings
