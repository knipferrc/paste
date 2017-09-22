import MyBlogsQuery from '../../queries/myBlogs'
import PublishBlogButton from './PublishBlogButton'
import PublishBlogMutation from '../../mutations/publishBlog'
import { graphql } from 'react-apollo'

const withPublishBlog = graphql(PublishBlogMutation, {
  props: ({ mutate }) => ({
    publishBlog: blogId => {
      return mutate({
        variables: { blogId }
      })
    }
  }),
  options: props => ({
    refetchQueries: [
      {
        query: MyBlogsQuery,
        variables: { userId: props.userId}
      }
    ]
  })
})

export default withPublishBlog(PublishBlogButton)
