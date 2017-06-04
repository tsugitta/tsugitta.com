export interface ExperienceItem {
  title: string;
  from: Date;
  to: Date | null;
  description: string;
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    title: `Livesense Inc.`,
    from: new Date('2014-02-01'),
    to: new Date('2014-12-31'),
    description: `Data analysis using MySQL & Excel.`,
  },

  {
    title: `WealthNavi Inc.`,
    from: new Date('2015-05-01'),
    to: new Date('2015-08-31'),
    description: `Develop a prototype with RoR toward IVS, and a corporate website`,
  },

  {
    title: `div Inc.`,
    from: new Date('2015-01-01'),
    to: new Date('2016-03-31'),
    description: `Ruby & Swift lecturer. \n Develop a customer-management tool etc.`,
  },

  {
    title: `Smarby Inc.`,
    from: new Date('2016-01-01'),
    to: new Date('2016-12-31'),
    description: `Develop server(RoR) & iOS(Swift) of EC service`,
  },

  {
    title: `Micin Inc.`,
    from: new Date('2016-03-01'),
    to: null,
    description: `Develop server-side(RoR) & mobile-side(ReactNative) & Web(Angular)`,
  },
];

export const TO_DESC_EXPERIENCE_ITEMS = EXPERIENCE_ITEMS.sort((a, b) => {
  if (a.to === null && b.to !== null && 1) {
    return -1;
  }

  if (b.to === null && a.to !== null && 1) {
    return 1;
  }

  if (a.to === null && b.to === null) {
    return a.from.getTime() > b.from.getTime() ? -1 : 1;
  }

  const aToTime = (<Date> a.to).getTime();
  const bToTime = (<Date> b.to).getTime();

  return aToTime > bToTime ? -1 : 1;
});
