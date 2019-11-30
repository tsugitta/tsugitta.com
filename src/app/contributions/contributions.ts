export type ContributionType = 'Issue' | 'ClosedIssue' | 'PR' | 'MergedPR';

export interface Contribution {
  title: string;
  type: ContributionType;
  date: string;
  url: string;
}

export const contributions: Contribution[] = [
  {
    title: 'Loop button bar',
    type: 'PR',
    date: '2016-05-20',
    url: 'https://github.com/xmartlabs/XLPagerTabStrip/pull/169',
  },
  {
    title: 'Use not default but passed soundName when playSound is not passed',
    type: 'MergedPR',
    date: '2016-11-12',
    url: 'https://github.com/zo0r/react-native-push-notification/pull/266',
  },
  {
    title: 'Update some codes syntax to swift3 which cause errors',
    type: 'MergedPR',
    date: '2017-05-25',
    url:
      'https://github.com/react-native-webrtc/react-native-incall-manager/pull/35',
  },
  {
    title: 'Throw error with Stripe error code key in Android',
    type: 'Issue',
    date: '2017-10-06',
    url: 'https://github.com/tipsi/tipsi-stripe/issues/130',
  },
  {
    title:
      "Cli 1.7.2 cannot recognize the interface of an extended class of Node's EventEmitter",
    type: 'ClosedIssue',
    date: '2018-05-06',
    url: 'https://github.com/angular/angular-cli/issues/9870',
  },
  {
    title: "Make actionCreator's `type` public",
    type: 'ClosedIssue',
    date: '2018-05-10',
    url: 'https://github.com/mizchi/hard-reducer/issues/2',
  },
  {
    title: 'Allow Selector to accept arguments besides state',
    type: 'ClosedIssue',
    date: '2018-06-25',
    url: 'https://github.com/ngrx/platform/issues/1152',
  },
];
