import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

class Locations extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMap: '' }
    this.handleFilialeClick = this.handleFilialeClick.bind(this)
  }

  handleFilialeClick(filiale) {
    this.setState({ showMap: filiale })
  }

  render() {
    return (
      <section id="locations">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Teilnehmende Filialen</h2>
              <blockquote>Hol’ dir deine Lieblingstasche vor Ort!</blockquote>
              <p className="section-heading">
                In den folgenden Flagship-Stores in Z&uuml;rich und St. Gallen kannst du trendige Designer Bags und
                viele weitere Premiumprodukte aus den Bereichen Fashion, Elektronik, Haushalt und Wohnen direkt
                ausleihen und abholen. Schau’ einfach mal rein und lass dich inspirieren. Unser Service-Personal vor Ort
                freut sich auf dich und berät dich gern!*
              </p>
            </div>
          </div>
          <div style={{ marginTop: '2em' }} className="row">
            <div className="col-lg-4 text-center">
              <img src="/img/locations/schweizergasse.jpg" alt="Fasade Globus Schweizergasse Zürich" />
              <h3>
                GLOBUS Z&uuml;rich Warenhaus <br />
                Schweizergasse 11
              </h3>
              <p>8001 Z&uuml;rich</p>
              <Link
                className="btn btn-primary js-location-schweizergasse"
                to="#location-links"
                onClick={() => this.handleFilialeClick('schweizergasse')}
              >
                Zur Filiale
              </Link>
            </div>
            <div className="col-lg-4 text-center">
              <img src="/img/locations/roesslitor.jpg" alt="Fasade Globus Rösslitor St. Gallen" />
              <h3>
                GLOBUS St. Gallen Warenhaus <br />
                Multergasse 47
              </h3>
              <p>9001 St. Gallen</p>
              <Link
                className="btn btn-primary js-location-multergasse"
                to="#location-links"
                onClick={() => this.handleFilialeClick('roesslitor')}
              >
                Zur Filiale
              </Link>
            </div>
            <div id="location-links" className="col-lg-4 text-center">
              <img src="/img/locations/vaadianstrasse.jpg" alt="Fasade Globus Vadiaanstrasse St. Gallen" />
              <h3>
                GLOBUS St. Gallen Warenhaus <br />
                Vaadianstrasse 11
              </h3>
              <p>9001 St. Gallen</p>
              <Link
                className="btn btn-primary js-location-vaadianstrasse"
                to="#location-links"
                onClick={() => this.handleFilialeClick('vaadianstrasse')}
              >
                Zur Filiale
              </Link>
            </div>
          </div>

          {this.state.showMap === 'schweizergasse' ? (
            <div id="mapSchweizer" className="row">
              <div className="col-lg-12 popup-warning">Bitte beim Kundendienst nach dem TRIAL STORE fragen.</div>
              <div className="col-lg-12">
                <iframe
                  title="Google Maps"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.8487454157225!2d8.53579145140853!3d47.37587051177883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a061193d549%3A0x753857550252252f!2sGLOBUS+Z%C3%BCrich+Warenhaus!5e0!3m2!1sen!2sch!4v1537104489336"
                  data-reactid="358"
                  width="100%"
                  height="550px"
                  frameBorder="0"
                />
              </div>
            </div>
          ) : (
            <></>
          )}

          {this.state.showMap === 'roesslitor' ? (
            <div id="mapMulter" className="row">
              <div className="col-lg-12">
                <iframe
                  title="Google Maps"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?q=GLOBUS,
          Multergasse 47, 9000 St. Gallen&amp;hl=de&amp;geocode=+&amp;hnear=GLOBUS+Multergasse 47,+St. Gallen&amp;t=m&amp;z=17&amp;iwloc=A&amp;output=embed"
                  data-reactid="358"
                  width="100%"
                  height="550px"
                  frameborder="0"
                />
              </div>
            </div>
          ) : (
            <></>
          )}

          {this.state.showMap === 'vaadianstrasse' ? (
            <div id="mapVaadian" className="row">
              <div className="col-lg-12">
                <iframe
                  id="mapVaadian"
                  title="Google Maps"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?q=GLOBUS,Vaadianstrasse 11, 9000 St. Gallen&amp;hl=de&amp;geocode=+&amp;hnear=GLOBUS+Vaadianstrasse 11+St. Gallen&amp;t=m&amp;z=17&amp;iwloc=A&amp;output=embed"
                  data-reactid="358"
                  width="100%"
                  height="550px"
                  frameborder="0"
                />
              </div>
            </div>
          ) : (
            <></>
          )}

          <p className="text-center">*Alle anderen Globus-Filialen sind derzeit noch ausgenommen von der Aktion.</p>
        </div>
      </section>
    )
  }
}

export default Locations
