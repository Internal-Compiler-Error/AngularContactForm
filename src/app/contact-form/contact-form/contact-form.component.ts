import {Component, OnInit} from '@angular/core';
import {ContactFormService} from '../contact-form-service/contact-form.service';
import {ContactForm} from '../data-model/contact-form';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Country} from '../data-model/country';
import {CanadianProvince} from '../data-model/canadian-province';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  countries: Country[];
  canadianProvinces: CanadianProvince[];

  contactForm: ContactForm;
  reactiveContactForm: FormGroup;

  constructor(public contactFormService: ContactFormService,
              public router: Router,
              public formBuilder: FormBuilder) {
  }

  submitForm(contactForm: FormGroup) {
    this.contactFormService.postContactForm(contactForm.value).subscribe();
    alert('posted, this would be removed once i figure out promise');
    this.router.navigateByUrl('/contact-form-list');
  }

  ngOnInit(): void {

    // create reactive form group controls
    // formBuilder generates proper form group controls
    this.reactiveContactForm = this.formBuilder.group({
      name: ['',
        [Validators.required,
          Validators.pattern('[a-zA-z ]+'),
          Validators.maxLength(80)]
      ],
      email: ['',
        [Validators.required,
          Validators.maxLength(80),
          Validators.email]
      ],
      cell: [''],
      // nested form controls, it will appear in a nested bracket in json
      address: this.formBuilder.group({
        country: '',
        addressLine1: [''],
        city: [''],

        // regex matches a standard canadian address, space required, only caps allowed
        postalCode: ['', Validators.pattern('[A-Z0-9]{3}\ [A-Z0-9]{3}')],

        province: ['']
      }),
      subject: [''],
      message: ['',
        [Validators.required,
          Validators.maxLength(4000)]
      ],
    });

    this.countries = this.contactFormService.countries;
    this.canadianProvinces = this.contactFormService.canadianProvinces;
  }

}


