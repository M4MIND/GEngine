import { Apollo } from '../Apollo';
import { gql } from '@apollo/client';

export default class ApolloFileSystem {
  public static async getJson<T>(path: string[]): Promise<T> {
    return (await Apollo.query({
      query: gql`
        query ResolverFileSystemReadJsonFile($path: [String!]!) {
          ResolverFileSystemReadJsonFile(path: $path) {
            data,
            path
          }
        }
      `,
      variables: { path: path }
    })).data.ResolverFileSystemReadJsonFile;
  }

  public static async readDir(path: string[]): Promise<{
    'name': string, 'type': string, 'path': string[]
  }[]> {
    return (await Apollo.query({
      query: gql`
        query ResolverFileSystemGetAllDirectories($path: [String!]!) {
          ResolverFileSystemGetAllDirectories(path: $path) {
            name,
            type,
            path
          }
        }`,
      variables: { path: path }
    })).data.ResolverFileSystemGetAllDirectories;
  }
}
