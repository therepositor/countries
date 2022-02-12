import Index from './routes/Index';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Index />
      </div>
    </ApolloProvider>
    
  );
}

export default App;
