import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginRoutingModule} from './login-routing.module';


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
    LoginRoutingModule
  ],
  exports: []
})
export class LoginModule {
}
