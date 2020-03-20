export type ContributionType = 'Issue' | 'ClosedIssue' | 'PR' | 'MergedPR';

export interface Contribution {
  title: string;
  date: string;
  description: string;
  url: string;
}

export const products: Contribution[] = [
  {
    title: 'Kiokuzan',
    date: '2020-03-01',
    url: 'https://kiokuzan.app',
    description: 'A sipmle web game that trains your working memory.',
  },
];
