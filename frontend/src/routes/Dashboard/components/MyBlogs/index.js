import MyBlogs from './MyBlogs'
import MyBlogsQuery from '../../queries/myBlogs'
import { graphql } from 'react-apollo'

const withMyBlogs = graphql(MyBlogsQuery, {
  props: ({ data: { loading, myBlogs } }) => ({
    loading,
    myBlogs
  }),
  options: props => ({
    variables: {
      userId: props.user._id
    }
  })
})

export default withMyBlogs(MyBlogs)
