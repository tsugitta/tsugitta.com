export interface ExperienceItem {
  title: string;
  from: Date;
  to: Date | null;
  description: string;
}

export const experienceItems: ExperienceItem[] = [
  {
    title: `Livesense Inc.`,
    from: new Date('2014-02-01'),
    to: new Date('2014-12-31'),
    description: `Analyst using MySQL & Excel`,
  },

  {
    title: `WealthNavi Inc.`,
    from: new Date('2015-05-01'),
    to: new Date('2015-08-31'),
    description: `Developed a prototype with RoR toward IVS, and a corporate website.`,
  },

  {
    title: `div Inc.`,
    from: new Date('2015-01-01'),
    to: new Date('2016-03-31'),
    description: `Lectured RoR & iOS development.\nDeveloped and managed an e-learning system etc.`,
  },

  {
    title: `Smarby Inc.`,
    from: new Date('2016-01-01'),
    to: new Date('2016-12-31'),
    description: `Developed a babies' cute clothing EC app with RoR & Swift`,
  },

  {
    title: `Tink Inc.`,
    from: new Date('2017-05-01'),
    to: new Date('2019-06-30'),
    description: `Advisor / Developer. Developing apps using React Native, RoR. Intoroduced CI / CD, GKE, and so on.`,
  },

  {
    title: `MICIN Inc.`,
    from: new Date('2016-03-01'),
    to: null,
    description: `Developing extremely innovating medical apps with Go, Angular, React Native, RoR, and so on.`,
  },
];
