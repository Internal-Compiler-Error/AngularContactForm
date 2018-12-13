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
import {ContactFormEntryEditComponent} from './contact-form-entry-edit/contact-form-entry-edit.component';
import {ContactFormRoutingModule} from './contact-form-routing.module';

@NgModule({
  declarations: [
    ContactFormListComponent,
    ContactFormComponent,
    ContactFormEntryEditComponent,
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
    ContactFormRoutingModule
  ],
  exports: [],
})
export class ContactFormModule {
}
