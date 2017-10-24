import Cookies from 'js-cookie'
import Link from 'react-router-dom/Link'
import PropTypes from 'prop-types'
import React from 'react'
import hoc from './hoc'

const logout = () => {
  Cookies.remove('accesstoken')
  window.location.href = '/'
}

const Navbar = ({ active, toggleActive }) => {
  return (
    <nav className="navbar is-link" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <div className="title has-text-white has-text-weight-light">
            #Pastey!
          </div>
        </Link>
        <button
          onClick={() => toggleActive(!active)}
          className={`button is-link navbar-burger ${active && 'is-active'}`}
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
          <Link to="/pastes" className="navbar-item">
            Pastes
          </Link>
          <Link to="/dashboard" className="navbar-item">
            Dashboard
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">My Account</a>
            <div className="navbar-dropdown is-right">
              <Link to="/login" className="navbar-item">
                Login
              </Link>
              <Link to="/register" className="navbar-item">
                Register
              </Link>
              <Link to="/account" className="navbar-item">
                Account
              </Link>
              <hr className="navbar-divider" />
              <div onClick={logout} className="navbar-item">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  active: PropTypes.bool,
  toggleActive: PropTypes.func
}

export default hoc(Navbar)
