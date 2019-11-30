import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'urlToRepository' })
export class UrlToRepositoryPipe implements PipeTransform {
  transform(url: string): string {
    const match = url.match(/https:\/\/github.com\/([^/]+)\/([^/]+)/);
    if (!match || !match[1] || !match[2]) {
      return '';
    }

    return `${match[1]}/${match[2]}`;
  }
}
