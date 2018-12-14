import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ContactFormListComponent} from './contact-form-list/contact-form-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {ContactFormRoutingModule} from './contact-form-routing.module';
import {ContactFormEntryEditComponent} from './contact-form-entry-edit/contact-form-entry-edit.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {ContactFormData} from './data-model/contact-form-data';

@NgModule({
  declarations: [
    ContactFormListComponent,
    ContactFormComponent,
    ContactFormEntryEditComponent
  ],
  imports: [
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
    InMemoryWebApiModule.forRoot(ContactFormData),
    ContactFormRoutingModule
  ],
  exports: [],
})
export class ContactFormModule {
}
