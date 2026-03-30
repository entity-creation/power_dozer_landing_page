import { useEffect} from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { PowerDozerLanding } from './pages/home_page'
import { CertificationDetails } from './pages/certification_details_page'
import { ServiceDetails } from './pages/service_details_page'
import { AnimatePresence } from 'framer-motion'
import { MissionVision } from './pages/mission_vision_page'
import { AboutSummary } from './pages/about_summary'
import { CoreValues } from './pages/core_value_pate'
import { Strategy } from './pages/strategy_page'

function App() {
  return (
    <>
    <ScrollToHash/>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PowerDozerLanding />} />
        <Route path="/mission_vision" element={<MissionVision />} />
        <Route path="/about_summary" element={<AboutSummary />} />
        <Route path="/core_values" element={<CoreValues />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/certifications/:id" element={<CertificationDetails />} />
      </Routes>
    </AnimatePresence>
    </>
  )
}

export default App

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
  return null;
}