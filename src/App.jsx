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
import ParticleCanvas from './ParticleCanvas'
import 'aos/dist/aos.css'; // Import the styling
import SideBar from './sideBar'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
const [isOpen, setIsOpen] = useState(false);


 useEffect(() => {
  AOS.init({
    duration: 600,
    easing: 'ease-out-cubic',
    once: true,
  });

  const handleResize = () => AOS.refresh();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

 const toggleActive = () => setIsActive(!isActive);
  return (
    <>
    <ParticleCanvas/>
      <NavBar toggle={() => setIsOpen(!isOpen)}></NavBar>
      <SideBar active={isOpen} ></SideBar>
      <FirstSection></FirstSection>
      <FeaturesSection></FeaturesSection>
      <PricingSection></PricingSection>
      <MessagingSection></MessagingSection>
      <RemarksSection></RemarksSection>
    </>
  )
}

export default App
