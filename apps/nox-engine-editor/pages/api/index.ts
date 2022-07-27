import { createServer } from '@graphql-yoga/node';
import type { NextApiRequest, NextApiResponse } from 'next';
import { typeDefs } from './schemes';
import { resolvers } from './resolvers';

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false
  }
};

export default createServer<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema: {
    typeDefs,
    resolvers
  },
  endpoint: '/api'
});
