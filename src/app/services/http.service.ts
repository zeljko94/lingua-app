import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_LINK = 'http://localhost:8000/api';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAll(table): Observable<any> {
    return this.http.get(this.API_LINK + '/' + table);
  }

  get(table, id): Observable<any> {
    return this.http.get(this.API_LINK + '/' + table + '/' + id, this.options);
  }

  post(table, data) {
    return this.http.post(this.API_LINK + '/' + table, JSON.stringify(data), this.options);
  }

  patch(table, data, id) {
    return this.http.patch(this.API_LINK + '/' + table + '/' + id, JSON.stringify(data), this.options);
  }

  delete(table, id) {
    return this.http.delete(this.API_LINK + '/' + table + '/' + id, this.options);
  }
}
