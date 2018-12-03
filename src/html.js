import React from 'react'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'prismjs/themes/prism-okaidia.css'
import 'font-awesome/css/font-awesome.css'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="de">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {this.props.headComponents}
          <link rel="apple-touch-icon" sizes="57x57" href="/img/favicons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/img/favicons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/img/favicons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/img/favicons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/img/favicons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/img/favicons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/img/favicons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/img/favicons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/img/favicons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/img/favicons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/favicon-16x16.png" />
        </head>
        <body id="page-top">
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}

          <script
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
            id="jquery"
            type="text/javascript"
          />
          <script
            src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
            id="snipcart"
            data-api-key="YzAwODQyZjgtODMzNi00NWZjLTljOGYtODY1NGJmY2M4ZGYzNjM2NzU4MTcwNzI0MTI4Njcy"
            data-cart-custom1-name="Jahrgang"
            data-cart-custom1-required="true"
            data-cart-custom2-name="Allgemeine Geschäftsbedingungen akzeptieren"
            data-cart-custom2-options="true|false"
            data-cart-custom2-required="true"
            type="text/javascript"
          />
          <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
          <script type="text/javascript" src="/locale/de.js" />

          <script id="cart-content-text" type="text/template">
            <div className="custom-snipcart-footer-text">
              <h2>* So einfach funktioniert die Bezahlung</h2>
              <p>
                Für jedes ausgewählte Produkt bezahlst du die ersten 100 Tage eine einmalige Ausleihgebühr von 25% des
                Originalpreises. Diesen Betrag zahlst du bequem per Rechnung.
              </p>
              <p>
                Die Ausleihphase beginnt, sobald du das Produkt erhältst. In dieser Zeit kannst du den Artikel ausgiebig
                testen.
              </p>
              <p>
                Wenn du das Produkt nach Ablauf der 100 Tage weiterhin behältst, bekommst du automatisch eine zweite und
                letzte Rechnung über die restlichen 75% des Originalpreises. Mit der Überweisung gehört der Artikel dir.
                Keine versteckten Kosten, keine Zinsen, kein Risiko.
              </p>
              <a data-toggle="modal" data-target="#agbsModal">
                Allgemeine Geschäftsbedingungen
              </a>
            </div>
          </script>
        </body>
      </html>
    )
  }
}
