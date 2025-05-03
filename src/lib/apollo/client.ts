// src/lib/apollo/client.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    fetch, // обязательно в server components
  }),
  cache: new InMemoryCache(),
});
