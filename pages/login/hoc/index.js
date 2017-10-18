import { compose } from 'react-apollo'
import withAuth from 'hoc/withAuth'
import withData from 'hoc/withData'
import withDefaultLayout from 'hoc/withDefaultLayout'

export default compose(withData, withAuth, withDefaultLayout)
