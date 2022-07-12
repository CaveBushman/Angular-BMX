import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  URL = 'http://localhost:3000/api/v1/news/';

  constructor(private http: HttpClient) {}

  getHomepageNews() {
    return this.http.get(this.URL + 'homepage');
  }

  getPublished() {
    return this.http.get(this.URL + 'published');
  }
}
