import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Vision from './components/Vision'
import Values from './components/Values'
import Services from './components/Services'
import CTA from './components/CTA'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Vision />
        <Values />
        <Services />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
