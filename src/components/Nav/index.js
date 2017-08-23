/* eslint-disable react/no-array-index-key */

import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'red',
}

const navItems = [
  { title: 'Home', to: '/' },
  { title: 'About', to: '/about' },
  { title: 'Topics', to: '/topics' },
]

const Nav = () =>
  <nav>
    <ul>
      {navItems.map((item, index) =>
        <li key={index}>
          <NavLink to={item.to} activeStyle={activeStyle}>
            {item.title}
          </NavLink>
        </li>
      )}
    </ul>
  </nav>

export default Nav
