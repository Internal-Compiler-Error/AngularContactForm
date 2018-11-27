import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EditComponent} from './contact-form/edit/edit.component';
import {ContactFormComponent} from './contact-form/contact-form/contact-form.component';
import {HttpClientModule} from '@angular/common/http';
import {FormEntryComponent} from './contact-form/form-entry/form-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    EditComponent,
    FormEntryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot([
      {path: 'ContactForm', component: ContactFormComponent},
      {path: 'Edit', component: EditComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
