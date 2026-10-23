import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'
import Home from '@/pages/Home.jsx'
import ServicePage from '@/pages/ServicePage.jsx'
import CaseStudyPage from '@/pages/CaseStudyPage.jsx'
import NotFound from '@/pages/NotFound.jsx'

/** On route change: jump to the #section if there is one, otherwise to the top. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Wait a frame so the new page has rendered its sections
      requestAnimationFrame(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView()
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
