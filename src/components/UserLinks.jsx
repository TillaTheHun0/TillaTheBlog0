
import React from 'react'

import styled from '@emotion/styled'

const UserLink = styled.div`
  margin: auto 10px;
`

const UserLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100%;
`

const LinkElements = props => {
  const { userLinks } = props.config
  const { labeled } = props

  return userLinks.map(link => (
    <UserLink key={link.label}>
      <a href={link.url}>
        <button type='button'>
          {labeled ? link.label : ''}
        </button>
      </a>
    </UserLink>
  ))
}

export const UserLinks = props => {
  const { userLinks } = props.config
  if (!userLinks) {
    return null
  }

  return (
    <UserLinksContainer>
      <LinkElements {...props} />
    </UserLinksContainer>
  )
}
