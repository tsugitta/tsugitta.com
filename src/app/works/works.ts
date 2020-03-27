export type ContributionType = 'Issue' | 'ClosedIssue' | 'PR' | 'MergedPR';

export interface Contribution {
  title: string;
  date: string;
  description: string;
  url: string;
}

export const works: Contribution[] = [
  {
    title: 'create-index',
    date: '2017-09-01',
    url: 'https://github.com/tsugitta/create-index',
    description: 'A VS Code extension to manage index.ts (index.js) easily',
  },

  {
    title: 'redux-observable-rn-alert',
    date: '2018-05-01',
    url: 'https://github.com/tsugitta/redux-observable-rn-alert',
    description:
      'A library to use Alert.alert() with a side-effect in a react-native app using redux & redux-observable.',
  },

  {
    title: 'Kiokuzan',
    date: '2020-03-20',
    url: 'https://kiokuzan.app',
    description: 'A simple web game that trains your working memory',
  },

  {
    title: 'AtCoder judge notifier',
    date: '2020-03-27',
    url: 'https://github.com/tsugitta/atcoder-judge-notifier',
    description:
      'A Chrome extension to notify the result of the submission on AtCoder',
  },
];
