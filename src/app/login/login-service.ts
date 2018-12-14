import {HttpClient} from '@angular/common/http';
import {Login} from './login';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';


const url = 'api/v1/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) {
  }

  login(form: Login): Observable<Login> {
    return this.http.post<Login>(url, form);
  }
}
