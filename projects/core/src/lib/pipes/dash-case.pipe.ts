import { Pipe, PipeTransform } from '@angular/core';
import { dashed } from '../utilities/utilities';

@Pipe({
  name: 'dashCase',
  standalone: true,
})
export class DashCasePipe implements PipeTransform {
  transform(s: string): any {
    return dashed(s);
  }
}
