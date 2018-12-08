import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ContactFormListComponent} from './contact-form-list/contact-form-list.component';
import {Route, RouterModule} from '@angular/router';
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


const routes: Route[] = [
  {path: 'contact-form', component: ContactFormComponent},
  {path: 'contact-form/:id', component: ContactFormEntryEditComponent}
];

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
    RouterModule.forChild(routes)
  ],
  exports: [],
})
export class ContactFormModule {
}
