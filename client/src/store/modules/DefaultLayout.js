import { createSelector } from 'reselect'
import { fromJS } from 'immutable'

// Constants
export const constants = {
  OPEN_DRAWER: 'DefaultLayout/OPEN_DRAWER',
  CLOSE_DRAWER: 'DefaultLayout/CLOSE_DRAWER',
}

// Action Creators
export const actions = {
  openDrawer() {
    return { type: constants.OPEN_DRAWER }
  },
  closeDrawer() {
    return { type: constants.CLOSE_DRAWER }
  },
}

// Reducer
export const initialState = fromJS({
  open: false,
})

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.OPEN_DRAWER:
      return state.set('open', true)
    case constants.CLOSE_DRAWER:
      return state.set('open', false)
    default:
      return state
  }
}

// Selectors
const getState = state => state.defaultLayout

export const selectors = {
  open: createSelector(getState, state => state.get('open')),
}
