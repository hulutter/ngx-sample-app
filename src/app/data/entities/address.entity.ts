import {GeoPosition} from './geo-position.entity';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoPosition;
}
