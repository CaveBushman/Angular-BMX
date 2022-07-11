import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  URL = 'http://localhost:3000/api/v1/events/';

  constructor(private http:HttpClient) {}

  getCount() {
    return this.http.get(this.URL + 'count');
  }
}
