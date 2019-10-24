
import React from 'react'

import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { Link } from 'gatsby'

const FooterContainer = styled('footer')`
  justify-content: center;
  align-content: center;
  padding: 10px 5px 5px;
`

const NoticeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-top: 25px;
`

export const Footer = props => {
  const { config } = props
  const url = config.siteRss
  const { copyright } = config
  if (!copyright) {
    return null
  }
  return (
    <FooterContainer>
      <NoticeContainer
        styles={css`
          @media (max-width: 640px - 1px) {
            justify-content: space-around;
          }
        `}
      >
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
      </NoticeContainer>
    </FooterContainer>
  )
}
