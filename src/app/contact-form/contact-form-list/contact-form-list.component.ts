import {Component, OnInit} from '@angular/core';
import {ContactFormService} from '../contact-form-service/contact-form.service';
import {ContactForm} from '../data-model/contact-form';

@Component({
  selector: 'app-edit',
  templateUrl: './contact-form-list.component.html',
  styleUrls: ['./contact-form-list.component.css']
})
export class ContactFormListComponent implements OnInit {
  selectedForm: ContactForm[];
  form: ContactForm[];
  contactFormService: ContactFormService;

  constructor(private FormService: ContactFormService) {
    this.contactFormService = FormService;
  }

  ngOnInit(): void {
    this.contactFormService.getContactForms().subscribe(
      i => this.form = i
    );
  }

}
