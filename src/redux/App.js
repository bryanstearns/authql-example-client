import React from 'react'
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { ApolloProvider } from 'react-apollo'

import createStore from './createStore'
import apolloClient from '../graphql/apolloClient'
import createRootReducer from './createRootReducer'
import Home from '../components/Home'
import Login from '../containers/Login'
import Logout from '../containers/Logout'
import Nav from '../components/Nav'
import Users from '../containers/Users'

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
            <Route path="/users" component={Users} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;
