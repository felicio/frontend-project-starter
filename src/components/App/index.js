import React from 'react'
import { Switch, Route, NavLink, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import Topics from '../Topics'

const activeStyle = {
  color: 'red',
}

const App = () =>
  <BrowserRouter>
    <div>
      <h1>Frontend Starter Project - React</h1>

      <div>
        <ul>
          <li>
            <NavLink to="/" activeStyle={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/topics" activeStyle={activeStyle}>
              Topics
            </NavLink>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </div>
  </BrowserRouter>

export default App
