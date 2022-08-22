import { atom, selector } from 'recoil';

const key = 'store.selector.editor.';

const StoreSelectorEditorContext = atom({
  key: `${key}context`,
  default: {
    position: {
      x: 0,
      y: 0,
    },
    open: false,
    items: [
      {
        title: 'title',
        callback: () => {
          console.log('click');
        },
      }, {
        title: 'title',
        callback: () => {
          console.log('click');
        },
      }, {
        title: 'title',
        callback: () => {
          console.log('click');
        },
      }, {
        title: 'title',
        callback: () => {
          console.log('click');
        },
      }, {
        title: 'title',
        callback: () => {
          console.log('click');
        },
      },
    ],
  },
});

export const StoreSelectorEditorContextItems = selector({
  key: `${key}items`,
  get: ({ get }) => {
    return get(StoreSelectorEditorContext).items;
  },
  set: ({ get, set }, v: [{ title: string, callback: () => void }]) => {
    set(StoreSelectorEditorContext, { ...get(StoreSelectorEditorContext), items: v });
  },
});

export const StoreSelectorEditorContextPosition = selector({
  key: `${key}position`,
  get: ({ get }) => {
    return get(StoreSelectorEditorContext).position;
  },
  set: ({ set, get }, v: { x: number, y: number }) => {
    set(StoreSelectorEditorContext, { ...get(StoreSelectorEditorContext), position: v });
  },
});

export const StoreSelectorEditorContextOpen = selector({
  key: `${key}open`,
  get: ({ get }) => {
    return get(StoreSelectorEditorContext).open;
  },
  set: ({ get, set }, v: boolean) => {
    set(StoreSelectorEditorContext, { ...get(StoreSelectorEditorContext), open: v });
  },
});
