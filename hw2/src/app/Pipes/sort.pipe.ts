import { Pipe, PipeTransform } from '@angular/core';
import { UrlSerializer } from '@angular/router';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[], args: any[]): any {
    const sortField = args[0];
    const sortDirection = args[1];
    let multiplier = -1

    if(sortDirection === "ascending"){
        multiplier = 1;
    }

   return value.sort((a: any, b: any) => {
      if (a[sortField] < b[sortField]) {
        return -1 * multiplier;
      } else if (a[sortField] > b[sortField]) {
        return 1 * multiplier;
      } else {
        return 0;
      }
    });
  }
}
