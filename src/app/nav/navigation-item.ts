export interface NavigationItem {
  displayName: string;
  path: string;
  materialIconName: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    displayName: `Profile`,
    path: 'profile',
    materialIconName: 'person',
  },
  {
    displayName: `Contributions`,
    path: 'contributions',
    materialIconName: 'timeline',
  },
  {
    displayName: `Products (WIP)`,
    path: 'products',
    materialIconName: 'music_note',
  },
];
