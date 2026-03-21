import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client'; //FETCHES ALL DATA
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import App from './components/App.js'
import LoginForm from './components/LoginForm.js';
import SignupForm from './components/SignupForm.js';
import Dashboard from './components/Dashboard.js';
import requireAuth from './components/requireAuth.js';
// const networkInterface = createNetworkInterface({
//   uri: '/graphql',
//   opts: {
//     credentials: 'same-origin' //send cookies whenever send queries
//   }
// })

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  // networkInterface
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
          <Route path='/login' component={LoginForm}/>
          <Route path='/signup' component={SignupForm}/>
          <Route path="/dashboard" component={requireAuth(Dashboard)} />
          </Route>
        </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
