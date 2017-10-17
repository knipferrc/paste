import DesktopMenu from 'components/DesktopMenu'
import React from 'react'

const Navbar = () => (
  <div className="navbar-container">
    <div className="brand">#Pastey!</div>
    <div className="desktop-menu">
      <DesktopMenu />
    </div>
    <style jsx>{`
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
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
)

export default Navbar
