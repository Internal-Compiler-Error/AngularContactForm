import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ContactFormEntryEditComponent} from './contact-form-entry-edit/contact-form-entry-edit.component';
import {ContactFormListComponent} from './contact-form-list/contact-form-list.component';

const route: Routes = [
  {path: 'contact-form', component: ContactFormComponent},
  {path: 'contact-form/:id', component: ContactFormEntryEditComponent},
  {path: 'contact-form-list', component: ContactFormListComponent}
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
