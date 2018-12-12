import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from '../app/welcome/welcome/welcome.component';
import {WelcomeModule} from '../app/welcome/welcome.module';
import {ContactFormModule} from '../contact-form/contact-form.module';


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
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
