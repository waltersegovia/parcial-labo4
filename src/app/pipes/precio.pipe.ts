import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio',
  standalone: true
})
export class PrecioPipe implements PipeTransform {
 
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: number | string): string {
    const precioNumerico = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(precioNumerico)) {
      return 'Invalid Price';
    }
    return `$${precioNumerico.toFixed(2)}`;
  }

}

/***************************************************** */
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'precio'
//   standalone: true
// })
// export class PrecioPipe implements PipeTransform {

//   transform(value: number | string): string {
//     const precioNumerico = typeof value === 'string' ? parseFloat(value) : value;

//     if (isNaN(precioNumerico)) {
//       return 'Invalid Price';
//     }
//     return `$${precioNumerico.toFixed(2)}`;
//   }

// }