import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

class Modal extends React.Component {
  constructor() {
    super()
    this.state = { open: false }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    window.addEventListener('modal-open', this.handleOpen)
  }

  handleOpen(e) {
    if (e.detail !== undefined && e.detail !== '') {
      this.setState(prev => ({ open: !prev.open, target: e.detail }))
      e.preventDefault()
    }
    if (e.target.closest !== undefined && e.target.closest('.dismiss') !== null) {
      this.setState({ open: false })
      e.preventDefault()
    }
  }

  handleClick(e) {
    window.dispatchEvent(new CustomEvent('modal-open', { detail: e.target.dataset.target }))
  }

  render() {
    return (
      <div onClick={this.handleClick} role="presentation">
        {this.props.children}
        {this.state.open && this.state.target === 'agbs' && <AGBs />}
        {this.state.open && this.state.target === 'impressum' && <Impressum />}
      </div>
    )
  }
}

const Footer = ({ author, title }) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-6" style={{ textAlign: 'left' }}>
          <p className="copyright">© 2018 Trial Store by GLOBUS</p>
          <p>
            Tel. 044 504 83 00 <br />
            trialstore@globus.ch
          </p>
        </div>
        <div className="col-md-6">
          <Modal>
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a data-toggle="modal" data-target="impressum">
                  Impressum
                </a>
              </li>
              <li className="list-inline-item">
                <a data-toggle="modal" data-target="agbs">
                  Allgemeine Geschäftsbedingungen
                </a>
              </li>
            </ul>
          </Modal>
        </div>
      </div>
    </div>
  </footer>
)

const Impressum = () => (
  <div className="modal-gatsby" tabIndex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal">
          <div class="dismiss">
            <svg viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="11" x2="11" y2="1" stroke="black" strokeWidth="2" />
              <line x1="1" y1="1" x2="11" y2="11" stroke="black" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <h2 class="text-uppercase">Impressum</h2>
                <p>
                  Magazine zum Globus AG
                  <br />
                  Lintheschergasse 7<br /> 8001 Zürich
                  <br />
                  Tel. 044 504 83 00
                  <br />
                  trialstore@globus.ch
                </p>
                <p>
                  Firmensitz: 8001 Zürich (ZH)
                  <br />
                  UID-Nummer: CHE-105.839.536 MWST
                </p>
                <button class="btn btn-primary dismiss" type="button">
                  <i class="fa fa-times" />
                  Schliessen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const AGBs = () => (
  <div className="modal-gatsby" style={{ display: 'block' }} tabIndex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal">
          <div class="dismiss">
            <svg viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="11" x2="11" y2="1" stroke="black" strokeWidth="2" />
              <line x1="1" y1="1" x2="11" y2="11" stroke="black" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div class="container">
          <div class="modal-body">
            <h2>Trial Store Allgemeine Geschäftsbedingungen</h2>
            <h3>Allgemein</h3>
            <p>
              Im Rahmen dieser Vereinbarung bist Du berechtigt, am Gültigkeitstag Wareneinkäufe bis zu dem von der
              Filiale bewilligten Kaufbetrag gegen Rechnung zu tätigen. Personalrabatte und Bestellungen sind vom Trial
              Store-Angebot ausgeschlossen.
            </p>
            <h3>Fakturierung</h3>
            <p>
              Entsprechend den vereinbarten Trial Store-Kondition werden die getätigten Trial Store-Käufe fakturiert.
              Zahlungen, Warenbezüge und Retouren, die sich mit den Abrechnungen kreuzen, werden auf einer weiteren,
              nachfolgenden Rechnung (Kontoauszug) berücksichtigt. Sofern unsere Abrechnungen nicht innert 2 Wochen ab
              Rechnungsdatum beanstandet werden, gilt der ausgewiesene Saldo als genehmigt.
            </p>
            <h3>Retouren</h3>
            <p>
              Trial Store-Käufe können innerhalb der Laufzeit der Trial Store-Kondition NUR in einer der genannten
              Filialen retourniert werden. Ausser den bisher verrechneten Kosten entstehen bei Retouren innerhalb der
              Laufzeit für den Kunden keine weiteren Kosten. Jede angebrochene Zeiteinheit (Monat oder Tag) wird als
              ganze Einheit verrechnet. Verrechnete Zeiteinheiten werden nicht zurückerstattet. Allfällige
              Rückerstattungen (entsprechend Trial Store-Konditionen) werden auf das jeweilige Kundenkonto per
              Bank/Postüberweisung getätigt (IBAN Zwingend).
            </p>
            <h3>Bonus</h3>
            <p>
              Trial Store-Käufe können nicht mit der PlusCard bezahlt werden. Entsprechend besteht für den Kunden kein
              Anspruch auf Bonus-Punkte.
            </p>
            <h3>Zahlung</h3>
            <p>
              Unsere Rechnungen sind bei Erhalt fällig und vollständig (ohne jegliche Abzüge) innert 20 Tag ab
              Rechnungsdatum zahlbar.
            </p>
            <h3>Trial Store-Kondition</h3>
            <p>
              Der Artikel wird für 25 % des Verkaufspreises für 100 Tag ausgeliehen. Retournieren Sie den Artikel
              innerhalb der 100 Tage, entstehen keine weiteren Kosten. Behalten Sie die Ware länger als 100 Tage,
              verrechnen wir Ihnen die restlichen 75 % und die Ware gehört Ihnen.
            </p>
            <h3>Gerichtsstand</h3>
            <p>
              Dieser Vertrag untersteht dem schweizerischen Recht. Mit der Bestellung bestätigst Du die Richtigkeit der
              gemachten Angaben, dass Du in geordneten finanziellen Verhältnissen lebst und zum Abschluss dieses
              Vertrags berechtigt bist (nicht minderjährig, nicht bevormundet). Ebenfalls anerkennst Du den Kaufbetrag
              und erklärst dich mit den aufgeführten Bedingungen einverstanden. Du ermächtigst die Firma Magazine zum
              Globus AG sämtliche für die Prüfung dieses Vertrages erforderlichen Auskünfte bei Ämtern, Auskunfteien und
              der Zentralstelle für Kreditinformationen (ZEK) einzuholen.ges erforderlichen Auskünfte bei Ämtern,
              Auskunfteien und der Zentralstelle für Kreditinformationen (ZEK) einzuholen.ges erforderlichen Auskünfte
              bei Ämtern, Auskunfteien und der Zentralstelle für Kreditinformationen (ZEK) einzuholen.
            </p>
            <button class="btn btn-primary" data-dismiss="modal" type="button">
              <i class="fa fa-times" />
              Schliessen
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
