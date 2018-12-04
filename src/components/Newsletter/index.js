import React from 'react'
import './style.scss'

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.email === '') {
      /* eslint-disable-next-line no-alert */
      alert('Ups, ein zwingendes Feld ist noch nicht ausgefüllt.')
    } else {
      const body = encode({ ...this.state, ...this.props, 'form-name': 'newsletter-merged' })

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
        .then(() => {
          /* eslint-disable-next-line no-alert */
          alert('Danke! Wir haben Ihre Anmeldung erhalten.')
          this.setState({ email: '' })
        })
        .catch(error => {
          /* eslint-disable-next-line no-console */
          console.log('Error', error)
          /* eslint-disable-next-line no-alert */
          alert(
            `Leider hat dies nicht funktioniert. Entschuldigen Sie die Umstände. Wenden Sie sich bitte an trialstore@globus.ch.`
          )
        })
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { email } = this.state
    return (
      <form name="newsletter-merged" netlify="true" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="DEINE EMAIL EINGEBEN"
              value={email}
              onChange={this.handleChange}
              required
            />
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
    )
  }
}

const Newsletter = ({ path }) => (
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
      <NewsletterForm path={path} />
    </div>
  </>
)

export default Newsletter
