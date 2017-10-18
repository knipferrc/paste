import DesktopMenu from 'components/DesktopMenu'
import MobileMenu from 'components/MobileMenu'
import PropTypes from 'prop-types'
import React from 'react'

const Navbar = ({ user }) => (
  <div className="navbar-container">
    <div className="brand">#Pastey!</div>
    <div className="desktop-menu">
      <DesktopMenu user={user} />
    </div>
    <div className="mobile-menu">
      <MobileMenu user={user} />
    </div>
    <style jsx>{`
      @media screen and (max-width: 768px) {
        .desktop-menu {
          display: none;
        }
      }
      @media screen and (min-width: 768px) {
        .mobile-menu {
          display: none;
        }
      }
      .navbar-container {
        display: flex;
        align-items: center;
        position: fixed;
        background: teal;
        width: 100%;
        height: 55px;
      }
      .brand {
        color: white;
        font-size: 2em;
        padding-left: 10px;
      }
      .desktop-menu {
        margin-left: auto;
        padding-right: 10px;
      }
      .mobile-menu {
        margin-left: auto;
        padding-right: 10px;
      }
    `}</style>
  </div>
)

Navbar.propTypes = {
  user: PropTypes.object
}

export default Navbar
