import React from 'react'
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { ApolloProvider } from 'react-apollo'

import createStore from './createStore'
import apolloClient from './apolloClient'
import createRootReducer from './createRootReducer'
import Home from '../components/Home'
import Nav from '../components/Nav'

const history = createBrowserHistory()
const rootReducer = createRootReducer(apolloClient.reducer())
const store = createStore(rootReducer, apolloClient.middleware())

export const App = () => {
  return (
    <ApolloProvider store={store} client={apolloClient}>
      <Router history={history}>
        <div className="App">
          <Nav />
          <div className="content">
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;