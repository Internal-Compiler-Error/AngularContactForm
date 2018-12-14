import {Address} from './address';

export interface ContactForm {
  id: number;
  email: string;
  name: string;
  cell: string;
  address: Address;
  subject: string;
  message: string;
}
