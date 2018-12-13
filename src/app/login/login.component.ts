import {Component, OnInit} from '@angular/core';
import {Login} from './login';
import {LoginService} from './login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: Login = {} as Login;

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
  }

}
