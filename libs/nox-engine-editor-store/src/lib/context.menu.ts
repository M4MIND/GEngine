import { atom, selector } from 'recoil';

const key = 'store.selector.editor.context.';

const ContextMenu = atom({
  key: `${key}menu`,
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

// @ts-ignore
export const ContextMenuMenuItems = selector({
  key: `${key}items`,
  get: ({ get }) => {
    return get(ContextMenu).items;
  },
  set: ({ get, set }, v: [{ title: string, callback: () => void }]) => {
    set(ContextMenu, { ...get(ContextMenu), items: v });
  },
});

export const ContextMenuPosition = selector({
  key: `${key}position`,
  get: ({ get }) => {
    return get(ContextMenu).position;
  },
  set: ({ set, get }, v: { x: number, y: number }) => {
    set(ContextMenu, { ...get(ContextMenu), position: v });
  },
});

export const ContextMenuOpen = selector({
  key: `${key}open`,
  get: ({ get }) => {
    return get(ContextMenu).open;
  },
  set: ({ get, set }, v: boolean) => {
    set(ContextMenu, { ...get(ContextMenu), open: v });
  },
});
