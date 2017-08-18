import React from 'react'

const ListAboutUsItem = ({ icon, title, text }) =>
  <li className="list-about-us__item">
    <span className="list-about-us__item-icon">
      {icon}
    </span>
    <h3 className="list-about-us__title">
      {title}
    </h3>
    <p>
      {text}
    </p>
  </li>

export default ListAboutUsItem
