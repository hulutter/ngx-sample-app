import {Pipe, PipeTransform} from '@angular/core';
import {Address} from '../../../../data/entities/address.entity';

@Pipe({
  name: 'addressLine'
})
export class AddressLinePipe implements PipeTransform {

  transform(address: Address, args?: any): any {
    return `${address.street} ${address.suite}, ${address.city} ${address.zipcode}`;
  }
}
