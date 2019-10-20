
import React from 'react'
import Helmet from 'react-helmet'

import config from '../../data/SiteConfig'
import './index.css'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

export class MainLayout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div>
        <Helmet>
          <meta name='description' content={config.siteDescription} />
          <html lang='en' />
        </Helmet>
        <Header config={config} />
        {children}
        <Footer config={config} />
      </div>
    )
  }
}
