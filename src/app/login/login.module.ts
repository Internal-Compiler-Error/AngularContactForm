import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const routes: Route[] = [{
  path: 'login', component: LoginComponent
}];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class LoginModule {
}
