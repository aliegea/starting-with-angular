import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'available'
})
export class AvailablePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    return value > 0 ? 'fa fa-check' : 'fa fa-times';
  }
  }


