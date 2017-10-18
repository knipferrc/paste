import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'
import hoc from './hoc'

const Home = () => (
  <div>
    <Button type="primary">
      <Link href="/login">
        <a>Home</a>
      </Link>
    </Button>
  </div>
)

export default hoc(Home)
