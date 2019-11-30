import { Pipe, PipeTransform } from '@angular/core';

/*
 * Example:
 *   {{ new Date('2000-01-01) | toMMMYYYY }}
 *   formats to: Jan 2000
 */

@Pipe({ name: 'toMMMYYYY' })
export class ToMMMYYYYPipe implements PipeTransform {
  transform(obj: Date | string | null): string {
    if (!obj) {
      return '';
    }

    const date: Date = typeof obj === 'string' ? new Date(obj) : obj;
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
