import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './index.css'

function AppContent() {
  return (
    <div className="bg-white text-navy-900 overflow-x-hidden">
      <Navigation />
      <Home />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
