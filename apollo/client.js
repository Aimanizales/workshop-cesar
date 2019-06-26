import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import config from '../appConfig';

const client = new ApolloClient({
  fetch,
  uri: `${config.HOST}/graphql`,
});

export default client;
