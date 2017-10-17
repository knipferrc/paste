import { Button, Dropdown, Icon, Menu } from 'antd'

import Link from 'next/link'
import React from 'react'

const menu = (
  <Menu>
    <Menu.Item key="login">Login</Menu.Item>
    <Menu.Item key="register">Register</Menu.Item>
    <Menu.Item key="logout">Logout</Menu.Item>
  </Menu>
)

const DesktopMenu = () => (
  <div>
    <Link href="/">
      <a className="nav-link">Home</a>
    </Link>
    <Link href="/">
      <a className="nav-link">Pastes</a>
    </Link>
    <Link href="/">
      <a className="nav-link">Dashboard</a>
    </Link>
    <Dropdown overlay={menu}>
      <Button type="primary">
        My Account <Icon type="down" />
      </Button>
    </Dropdown>
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
