export interface EducationItem {
  title: string;
  from: Date;
  to: Date | null;
  description: string;
}

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    title: `The univ. of Tokyo`,
    from: new Date('2013-04-01'),
    to: new Date('2017-03-31'),
    description: `Enrolled in Information and Communication engineering (EEIC)`,
  },
];

export const TO_DESC_EDUCATION_ITEMS = EDUCATION_ITEMS.sort((a, b) => {
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
