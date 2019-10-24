
import React from 'react'

import styled from '@emotion/styled'

import { Link } from 'gatsby'

const HeaderContainer = styled('nav')`
  display: flex;
  justify-content: space-between;
`

const NoStyleLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;

  &:visited {
    text-decoration: inherit;
    color: inherit;
  }
`

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <NoStyleLink to='/'>
          Home
        </NoStyleLink>
      </div>

      <div>
        <Link to='/about'>
          About
        </Link>
      </div>
    </HeaderContainer>
  )
}
