
import React, { Component } from 'react'
import './UserLinks.css'

export class UserLinks extends Component {
  getLinkElements () {
    const { userLinks } = this.props.config
    const { labeled } = this.props
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

  render () {
    const { userLinks } = this.props.config
    if (!userLinks) {
      return null
    }
    return <div className='user-links'>{this.getLinkElements()}</div>
  }
}
