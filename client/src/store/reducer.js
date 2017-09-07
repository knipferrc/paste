import client from './client'
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

export default combineReducers({
  form,
  apollo: client.reducer(),
})
