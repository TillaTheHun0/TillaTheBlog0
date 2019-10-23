
import React from 'react'
import './UserLinks.css'

const LinkElements = props => {
  const { userLinks } = props.config
  const { labeled } = props

  return userLinks.map(link => (
    <div key={link.label} className='user-link'>
      <a href={link.url}>
        <button type='button'>
          {labeled ? link.label : ''}
        </button>
      </a>
    </div>
  ))
}

export const UserLinks = props => {
  const { userLinks } = props.config
  if (!userLinks) {
    return null
  }

  return (
    <div className='user-links'>
      <LinkElements {...props} />
    </div>
  )
}
