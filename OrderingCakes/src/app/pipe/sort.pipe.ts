import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(customerFirst,  sort='every' ) {
    if(!isNullOrUndefined(customerFirst) && ((sort).trim()) !== ""){
      if (sort == 'every'){
        return customerFirst;
      }
      if (sort == 'choko'){
        let customer = customerFirst.filter(
          customer => customer.cake_name === "Шоколадный"
        );
        return customer;
      }
      else if(sort == 'fruit'){
        let customer = customerFirst.filter(
          customer => customer.cake_name === "Фруктовый"
        );
        return customer;
      }
      else if(sort == 'fruit'){
        let customer = customerFirst.filter(
          customer => customer.cake_name === "Вишнёвый"
        );
        return customer;
      }

      }
    }


}
