
import React, { Component } from 'react'

import { UserLinks } from '../UserLinks/UserLinks'

import './About.css'

export class About extends Component {
  render () {
    return (
      <div>
        <div className='about'>
          <div>
            <h1>My name is {this.props.config.userName}</h1>
            <h1>{this.props.config.userDescription}</h1>
          </div>
        </div>
        <UserLinks config={this.props.config} labeled />
      </div>
    )
  }
}
