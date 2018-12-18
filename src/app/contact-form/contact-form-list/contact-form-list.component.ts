import {Component, OnInit} from '@angular/core';
import {ContactFormService} from '../contact-form-service/contact-form.service';
import {ContactForm} from '../data-model/contact-form';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './contact-form-list.component.html',
  styleUrls: ['./contact-form-list.component.css']
})
export class ContactFormListComponent implements OnInit {
  form: ContactForm[];
  contactFormService: ContactFormService;

  constructor(private FormService: ContactFormService,
              private router: ActivatedRoute) {
    this.contactFormService = FormService;
  }

  public deleteForm(id: number) {
    this.contactFormService.deleteContactForm(id).subscribe();
    alert('deleted, this would be removed once i figure out promise');
    window.location.reload();
  }

  ngOnInit(): void {
    this.contactFormService.getContactForms().subscribe(
      i => {
        this.form = i;
      }
    );
  }

}
