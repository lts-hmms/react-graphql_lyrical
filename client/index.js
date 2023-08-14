import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SongList from './components/SongList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const container = document.getElementById('app');
const reactRoot = createRoot(container);


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList/>
    </ApolloProvider>
  );
};

reactRoot.render(<Root />);
