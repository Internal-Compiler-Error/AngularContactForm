import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RoutingComponent} from './routing/routing.component';
import {WelcomeComponent} from '../welcome/welcome/welcome.component';
import {WelcomeModule} from '../welcome/welcome.module';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'welcome'}
];

@NgModule({
  declarations: [
    RoutingComponent
  ],
  imports: [
    WelcomeModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
