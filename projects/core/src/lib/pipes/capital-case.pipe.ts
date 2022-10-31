import { Pipe, PipeTransform } from '@angular/core';
import { capitalize } from '../utilities/utilities';

@Pipe({
  name: 'capitalCase',
  standalone: true,
})
export class CapitalCasePipe implements PipeTransform {
  transform(s: string): any {
    return capitalize(s);
  }
}
