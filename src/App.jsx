import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { initLenis } from './lib/lenis'
import { ScrollTrigger } from './lib/gsapSetup'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Loader from './components/ui/Loader'
import PageTransition from './components/layout/PageTransition'

import Home from './pages/Home'
import Exhibitions from './pages/Exhibitions'
import Artists from './pages/Artists'
import Store from './pages/Store'
import Visit from './pages/Visit'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [pathname])
  return null
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const lenis = initLenis()
    return () => lenis.destroy()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/store" element={<Store />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}