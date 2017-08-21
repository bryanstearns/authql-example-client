import { combineReducers } from 'redux'
import { authReducer } from 'authql'

export default (apolloReducer) => {
  return combineReducers({
    auth: authReducer,
    apollo: apolloReducer
  })
}
