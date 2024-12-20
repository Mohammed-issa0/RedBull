import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyDifferent from './components/WhyDifferent'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Specifications from './components/Specifications'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <Hero />
      <WhyDifferent />
      <Benefits />
      <Testimonials />
      {/* <Specifications /> */}
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  )
}

export default App