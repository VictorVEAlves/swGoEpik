import React from 'react';
import CharacterTable from './components/characterTable';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './services/apollo';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <CharacterTable />
      </div>
    </ApolloProvider>
  );
}
export default App;
