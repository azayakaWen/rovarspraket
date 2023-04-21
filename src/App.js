import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Translater from "./components/Translater"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<Translater />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
