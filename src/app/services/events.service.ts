import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEvent } from '../models/ievent';
import { IEventClasses } from '../models/ieventclasses';
import { IRider } from '../models/irider';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  URL = 'http://localhost:3000/api/v1/events/';
  URL_CLASSES = 'http://localhost:3000/api/v1/eventclasses/';

  constructor(private http: HttpClient) { }

  getCount() {
    return this.http.get(this.URL + 'count');
  }

  getEventByYear(year: number) {
    return this.http.get(this.URL + '/year/' + year);
  }

  getEvent(id: string) {
    return this.http.get(this.URL + id);
  }

  getClassAndFee(id: string) {
    return this.http.get(this.URL_CLASSES + id);
  }

  setClass20(rider: IRider, eventClasses: IEventClasses) {
  
    if (rider.class20 == 'Boys 6') {
      return eventClasses.boys6Class;
    } else if (rider.class20 == 'Boys 7') {
      return eventClasses.boys7Class;
    } else if (rider.class20 == 'Boys 8') {
      return eventClasses.boys8Class;
    } else if (rider.class20 == 'Boys 9') {
      return eventClasses.boys9Class;
    } else if (rider.class20 == 'Boys 10') {
      return eventClasses.boys10Class;
    } else if (rider.class20 == 'Boys 11') {
      return eventClasses.boys11Class;
    } else if (rider.class20 == 'Boys 12') {
      return eventClasses.boys12Class;
    } else if (rider.class20 == 'Boys 13') {
      return eventClasses.boys13Class;
    } else if (rider.class20 == 'Boys 14') {
      return eventClasses.boys14Class;
    } else if (rider.class20 == 'Boys 15') {
      return eventClasses.boys15Class;
    } else if (rider.class20 == 'Boys 16') {
      return eventClasses.boys16Class;
    } else if (rider.class20 == 'Men 17-24') {
      return eventClasses.men17Class;
    } else if (rider.class20 == 'Men 25-29') {
      return eventClasses.men25Class;
    } else if (rider.class20 == 'Men 30-34') {
      return eventClasses.men30Class;
    } else if (rider.class20 == 'Men 35 and over') {
      return eventClasses.men35Class;
    } else if (rider.class20 == 'Girls 7') {
      return eventClasses.girls7Class;
    } else if (rider.class20 == 'Girls 8') {
      return eventClasses.girls8Class;
    } else if (rider.class20 == 'Girls 9') {
      return eventClasses.girls9Class;
    } else if (rider.class20 == 'Girls 10') {
      return eventClasses.girls10Class;
    } else if (rider.class20 == 'Girls 11') {
      return eventClasses.girls11Class;
    } else if (rider.class20 == 'Girls 12') {
      return eventClasses.girls12Class;
    } else if (rider.class20 == 'Girls 13') {
      return eventClasses.girls13Class;
    } else if (rider.class20 == 'Girls 15') {
      return eventClasses.girls15Class;
    } else if (rider.class20 == 'Girls 16') {
      return eventClasses.girls16Class;
    } else if (rider.class20 == 'Women 17 - 24') {
      return eventClasses.women17Class;
    } else if (rider.class20 == 'Women 25 and over') {
      return eventClasses.women25Class;
    } else if (rider.class20 == 'Men Junior') {
      return eventClasses.menJuniorClass;
    } else if (rider.class20 == 'Women Junior') {
      return eventClasses.womenJuniorClass;
    } else if (rider.class20 == 'Men Under 23') {
      return eventClasses.menUnder23Class;
    } else if (rider.class20 == 'Women Under 23') {
      return eventClasses.womenUnder23Class;
    } else if (rider.class20 == 'Men Elite') {
      return eventClasses.menEliteClass
    } else {
      return eventClasses.womenEliteClass
    }
  }

  setClass24(rider: IRider, eventClasses: IEventClasses) {

    if (rider.class24 == 'Boys 12 and under') {
      return eventClasses.boys12CrClass;
    } else if (rider.class24 == 'Boys 13 and 14') {
      return  eventClasses.boys13CrClass;
    } else if (rider.class24 == 'Boys 15 and 16') {
      return eventClasses.boys15CrClass;
    } else if (rider.class24 == 'Men 17-24') {
      return eventClasses.men17CrClass;
    } else if (rider.class24 == 'Men 25-19') {
      return eventClasses.men25CrClass;
    } else if (rider.class24 == 'Men 25-39') {
      return eventClasses.men25CrClass;
    } else if (rider.class24 == 'Men 30-34') {
      return eventClasses.men30CrClass;
    } else if (rider.class24 == 'Men 35-39') {
      return eventClasses.men35CrClass;
    } else if (rider.class24 == 'Men 40-49') {
      return eventClasses.men40CrClass;
    } else if (rider.class24 == 'Men 50 and over') {
      return eventClasses.men50CrClass;
    } else if (rider.class24 == 'Girls 12 and under') {
      return eventClasses.girls12CrClass;
    } else if (rider.class24 == 'Girls 13-16') {
      return eventClasses.girls13CrClass;
    } else if (rider.class24 == 'Women 17-29') {
      return eventClasses.women17CrClass;
    } else if (rider.class24 == 'Women 30-39') {
      return eventClasses.women30CrClass;
    } else {
      return eventClasses.women40CrClass;
    }
  }
}
