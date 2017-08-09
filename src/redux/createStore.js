import { createStore, applyMiddleware, compose } from 'redux'

export default (rootReducer, apolloMiddleware) => {
  const middleware = [apolloMiddleware]

  const enhancers = []
  enhancers.push(applyMiddleware(...middleware))
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  return createStore(rootReducer, compose(...enhancers))
}
