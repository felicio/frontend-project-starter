import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

const NotFound = () =>
  <div>
    <Helmet title="" />
    <h2>PAGE NOT FOUND</h2>
    <Link to="/">Go Home</Link>
  </div>

export default NotFound
