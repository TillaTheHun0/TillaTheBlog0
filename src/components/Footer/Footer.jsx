
import React from 'react'
import { Link } from 'gatsby'

import './Footer.css'

export const Footer = props => {
  const { config } = props
  const url = config.siteRss
  const { copyright } = config
  if (!copyright) {
    return null
  }
  return (
    <footer className='footer'>
      <div className='notice-container'>
        <h4>{copyright}</h4>

        <Link to={url}>
          <button>Subscribe</button>
        </Link>
        <h4>
          Based on
          {' '}
          <a href='https://github.com/Vagr9K/gatsby-advanced-starter'>
            This Awesome Starter
          </a>
          .
        </h4>
      </div>
    </footer>
  )
}
