
import React from 'react'

import styled from '@emotion/styled'

import { UserLinks } from './UserLinks'

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height: 300px;
`

export const About = props => {
  return (
    <div>
      <AboutContainer>
        <div>
          <h1>My name is {props.config.userName}</h1>
          <h1>{props.config.userDescription}</h1>
        </div>
      </AboutContainer>
      <UserLinks config={props.config} labeled />
    </div>
  )
}
