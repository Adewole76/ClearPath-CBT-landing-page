import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './Navbar'
import FirstSection from './firstSection'
import FeaturesSection from './FeaturesSection'
import PricingSection from './pricing'
import MessagingSection from './Messaging'
import RemarksSection from './Remarks'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <FirstSection></FirstSection>
      <FeaturesSection></FeaturesSection>
      <PricingSection></PricingSection>
      <MessagingSection></MessagingSection>
      <RemarksSection></RemarksSection>
    </>
  )
}

export default App
