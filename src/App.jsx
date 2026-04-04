import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Vault from './pages/Vault'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f172a]">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vault" element={<Vault />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
