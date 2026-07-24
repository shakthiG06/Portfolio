import React, { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { useLenis } from './hooks/useLenis'

// Layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// UI Effects
import LoadingScreen, { CustomCursor, ScrollProgress, FloatingPetals } from './components/ui/Effects'

// Sections
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Journey from './components/sections/Journey'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import CodingProfiles from './components/sections/CodingProfiles'
import Contact from './components/sections/Contact'

// Pages
import NotFound from './pages/NotFound'

// ─── Home Page ─────────────────────────────────────────────────
const HomePage: React.FC = () => {
  useLenis()

  return (
    <main>
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Experience />
      <CodingProfiles />
      <Contact />
    </main>
  )
}

// ─── App Root ──────────────────────────────────────────────────
const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Loading Screen */}
        {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

        {/* Floating Petals (always present, behind content) */}
        <FloatingPetals count={12} />

        {loaded && (
          <>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HomePage />
                    <Footer />
                  </>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
