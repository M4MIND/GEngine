type NoxProjectInfo = {
  data: {
    'name': string,
    'version': string,
    'created': string,
  },
  path: string[],
}

type NoxSettingsInfo = {
  data: {
    'nox-version': string,
    'projectsDirectory': string[],
  },
  path: string[],
}

export type {
  NoxProjectInfo,
  NoxSettingsInfo
};
