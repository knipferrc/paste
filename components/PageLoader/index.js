import React from 'react'
import { Spin } from 'antd'

const PageLoader = () => (
  <div className="loader-container">
    <Spin size="large" />
    <style jsx>{`
      .loader-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }
    `}</style>
  </div>
)

export default PageLoader
