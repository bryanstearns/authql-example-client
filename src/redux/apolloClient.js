import { ApolloClient, createNetworkInterface } from 'react-apollo'

const uri = "http://localhost:4000/api"
const networkInterface = createNetworkInterface({uri})
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }

    const token = localStorage.getItem('token');
    req.options.headers.authorization = token ? `Bearer ${token}` : null;
    next();
  }
}])

export default new ApolloClient({networkInterface})
