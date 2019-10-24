
import React from 'react'
import Helmet from 'react-helmet'

import { Global, css } from '@emotion/core'

import config from '../../data/SiteConfig'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const MainLayout = props => {
  const { children } = props

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }

          html {
            height: 100%;
          }

          body {
            margin: 0;
            padding: 20px;
          }
        `}
      />
      <Helmet>
        <meta name='description' content={config.siteDescription} />
        <html lang='en' />
      </Helmet>
      <Header config={config} />
      {children}
      <Footer config={config} />
    </>
  )
}
