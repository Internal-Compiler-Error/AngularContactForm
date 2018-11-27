import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormEntryComponent} from './form-entry/form-entry.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {EditComponent} from './edit/edit.component';

@NgModule({
  declarations: [
    FormEntryComponent,
    ContactFormComponent,
    EditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactFormModule {
}
