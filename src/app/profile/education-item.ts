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
