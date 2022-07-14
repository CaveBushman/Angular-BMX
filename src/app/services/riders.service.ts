import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class RidersService {
  URL = 'http://localhost:3000/api/v1/riders/';
  SWAGGER_UCI =
    'https://ucibws.uci.ch/api/contacts/riders?filter.uciid=';

  constructor(private http: HttpClient) {}

  getRiders() {
    return this.http.get(this.URL);
  }

  getRider(id: string) {
    return this.http.get(this.URL + id);
  }

  getCount() {
    return this.http.get(this.URL + 'count');
  }

  getSwagger(uciid: number) {
    return this.http.get(this.SWAGGER_UCI + uciid);
  }
}
