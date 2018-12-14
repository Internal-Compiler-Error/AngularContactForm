import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RoutingModule} from './router/router.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {ContactFormRoutingModule} from './contact-form/contact-form-routing.module';
import {LoginRoutingModule} from './login/login-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ContactFormRoutingModule,
    // LoginRoutingModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
