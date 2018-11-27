export interface ContactForm {
  id: number;
  // TODO: figure out how to automatically generate an id for each form
  // I might have implemented this???
  email: string;
  name: string;
  message: string;
  addressLine1: string;
  country: string;
  subject: string;
  cell: string;
  province: string;
  city: string;
}
