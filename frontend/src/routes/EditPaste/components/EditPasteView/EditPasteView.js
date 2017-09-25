import DefaultLayout from 'layouts/DefaultLayout'
import PasteEditor from '../PasteEditor'
import React from 'react'
import SavePasteButton from '../SavePasteButton'
import styled from 'styled-components'

const Container = styled.div`margin: 5px;`

const EditPasteView = () => {
  return (
    <DefaultLayout title="#Pastey! - Edit Paste">
      {() => (
        <Container>
          <SavePasteButton />
          <PasteEditor />
        </Container>
      )}
    </DefaultLayout>
  )
}

export default EditPasteView
