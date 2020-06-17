import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  search:"";
  transform(customerFirst, search) {


if (!isNullOrUndefined(customerFirst) && search.trim() !== "") {
  let filter = customerFirst.filter(
    customerFirst => customerFirst.name_customer.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  return filter;
}
else
return customerFirst;

}

}
