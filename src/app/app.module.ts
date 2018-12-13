import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RoutingModule} from './router/router.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {LoginModule} from './login/login.module';
import {ContactFormModule} from './contact-form/contact-form.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LoginModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ContactFormModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
