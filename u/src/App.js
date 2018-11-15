import React, { Component } from 'react';
import { Route, Switch,withRouter, Redirect } from 'react-router-dom';
import User from './containers/User/User';
import Admin from './containers/Admin/Admin';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Layout from './hoc/Layout/Layout';

const client = new ApolloClient({
  uri:'http://localhost:4000/graphql',
});
class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/User" exact component={User} />
        <Redirect to="/User" />
      </Switch>
    );  
    return (
      
      <ApolloProvider client={client}>
      <Layout>
        {routes}
      </Layout>
      
      </ApolloProvider>
    );
  }
}

export default withRouter(App);


