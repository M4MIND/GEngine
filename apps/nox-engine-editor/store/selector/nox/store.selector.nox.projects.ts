import { selector } from 'recoil';

export const StoreSelectorNoxProjects = selector({
  key: 'store.selector.nox.projects',
  get: async () => {
    return await new Promise<{ name: string, description: string, modified: number, directory: string[] }[]>((resolve) => {
      setTimeout(() => {
        resolve([{
          name: 'Project name',
          description: 'Vertical list of terms with their associated descriptions.',
          modified: new Date().getTime(),
          directory: ['.root', 'project'],
        }, {
          name: 'Project name 1',
          description: 'Vertical list of terms with their associated descriptions.',
          modified: new Date().getTime(),
          directory: ['.root', 'project-name'],
        }, {
          name: 'Project name 1',
          description: 'Vertical list of terms with their associated descriptions.',
          modified: new Date().getTime(),
          directory: ['.root', 'project-name'],
        }]);
      }, 500);

    });
  },
});
