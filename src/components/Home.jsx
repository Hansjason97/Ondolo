import React from 'react'
import Hero from './Home/Hero'
import Services from './Home/Services'
import Portfolio from './Home/Portfolio'
import CallToAction from './Home/CallToAction'
import Articles from './Home/Articles'
import Contact from './Home/Contact'

function Home() {
  return (
    <div>
      <Hero />
      <Portfolio />
      <CallToAction />
      <Services />
      <Articles />
      <Contact />
    </div>
  )
}

export default Home