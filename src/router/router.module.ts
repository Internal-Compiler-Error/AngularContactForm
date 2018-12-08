import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RoutingComponent} from './routing/routing.component';
import {WelcomeComponent} from '../app/welcome/welcome/welcome.component';
import {ContactFormListComponent} from '../contact-form/contact-form-list/contact-form-list.component';
import {ContactFormComponent} from '../contact-form/contact-form/contact-form.component';
import {WelcomeModule} from '../app/welcome/welcome.module';
import {ContactFormModule} from '../contact-form/contact-form.module';


const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'contact-form-list', component: ContactFormListComponent},
  {path: 'contact-form', component: ContactFormComponent},
  {path: '', pathMatch: 'full', redirectTo: 'welcome'}
];

@NgModule({
  declarations: [
    RoutingComponent
  ],
  imports: [
    WelcomeModule,
    CommonModule,
    ContactFormModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
