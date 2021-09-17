import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pad'
})
export class PadPipe implements PipeTransform {

  transform(value: number, amount: number): string {
    
    return String(value).padStart(amount, '0');
  }

}
