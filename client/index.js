import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './components/App';
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
      <HashRouter>
        <Routes>
          <Route path="/" element={<App/>} >
            <Route index element={<SongList/>} />
          </Route>
        </Routes>
      </HashRouter>
    </ApolloProvider>
  );
};

reactRoot.render(<Root />);
