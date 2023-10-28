import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { FormspreeResponse } from '../models/formspree';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private mailApi = 'https://formspree.io/f/mvojlzno';

  constructor(private http: HttpClient) {}

  PostMessage(formData: any): Observable<FormspreeResponse> {
    return this.http.post<FormspreeResponse>(this.mailApi, formData);
  }
}