import React from 'react';
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import About from './pages/About'
import ServiceDetail from './pages/ServiceDetail'
import Contact from './pages/Contact'
import { ThemeProvider } from './contexts/ThemeContext'

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App