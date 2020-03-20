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
    description: 'VS Code extension to manage index.ts (index.js) easily',
  },

  {
    title: 'Kiokuzan',
    date: '2020-03-01',
    url: 'https://kiokuzan.app',
    description: 'A simple web game that trains your working memory',
  },
];
