import client from './client'
import { combineReducers } from 'redux'
import defaultLayout from './modules/DefaultLayout'
import { reducer as form } from 'redux-form'

export default combineReducers({
  defaultLayout,
  form,
  apollo: client.reducer()
})
