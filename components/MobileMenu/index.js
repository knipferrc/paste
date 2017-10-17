import { Button, Icon, Popover } from 'antd'

import Link from 'next/link'
import React from 'react'

const content = (
  <div>
    <div className="menu-link">
      <Link href="/">
        <a className="nav-link">
          <Icon type="home" style={{ marginRight: 5 }} />Home
        </a>
      </Link>
    </div>
    <div className="menu-link">
      <Link href="/">
        <a className="nav-link">
          <Icon type="inbox" style={{ marginRight: 5 }} />Pastes
        </a>
      </Link>
    </div>
    <div className="menu-link">
      <Link href="/">
        <a className="nav-link">
          <Icon type="appstore" style={{ marginRight: 5 }} />Dashboard
        </a>
      </Link>
    </div>
    <div className="menu-link">
      <Link href="/login">
        <a>
          <Icon type="login" style={{ marginRight: 5 }} />Login
        </a>
      </Link>
    </div>
    <div className="menu-link">
      <Link href="/register">
        <a>
          <Icon type="idcard" style={{ marginRight: 5 }} />Register
        </a>
      </Link>
    </div>
    <div className="menu-link">
      <a href="#!">
        <Icon type="logout" style={{ marginRight: 5 }} />Logout
      </a>
    </div>
    <style jsx>{`
      .menu-link {
        margin-bottom: 10px;
      }
    `}</style>
  </div>
)

const MobileMenu = () => (
  <Popover
    content={content}
    title="Main Menu"
    trigger="click"
    arrowPointAtCenter
  >
    <Button icon="appstore" type="primary">
      Menu
    </Button>
  </Popover>
)

export default MobileMenu
