
import React from 'react'

import { UserLinks } from '../UserLinks/UserLinks'

import './About.css'

export const About = props => {
  return (
    <div>
      <div className='about'>
        <div>
          <h1>My name is {props.config.userName}</h1>
          <h1>{props.config.userDescription}</h1>
        </div>
      </div>
      <UserLinks config={props.config} labeled />
    </div>
  )
}
