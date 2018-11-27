import {Component, OnInit} from '@angular/core';
import {ContactFormService} from './contact-form.service';
import {ContactForm} from './contact-form';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm = {} as ContactForm;
  contactFormService;

  constructor(contactFormService: ContactFormService) {
    this.contactFormService = contactFormService;

  }

  post(contactForm: NgForm) {
    console.log('posting form!');
    this.contactFormService.postContactForm(this.contactForm).subscribe();
    // this.contactFormService.postContactForm(contactForm.value).subscribe();
  }

  ngOnInit(): void {
  }
}

