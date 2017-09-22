import BlogContentQuery from '../../queries/blogContent'
import PublishingPreview from './PublishingPreview'
import { graphql } from 'react-apollo'

const withBlogContent = graphql(BlogContentQuery, {
  props: ({ data: { loading, blogContent } }) => ({
    loading,
    blogContent
  }),
  options: props => ({
    variables: {
      blogId: props.blogId
    }
  })
})

export default withBlogContent(PublishingPreview)
