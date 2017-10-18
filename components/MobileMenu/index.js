import { Button, Icon, Popover } from 'antd'

import Cookies from 'js-cookie'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

const logout = () => {
  Cookies.remove('accesstoken')
  window.location.href = '/'
}

const MobileMenu = ({ user }) => {
  const content = (
    <div>
      {!user.id && (
        <div className="menu-link">
          <Link href="/" prefetch>
            <a className="nav-link">
              <Icon type="home" style={{ marginRight: 5 }} />Home
            </a>
          </Link>
        </div>
      )}
      <div className="menu-link">
        <Link href="/pastes" prefetch>
          <a className="nav-link">
            <Icon type="inbox" style={{ marginRight: 5 }} />Pastes
          </a>
        </Link>
      </div>
      {user.id && (
        <div className="menu-link">
          <Link href="/dashboard" prefetch>
            <a className="nav-link">
              <Icon type="appstore" style={{ marginRight: 5 }} />Dashboard
            </a>
          </Link>
        </div>
      )}
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

  const title = (
    <div>
      <div>Main Menu</div>
      <div>{user.id ? user.email : 'Welcome User'}</div>
    </div>
  )

  return (
    <Popover content={content} title={title} trigger="click" arrowPointAtCenter>
      <Button icon="appstore" type="primary">
        Menu
      </Button>
    </Popover>
  )
}

MobileMenu.propTypes = {
  user: PropTypes.object
}

export default MobileMenu
