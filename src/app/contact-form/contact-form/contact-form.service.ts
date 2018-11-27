import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ContactForm} from './contact-form';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

const apiUrl = 'api/v1/contact-form';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private http: HttpClient) {
  }


  getContactForms(): Observable<ContactForm[]> {
    return this.http.get<ContactForm[]>(apiUrl);
  }

  postContactForm(contactForm: ContactForm): Observable<ContactForm> {
    let body = JSON.stringify(contactForm);
    return this.http.post<ContactForm>(apiUrl, body, httpOptions);

  }

  deleteContactForm(id: number) {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  getContactForm(id: number) {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }

}

