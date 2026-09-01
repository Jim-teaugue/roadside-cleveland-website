import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import './index.css'

function App() {
  return (
    <Router>
      <div className="bg-white text-navy-900 overflow-x-hidden">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
