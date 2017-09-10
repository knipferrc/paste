import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'
import TextEditor from '../TextEditor'
import styled from 'styled-components'

const Container = styled.div`
  margin: 20px;
  height: 100%;
  padding: 15px;
  background: white;
`

const CreateView = () => {
  return (
    <DefaultLayout>
      <Container>
        <TextEditor />
      </Container>
    </DefaultLayout>
  )
}

export default CreateView
