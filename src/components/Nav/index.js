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
      {navItems.map(item =>
        <li>
          <NavLink to={item.to} activeStyle={activeStyle}>
            {item.title}
          </NavLink>
        </li>
      )}
    </ul>
  </nav>

export default Nav
