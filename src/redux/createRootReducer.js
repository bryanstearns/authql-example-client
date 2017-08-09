import { combineReducers } from 'redux'

export default (apolloReducer) => {
  return combineReducers({
    apollo: apolloReducer
  })
}
