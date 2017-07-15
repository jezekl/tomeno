import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakWords'
})
export class BreakWordsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/ /g, '\n');
  }

}
