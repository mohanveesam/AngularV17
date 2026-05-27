import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captalize',
  standalone: true,
  pure: true

})
export class CaptalizePipe implements PipeTransform {

  transform(value : String): String {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
