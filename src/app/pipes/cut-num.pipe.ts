import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutNum'
})
export class CutNumPipe implements PipeTransform {

  transform(value:string , num:number): string {
    let fainal:string
    let hold:string[] = value.split('')
    hold.length>num ? fainal=hold.slice(0 ,num).join('')+"..." : fainal=hold.slice(0 ,18).join('')
    return fainal
    }

}
