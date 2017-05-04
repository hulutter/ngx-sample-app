import {AddressLinePipe} from './address-line.pipe';
import {Address} from '../../../../data/entities/address.entity';

let pipe: AddressLinePipe;

const sampleAddress: Address = {
  street: 'TestStreet',
  suite: 'Apartment 1',
  city: 'City',
  zipcode: '12345',
  geo: {
    lat: 1.23,
    lng: 1.23
  }
};

describe('AddressLinePipe', () => {
  beforeEach(() => {
    pipe = new AddressLinePipe();
  });

  it('should return the correct address format', () => {
    const expectedResult = `${sampleAddress.street} ${sampleAddress.suite}, ${sampleAddress.city} ${sampleAddress.zipcode}`;
    expect(pipe.transform(sampleAddress)).toEqual(expectedResult);
  });
});
