
import React from 'react'

import { Link } from 'gatsby'

import './header.scss'

export const Header = () => {
  return (
    <nav className='header'>
      <div>
        <Link to='/' className='nostyle'>
          Home
        </Link>
      </div>

      <div className='links'>
        <Link to='/about'>
          About
        </Link>
      </div>
    </nav>
  )
}
