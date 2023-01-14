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
    type: 'ClosedIssue',
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
    title: 'Add size property to ActionButonItemProperties interface',
    type: 'MergedPR',
    date: '2018-06-12',
    url: 'https://github.com/mastermoo/react-native-action-button/pull/283',
  },
  {
    title: 'Allow Selector to accept arguments besides state',
    type: 'ClosedIssue',
    date: '2018-06-25',
    url: 'https://github.com/ngrx/platform/issues/1152',
  },
  {
    title:
      'BottomSheetScrollView cannot scroll when used with Dynamic Snap Point',
    type: 'ClosedIssue',
    date: '2021-06-20',
    url: 'https://github.com/gorhom/react-native-bottom-sheet/issues/496',
  },
  {
    title: "Can't use LessThan for Union field",
    type: 'Issue',
    date: '2022-06-27',
    url: 'https://github.com/typeorm/typeorm/issues/9152',
  },
  {
    title: '[RFC]: validate accepts a function as same as validateWith',
    type: 'ClosedIssue',
    date: '2022-10-28',
    url: 'https://github.com/redwoodjs/redwood/issues/6759',
  },
  {
    title: 'feat: add CustomValidator',
    type: 'MergedPR',
    date: '2022-12-08',
    url: 'https://github.com/redwoodjs/redwood/pull/7051',
  },
  {
    title: 'fix: allow FindOptionsWhere to accept LessThan with Union',
    type: 'PR',
    date: '2022-12-08',
    url: 'https://github.com/typeorm/typeorm/pull/9607',
  },
  {
    title: 'fix: correct Cell prop types when used with beforeQuery',
    type: 'PR',
    date: '2022-12-09',
    url: 'https://github.com/redwoodjs/redwood/pull/7063',
  },
  {
    title: 'feat: allow to re-patch DataSource & Repository',
    type: 'PR',
    date: '2022-12-26',
    url: 'https://github.com/Aliheym/typeorm-transactional/pull/23',
  },
  {
    title:
      '@Transactional({ connectionName }) does not switch repositories injected by NestJS',
    type: 'Issue',
    date: '2023-01-04',
    url: 'https://github.com/Aliheym/typeorm-transactional/issues/24',
  },
];
