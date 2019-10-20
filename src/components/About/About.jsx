
import React, { Component } from 'react'

import { UserLinks } from '../UserLinks/UserLinks'

import './About.css'

export class About extends Component {
  render () {
    return (
      <div>
        <div className='about'>
          <h1>
            My name is Tyler. I write software, especially JavaScript. I play the drums, especially groovin.
          </h1>
        </div>
        <UserLinks config={this.props.config} labeled />
      </div>
    )
  }
}
