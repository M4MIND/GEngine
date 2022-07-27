import { resolverFileSystemDir } from './file-system/resolver.file.system.dir';
import { ResolverFileSystemFile } from './file-system/resolver.file.system.file';

export const resolvers = {
  Query: {
    resolverFileSystemDir,
    ResolverFileSystemFile
  }
};
