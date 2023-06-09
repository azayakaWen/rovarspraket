import React, { useState } from "react"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import "../style/Nabvar.css"

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <Link to="/" className="brand-name">
        Rövarspråket
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <GiHamburgerMenu />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/" onClick={() => setIsNavExpanded(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsNavExpanded(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsNavExpanded(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
