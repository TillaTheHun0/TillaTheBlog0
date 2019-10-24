
import React from 'react'
import Helmet from 'react-helmet'

import { MainLayout as Layout } from '../layout'
import { About } from '../components/About'
import config from '../../data/SiteConfig'

export const AboutPage = () => (
  <Layout>
    <div className='about-container'>
      <Helmet title={`About | ${config.siteTitle}`} />
      <About config={config} />
    </div>
  </Layout>
)

export default AboutPage
