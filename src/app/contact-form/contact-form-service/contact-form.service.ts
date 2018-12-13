import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ContactForm} from '../contact-form/contact-form';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


const apiUrl = 'api.bilwang2001.com/v1';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  forms: ContactForm[] = [];

  displayedColumns: string[] = ['select', 'id', 'name', 'email', 'message'];

  constructor(private http: HttpClient) {
  }


  getContactForms(): Observable<ContactForm[]> {
    return this.http.get<ContactForm[]>(apiUrl);
  }

  postContactForm(contactForm: ContactForm): Observable<ContactForm> {
    let body = JSON.stringify(contactForm);
    console.log(body);
    return this.http.post<ContactForm>(apiUrl, body, httpOptions);

  }

  deleteContactForm(id: number) {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  getContactForm(id: number): Observable<ContactForm> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<ContactForm>(url, httpOptions);
  }

}

