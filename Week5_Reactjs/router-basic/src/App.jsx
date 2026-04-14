import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <span className="divider">|</span>
          <Link to="/About" className="nav-link">About</Link>
          <span className="divider">|</span>
          <Link to="/Contact" className="nav-link">Contact</Link>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
