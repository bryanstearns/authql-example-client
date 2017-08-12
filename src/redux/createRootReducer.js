import { combineReducers } from 'redux'
import { authReducer } from '../reducers/authReducer'

export default (apolloReducer) => {
  return combineReducers({
    auth: authReducer,
    apollo: apolloReducer
  })
}
