import React from 'react'

const Nav = () =>
  <nav className="nav">
    <button className="hamburger">
      <span className="hidden">Navigation</span>
      <span />
      <span />
      <span />
      <span />
    </button>

    <ul className="nav__list">
      <li>
        <a className="nav__list-item" href="#about-us">
          About us
        </a>
      </li>
      <li>
        <a className="nav__list-item" href="#how-it-works">
          How it works
        </a>
      </li>
      <li>
        <a className="nav__list-item" href="#comments">
          Comments
        </a>
      </li>
    </ul>
  </nav>

export default Nav
