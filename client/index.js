import './style/style.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

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
            <Route path="songs/new" element={<SongCreate/>} />
            <Route path="songs/:id" element={<SongDetail/>} />
          </Route>
        </Routes>
      </HashRouter>
    </ApolloProvider>
  );
};

reactRoot.render(<Root />);
