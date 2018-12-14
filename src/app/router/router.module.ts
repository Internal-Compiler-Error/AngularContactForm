import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from '../welcome/welcome/welcome.component';
import {WelcomeModule} from '../welcome/welcome.module';
import {ContactFormModule} from '../contact-form/contact-form.module';
import {LoginModule} from '../login/login.module';


const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'welcome'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    WelcomeModule,
    CommonModule,
    ContactFormModule,
    LoginModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
