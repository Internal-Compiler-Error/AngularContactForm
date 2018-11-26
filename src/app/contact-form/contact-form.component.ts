import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  constructor(private http: Http) {

  }

  SubmitForm() {
    this.http.post(
      '/api/v1/ContactForm',
      'hi'
    );
  }

}
