import FS from '../../../utils/FS';

const ResolverFileSystemGetAll = async (parent, args, ctx, info) => {
  return (await FS.readdir(args['path'])).map(v => {
    return { name: v.name, path: [...args['path'], v.name], type: v.isFile() ? 'file' : 'directory' };
  });
};

const ResolverFileSystemGetAllFiles = async (parent, args, ctx, info) => {
  return (await FS.readdir(args['path'])).filter(v => {
    return v.isFile();
  }).map(v => {
    return { name: v.name, path: [...args['path'], v.name], type: 'file' };
  });
};

const ResolverFileSystemGetAllDirectories = async (parent, args, ctx, info) => {
  return (await FS.readdir(args['path'])).filter(v => {
    return v.isDirectory();
  }).map(v => {
    return { name: v.name, path: [...args['path'], v.name], type: 'directory' };
  });
};

const ResolverFileSystemReadFile = async (parent, args) => {
  return {
    data: (await FS.readFile(args['path']))
  };
};

const ResolverFileSystemReadJsonFile = async (parent, args) => {
  return {
    path: args['path'],
    data: (JSON.parse(await FS.readFile(args['path'])))
  };
};

const ResolverFileSystemWriteFile = async (parent, args) => {
  return {
    path: args['path'],
    status: await FS.writeFile(args['path'], Buffer.from(args['data']))
  };
};

const ResolverFileSystemUploadFile = async (parent, args) => {

};

export {
  ResolverFileSystemGetAll,
  ResolverFileSystemGetAllFiles,
  ResolverFileSystemGetAllDirectories,
  ResolverFileSystemReadFile,
  ResolverFileSystemReadJsonFile,
  ResolverFileSystemWriteFile
};
