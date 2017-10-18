import { Button, Icon, Popover } from 'antd'

import Cookies from 'js-cookie'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

const logout = () => {
  Cookies.remove('accesstoken')
  window.location.href = '/'
}

const DesktopMenu = ({ user }) => {
  const content = (
    <div>
      {!user.id && (
        <div className="menu-link">
          <Link href="/login" prefetch>
            <a>
              <Icon type="login" style={{ marginRight: 5 }} />Login
            </a>
          </Link>
        </div>
      )}
      {!user.id && (
        <div className="menu-link">
          <Link href="/register" prefetch>
            <a>
              <Icon type="idcard" style={{ marginRight: 5 }} />Register
            </a>
          </Link>
        </div>
      )}
      {user.id && (
        <div className="menu-link">
          <a href="#!" onClick={logout}>
            <Icon type="logout" style={{ marginRight: 5 }} />Logout
          </a>
        </div>
      )}
      <style jsx>{`
        .menu-link {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  )

  return (
    <div>
      {!user.id && (
        <Link href="/" prefetch>
          <a className="nav-link">
            <Icon type="home" style={{ marginRight: 5 }} />Home
          </a>
        </Link>
      )}
      <Link href="/pastes" prefetch>
        <a className="nav-link">
          <Icon type="inbox" style={{ marginRight: 5 }} />Pastes
        </a>
      </Link>
      {user.id && (
        <Link href="/dashboard" prefetch>
          <a className="nav-link">
            <Icon type="appstore" style={{ marginRight: 5 }} />Dashboard
          </a>
        </Link>
      )}
      <Popover
        content={content}
        title="My Account"
        trigger="click"
        arrowPointAtCenter
      >
        <Button icon="down" type="primary">
          {user.id ? user.email : 'Account'}
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
}

DesktopMenu.propTypes = {
  user: PropTypes.object
}

export default DesktopMenu
