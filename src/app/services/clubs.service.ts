import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClubsService {

  URL = 'http://localhost:3000/api/v1/clubs/';

  constructor(private http: HttpClient) {}

  getClubs() {
    return this.http.get(this.URL);
  }

  getClub(id: string) {
  return this.http.get(this.URL + id)
}

  getCount() {
    return this.http.get(this.URL + "/count")
  }
};
