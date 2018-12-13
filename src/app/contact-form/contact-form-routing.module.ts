import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ContactFormEntryEditComponent} from './contact-form-entry-edit/contact-form-entry-edit.component';

const route: Routes = [
  {path: 'contact-form', component: ContactFormComponent},
  {path: 'contact-form/:id', component: ContactFormEntryEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactFormRoutingModule {
}
