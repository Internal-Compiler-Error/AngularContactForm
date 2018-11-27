import {Component, OnInit} from '@angular/core';
import {ContactFormService} from '../contact-form/contact-form.service';
import {ContactForm} from '../contact-form/contact-form';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  forms: ContactForm[] = [];

  constructor(private contactFormService: ContactFormService) {
  }

  ngOnInit(): void {
    this.contactFormService.getContactForms().subscribe(
      forms => this.forms = forms
    );
  }
}
