import MainMenu from 'client/components/MainMenu'
import Navbar from 'client/components/Navbar'
import React from 'react'

const DefaultLayout = ({ children }) => {
  return [
    <Navbar key="navbar" />,
    <div key="offcanvas" className="off-canvas">
      <input
        type="checkbox"
        className="off-canvas-checkbox"
        id="sidebar-checkbox"
        name="sidebar-checkbox"
        hidden
      />
      <label
        className="off-canvas-toggle btn btn-lg"
        htmlFor="sidebar-checkbox"
      >
        <i className="icon icon-menu" />
      </label>
      <div className="off-canvas-sidebar">
        <MainMenu />
      </div>
      <div className="off-canvas-content" style={{ marginTop: 64, padding: 0 }}>
        {children}
      </div>
    </div>
  ]
}

export default DefaultLayout
