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

  {
    identifier: `Blog`,
    url: 'https://blog.tsugitta.com',
    assetPath: '/assets/social/hatenablog-icon.png', // sorry for using the icon even though the blog isn't related to hatena..
  },

  {
    identifier: `Zenn`,
    url: 'https://zenn.dev/tsugitta',
    assetPath: '/assets/social/zenn.svg'
  },

  {
    identifier: `Scrapbox`,
    url: 'https://scrapbox.io/tsugitta',
    assetPath: '/assets/social/scrapbox-icon.png',
  },

  {
    identifier: `AtCoder`,
    url: 'https://atcoder.jp/users/tsugitta',
    assetPath: '/assets/social/atcoder-icon.png',
  },
];
