import React from 'react'
import emergence from 'emergence.js'

import Navi from 'components/Navi'
import Footer from 'components/Footer'
import { siteMetadata } from '../../../gatsby-config'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()

    // make scroll behavior of internal links smooth
    // eslint-disable-next-line global-require, no-undef
    require('smooth-scroll')('a[href*="#"]', {
      // integer or function returning an integer. How far to offset the scrolling anchor location in pixels
      offset: 40,
      speed: 200,
    })
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Navi title={siteMetadata.title} {...this.props} />
        {children}
        <Footer title={siteMetadata.title} author={siteMetadata.author} />
      </div>
    )
  }
}

export default Layout
