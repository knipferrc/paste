import AddPasteButton from '../AddPasteButton'
import DefaultLayout from 'layouts/DefaultLayout'
import MyPastes from '../MyPastes'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`margin: 5px;`

const DashboardView = () => {
  return (
    <DefaultLayout title="#Pastey! - Dashboard">
      {({ user }) => (
        <Container>
          <AddPasteButton />
          <MyPastes user={user} />
        </Container>
      )}
    </DefaultLayout>
  )
}

export default DashboardView
