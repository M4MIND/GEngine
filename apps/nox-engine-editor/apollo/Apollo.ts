import { ApolloClient, InMemoryCache } from "@apollo/client";

const Apollo = new ApolloClient({
  cache: new InMemoryCache(),
  uri: '/api'
})

export {
  Apollo
}


