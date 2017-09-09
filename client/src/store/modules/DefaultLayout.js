import { createSelector } from 'reselect'
import { fromJS } from 'immutable'

// Constants
export const constants = {
  OPEN_SIDEBAR: 'DefaultLayout/OPEN_SIDEBAR',
  CLOSE_SIDEBAR: 'DefaultLayout/CLOSE_SIDEBAR'
}

// Action Creators
export const actions = {
  openSidebar() {
    return {
      type: constants.OPEN_SIDEBAR
    }
  },
  closeSidebar() {
    return {
      type: constants.CLOSE_SIDEBAR
    }
  }
}

// Reducer
export const initialState = fromJS({
  open: false
})

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.OPEN_SIDEBAR:
      return state.set('open', true)
    case constants.CLOSE_SIDEBAR:
      return state.set('open', false)
    default:
      return state
  }
}

// Selectors
const getState = state => state.defaultLayout

export const selectors = {
  open: createSelector(getState, state => state.get('open'))
}
