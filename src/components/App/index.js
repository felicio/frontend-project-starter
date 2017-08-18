import React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import Section from '../Section'
import ListAboutUs from '../ListAboutUs'

const App = () =>
  <div>
    <Header />
    <Section title="About Us" sectionNumber="01" white withArrow>
      <ListAboutUs />
    </Section>
    <Section title="How It Works" sectionNumber="02" gray />
    <Section title="Comments" sectionNumber="03" white withArrow />
    <Footer />
  </div>

export default App
