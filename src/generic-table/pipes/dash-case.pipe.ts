import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashCase'
})
export class DashCasePipe implements PipeTransform {

  transform(string: string): string {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

}
