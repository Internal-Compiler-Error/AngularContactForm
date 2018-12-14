import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';
import {ContactForm} from './contact-form';

export class ContactFormData implements InMemoryDbService {
  createDb() {
    const data: ContactForm[] = [
      {
        'id': 1,
        'email': 'd@d.cpm',
        'name': 'name',
        'cell': '',
        'address': null,
        'subject': null,
        'message': 'message!'
      }
    ];
    return data;

  }
}
