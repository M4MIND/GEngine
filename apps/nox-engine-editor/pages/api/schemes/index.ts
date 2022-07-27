import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    resolverFileSystemDir(path: [String!]!): String
    ResolverFileSystemFile: String
  }
`;

