import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://your-api-url.com/users'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  addUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
