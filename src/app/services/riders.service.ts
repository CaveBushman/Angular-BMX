import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRider } from '../models/irider';

@Injectable({
  providedIn: 'root',
})
export class RidersService {
  URL = 'http://localhost:3000/api/v1/riders/';
  SWAGGER_UCI = 'https://ucibws.uci.ch/api/contacts/riders?filter.uciid=';

  constructor(private http: HttpClient) {}

  getRiders() {
    return this.http.get(this.URL);
  }

  getValidRiders() {
    return this.http.get(this.URL + 'valid');
  }

  getToApprowe() {
    return this.http.get(this.URL + 'toapprowe');
  }

  getRider(id: string) {
    return this.http.get(this.URL + id);
  }

  postRider(rider: IRider) {
    return this.http.post(this.URL, rider);
  }

  getRiderByUciid(uciid: number) {
    return this.http.get(this.URL + '/uciid/' + uciid);
  }

  getCount() {
    return this.http.get(this.URL + 'count');
  }

  getSwagger(uciid: number) {
    return this.http.get(this.SWAGGER_UCI + uciid);
  }

  getPlates() {
    return this.http.get(this.URL + 'freeplates');
  }

  getPlateColor(age: number, isElite: boolean, gender: string) {
    if (!isElite && gender == 'Žena') {
      return 'blue';
    } else if (!isElite && gender == 'Muž') {
      return 'yellow';
    } else if (age <= 18) {
      return 'black';
    } else if (age <= 22) {
      return 'gray';
    } else {
      return 'white';
    }
  }

  getClass20(age: number, isElite: boolean, gender: string) {
    if (isElite) {
      if (gender == 'Muž') {
        if (age <= 18) {
          return 'Men Junior';
        } else if (age <= 22) {
          return 'Men Under 23';
        } else {
          return 'Men Elite';
        }
      } else {
        if (age <= 18) {
          return 'Women Junior';
        } else if (age <= 22) {
          return 'Women Under 23';
        } else {
          return 'Women Elite';
        }
      }
    } else {
      if (gender == 'Muž') {
        if (age <= 6) {
          return 'Boys 6';
        } else if (age == 7) {
          return 'Boys 7';
        } else if (age == 8) {
          return 'Boys 8';
        } else if (age == 9) {
          return 'Boys 9';
        } else if (age == 10) {
          return 'Boys 10';
        } else if (age == 11) {
          return 'Boys 11';
        } else if (age == 12) {
          return 'Boys 12';
        } else if (age == 13) {
          return 'Boys 13';
        } else if (age == 14) {
          return 'Boys 14';
        } else if (age == 15) {
          return 'Boys 15';
        } else if (age == 16) {
          return 'Boys 16';
        } else if (age <= 24) {
          return 'Men 17-24';
        } else if (age <= 29) {
          return 'Men 25-29';
        } else if (age <= 34) {
          return 'Men 30-34';
        } else {
          return 'Men 35 and over';
        }
      } else {
        if (age <= 7) {
          return 'Girls 7';
        } else if (age == 8) {
          return 'Girls 8';
        } else if (age == 9) {
          return 'Girls 9';
        } else if (age == 10) {
          return 'Girls 10';
        } else if (age == 11) {
          return 'Girls 11';
        } else if (age == 12) {
          return 'Girls 12';
        } else if (age == 13) {
          return 'Girls 13';
        } else if (age == 14) {
          return 'Girls 14';
        } else if (age == 15) {
          return 'Girls 15';
        } else if (age == 16) {
          return 'Girls 16';
        } else if (age <= 24) {
          return 'Women 17-24';
        } else {
          return 'Women 25 and over';
        }
      }
    }
  }

  getClass24(age: number, gender: string) {
    if (gender == 'Muž') {
      if (age <= 12) {
        return 'Boys 12 and under';
      } else if (age <= 14) {
        return 'Boys 13 and 14';
      } else if (age <= 16) {
        return 'Boys 15 and 16';
      } else if (age <= 24) {
        return 'Men 17-24';
      } else if (age <= 29) {
        return 'Men 25-29';
      } else if (age <= 34) {
        return 'Men 30-34';
      } else if (age <= 39) {
        return 'Men 35-39';
      } else if (age <= 49) {
        return 'Men 40-49';
      } else {
        return 'Men 50 and over';
      }
    } else {
      if (age <= 12) {
        return 'Girls 12 and under';
      } else if (age <= 16) {
        return 'Girls 13-16';
      } else if (age <= 29) {
        return 'Women 17-29';
      } else if (age <= 39) {
        return 'Women 30-39';
      } else {
        return 'Women 40 and over';
      }
    }
  }
}
