import { Button, Icon, Popover } from 'antd'

import Link from 'next/link'
import React from 'react'

const content = (
  <div>
    <div className="menu-link">
      <Link href="/login" prefetch>
        <a>
          <Icon type="login" style={{ marginRight: 5 }} />Login
        </a>
      </Link>
    </div>
    <div className="menu-link">
      <Link href="/register" prefetch>
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

const DesktopMenu = () => (
  <div>
    <Link href="/" prefetch>
      <a className="nav-link">
        <Icon type="home" style={{ marginRight: 5 }} />Home
      </a>
    </Link>
    <Link href="/pastes" prefetch>
      <a className="nav-link">
        <Icon type="inbox" style={{ marginRight: 5 }} />Pastes
      </a>
    </Link>
    <Link href="/dashboard" prefetch>
      <a className="nav-link">
        <Icon type="appstore" style={{ marginRight: 5 }} />Dashboard
      </a>
    </Link>
    <Popover
      content={content}
      title="My Account"
      trigger="click"
      arrowPointAtCenter
    >
      <Button icon="down" type="primary">
        Account
      </Button>
    </Popover>
    <style jsx>{`
      .nav-link {
        color: white;
        font-size: 12px;
        line-height: 1.15;
        text-decoration: none;
        margin-right: 25px;
      }
    `}</style>
  </div>
)

export default DesktopMenu
