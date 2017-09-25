import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'
import TextEditor from '../TextEditor'

const EditPasteView = () => {
  return (
    <DefaultLayout title="#Pastey! - Edit Paste">
      {() => <TextEditor />}
    </DefaultLayout>
  )
}

export default EditPasteView
