import Link from 'react-router-dom/Link'
import React from 'react'
import hoc from './hoc'

const Navbar = ({ active, toggleActive }) => {
  return (
    <nav className="navbar is-danger" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <div className="title has-text-white has-text-weight-light">
            #Pastey!
          </div>
        </Link>
        <button
          onClick={() => toggleActive(!active)}
          className={`button is-danger navbar-burger ${active && 'is-active'}`}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`navbar-menu ${active && 'is-active'}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/" className="navbar-item">
            Pastes
          </Link>
          <Link to="/" className="navbar-item">
            Dashboard
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">My Account</a>

            <div className="navbar-dropdown is-right">
              <a className="navbar-item">Login</a>
              <a className="navbar-item">Register</a>
              <a className="navbar-item">Profile</a>
              <hr className="navbar-divider" />
              <div className="navbar-item">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default hoc(Navbar)
