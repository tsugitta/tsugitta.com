export interface NavigationItem {
  displayName: string;
  path: string;
  materialIconName: string;
}

export const navigationItems: NavigationItem[] = [
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
    displayName: `Works`,
    path: 'works',
    materialIconName: 'music_note',
  },
];
