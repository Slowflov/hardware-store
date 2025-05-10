import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://hardware-store-backend.onrender.com/graphql',
  }),
  cache: new InMemoryCache(),
});

export default client;