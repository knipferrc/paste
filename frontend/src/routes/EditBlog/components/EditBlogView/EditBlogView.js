import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'
import TextEditor from '../TextEditor'

const EditBlogView = () => {
  return (
    <DefaultLayout title="#Pastey! - Edit Blog">
      {() => <TextEditor />}
    </DefaultLayout>
  )
}

export default EditBlogView
