import React from 'react';
import { ApolloProvider } from '@apollo/client';

import client from './config/createApolloClient';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <Login />
    </ApolloProvider>
  );
}

export default App;
