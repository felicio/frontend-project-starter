import React from 'react'
import { Route, Link, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import Topics from '../Topics'

const App = () =>
  <BrowserRouter>
    <div>
      <h1>Frontend Starter Project - React</h1>

      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
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
