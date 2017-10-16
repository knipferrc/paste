import { Button } from 'antd'
import DefaultLayout from 'layouts/DefaultLayout'
import Link from 'next/link'
import React from 'react'

const Home = () => (
  <DefaultLayout title="Home">
    <Button>
      <Link href="/login">
        <a>Home</a>
      </Link>
    </Button>
  </DefaultLayout>
)

export default Home
