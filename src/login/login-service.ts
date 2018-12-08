import {HttpClient} from '@angular/common/http';
import {Login} from './login';
import {Observable} from 'rxjs';


const url = 'api/v1/login';

export class LoginService {

  constructor(public http: HttpClient) {
  }

  login(form: Login): Observable<Login> {
    return this.http.post<Login>(url, form);
  }
}
