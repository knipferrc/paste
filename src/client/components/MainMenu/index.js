import { Link } from 'react-router-dom'
import React from 'react'

const MainMenu = () => {
  return [
    <ul key="mainmenu" className="nav">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/pastes">Pastes</Link>
      </li>
      <li className="nav-item">
        <Link to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/register">Register</Link>
      </li>
      <li className="nav-item active">
        <a href="#!">Account</a>
        <ul className="nav">
          <li className="nav-item">
            <a href="#!">Profile</a>
          </li>
          <li className="nav-item">
            <a href="#!">Settings</a>
          </li>
          <li className="nav-item">
            <a href="#!">Logout</a>
          </li>
        </ul>
      </li>
    </ul>
  ]
}

export default MainMenu
