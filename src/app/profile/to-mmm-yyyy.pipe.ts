import { Pipe, PipeTransform } from '@angular/core';

/*
 * Example:
 *   {{ new Date('2000-01-01) | toMMMYYYY }}
 *   formats to: Jan 2000
*/

@Pipe({name: 'toMMMYYYY'})
export class ToMMMYYYYPipe implements PipeTransform {
  transform(date: Date | null): string {
    if (!date) {
      return '';
    }

    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  }
}

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
