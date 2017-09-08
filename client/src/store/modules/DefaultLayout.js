import { createSelector } from 'reselect'
import { fromJS } from 'immutable'

// Constants
export const constants = {
  SET_ACTIVE_ITEM: 'DefaultLayout/SET_ACTIVE_ITEM',
  OPEN_SIDEBAR: 'DefaultLayout/OPEN_SIDEBAR',
  CLOSE_SIDEBAR: 'DefaultLayout/CLOSE_SIDEBAR',
}

// Action Creators
export const actions = {
  setActiveItem(activeItem) {
    return {
      type: constants.SET_ACTIVE_ITEM,
      activeItem,
    }
  },
  openSidebar() {
    return {
      type: constants.OPEN_SIDEBAR,
    }
  },
  closeSidebar() {
    return {
      type: constants.CLOSE_SIDEBAR,
    }
  },
}

// Reducer
export const initialState = fromJS({
  activeItem: 'home',
  open: false,
})

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.SET_ACTIVE_ITEM:
      return state.set('activeItem', action.activeItem)
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
  activeItem: createSelector(getState, state => state.get('activeItem')),
  open: createSelector(getState, state => state.get('open')),
}
