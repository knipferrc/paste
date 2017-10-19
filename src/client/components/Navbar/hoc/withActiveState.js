import withState from 'recompose/withState'

const withOpenState = withState('active', 'toggleActive', false)

export default withOpenState
