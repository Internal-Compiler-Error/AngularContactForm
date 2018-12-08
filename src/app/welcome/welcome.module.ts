import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class WelcomeModule {
}
