import React from 'react'

import './style.scss'
import Logo from '../../../content/img/trial-store-logo.svg'

const Mission = () => (
  <section id="mission" className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="section-heading text-uppercase">UNSERE MISSION</h2>
          <blockquote>Die neue Freiheit des Ausleihens</blockquote>
          <p>Der Trial Store ist ein Innovationsprojekt von Globus. </p>
          <p>
            Wir bieten dir die Freiheit des Ausleihens. Künftig kannst du im Trial Store aktuelle Premiumprodukte aus
            den Bereichen Elektronik, Fashion, Haushalt und Wohnen einfach ausleihen. In ausgewählten Flagship-Stores in
            Zurich und St.Gallen kannst du das Angebot bereits nutzen.
          </p>
          <p>
            Unsere Mission ist es, dein Leben durch flexible Ausleihmodelle noch einfacher und flexibler zu gestalten
            und so „Shareability“ und Nachhaltigkeit zu fördern.
          </p>
          <p>
            Deshalb sind uns deine Anregungen, Fragen und Wünsche wichtig. Auf diese Weise können wir kontinuierlich
            besser werden und dir tolle Angebote machen. Wir freuen uns auf deine Ideen!
          </p>
          <p>
            Herzliche Grüsse,
            <br />
            Dein Trial Store Team
          </p>
        </div>
        <div className="col-lg-1" />
        <div className="col-lg-3 vertical-center">
          <img src={Logo} alt="Trial Store by Globus" />
        </div>
      </div>
    </div>
  </section>
)

export default Mission
