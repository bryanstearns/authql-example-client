import { createStore, applyMiddleware, compose } from 'redux'

const dispatchLogger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

export default (rootReducer, apolloMiddleware) => {
  const middleware = [apolloMiddleware]

  const enhancers = []
  enhancers.push(applyMiddleware(...middleware))
  enhancers.push(applyMiddleware(dispatchLogger))
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  return createStore(rootReducer, compose(...enhancers))
}
