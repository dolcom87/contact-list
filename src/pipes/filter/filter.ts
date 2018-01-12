import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], ...args) {
    if (!items)
      return items;
    return items.filter(item => item.gender == args[0]);
  }
}
