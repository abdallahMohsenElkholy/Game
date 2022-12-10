import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr:any[] , term:string): any[] {
    return arr.filter(ele=>ele.genre==`${term}`)
    }

}
