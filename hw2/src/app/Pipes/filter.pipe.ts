import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 

  transform(value: any[], arg: string): any{
    if(!arg){
      return value;
    }
    return value.filter((user)=>{
      return user.firstName.toLowerCase().includes(arg.toLowerCase());
    })
  }

}


