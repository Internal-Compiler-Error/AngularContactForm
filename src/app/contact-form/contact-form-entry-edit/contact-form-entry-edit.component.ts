import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form-entry-edit',
  templateUrl: './contact-form-entry-edit.component.html',
  styleUrls: ['./contact-form-entry-edit.component.css']
})
export class ContactFormEntryEditComponent implements OnInit {

  reactiveContactFormEdit: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.reactiveContactFormEdit = this.formBuilder.group({
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
  }

}