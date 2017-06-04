export interface SocialItem {
  identifier: string;
  url: string;
  assetPath: string;
}

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    identifier: `GitHub`,
    url: 'https://github.com/tsugitta',
    assetPath: '/assets/social/github-icon.svg',
  },

  {
    identifier: `Twitter`,
    url: 'https://twitter.com/tsugitta',
    assetPath: '/assets/social/twitter-icon.png',
  },
];
