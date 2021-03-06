import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: any): any {
    return value?.split(' ').splice(0, 1).join(' ') + '...';
  }
}
