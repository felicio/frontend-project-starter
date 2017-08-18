import React from 'react'

const Section = ({ sectionNumber, title, white, withArrow, children }) =>
  <section>
    <div className="container">
      <h2 className="section__title">
        <span>{sectionNumber}</span> {title}
      </h2>
      {children}
    </div>
  </section>

export default Section
