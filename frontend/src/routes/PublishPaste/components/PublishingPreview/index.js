import PasteContentQuery from '../../queries/pasteContent'
import PublishingPreview from './PublishingPreview'
import { graphql } from 'react-apollo'

const withPasteContent = graphql(PasteContentQuery, {
  props: ({ data: { loading, pasteContent } }) => ({
    loading,
    pasteContent
  }),
  options: props => ({
    variables: {
      pasteId: props.pasteId
    }
  })
})

export default withPasteContent(PublishingPreview)
