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
  URL_UPLOAD = 'http://localhost:3000/api/v1/uploads/';

  constructor(private http: HttpClient) { }

  getCount() {
    return this.http.get(this.URL + 'count');
  }

  getEventByYear(year: number) {
    return this.http.get(this.URL + 'year/' + year);
  }

  getEvent(id: string) {
    return this.http.get(this.URL + id);
  }

  patchEvent(id: string, body: any) {

    return this.http.patch(this.URL +"/" + id, body)

  }

  postDeleteFile (body: any) {
    return this.http.post(this.URL_UPLOAD + "delete", body);
  }

  getClassAndFee(id: string) {
    return this.http.get(this.URL_CLASSES + id);
  }

  postFileXLS(formData: any) {
    console.log(formData);
    return this.http.post(this.URL_UPLOAD + "xls", formData)
  }

  postFilePDF(formData: any) {
    console.log(formData);
    return this.http.post(this.URL_UPLOAD + "pdf", formData)
  }

  postFileFast(formData: any) {
    console.log(formData);
    return this.http.post(this.URL_UPLOAD + "fast", formData)
  }

  postFileBEM(formData: any) {
    console.log(formData);
    return this.http.post(this.URL_UPLOAD + "bem", formData)
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
      return eventClasses.boys13CrClass;
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

  setPoints(event: IEvent, position: number) {
    // RANKING CODE 1 - Mistrovství ČR jednotlivců
    if (event.rankingType == 'Mistrovství ČR jednotlivců') {
      if (position == 1) {
        return 350;
      } else if (position == 2) {
        return 300;
      } else if (position == 3) {
        return 250;
      } else if (position == 4) {
        return 200;
      } else if (position == 5) {
        return 190;
      } else if (position == 6) {
        return 180;
      } else if (position == 7) {
        return 170;
      } else if (position == 8) {
        return 160;
      } else if (position == 9) {
        return 125;
      } else if (position == 10) {
        return 125;
      } else if (position == 11) {
        return 120;
      } else if (position == 12) {
        return 120;
      } else if (position == 13) {
        return 115;
      } else if (position == 14) {
        return 115;
      } else if (position == 15) {
        return 110;
      } else if (position == 16) {
        return 110;
      } else if (position == 17) {
        return 90;
      } else if (position == 18) {
        return 90;
      } else if (position == 19) {
        return 90;
      } else if (position == 20) {
        return 90;
      } else if (position == 21) {
        return 80;
      } else if (position == 22) {
        return 80;
      } else if (position == 23) {
        return 80;
      } else if (position == 24) {
        return 80;
      } else if (position == 25) {
        return 70;
      } else if (position == 26) {
        return 70;
      } else if (position == 27) {
        return 70;
      } else if (position == 28) {
        return 70;
      } else if (position == 29) {
        return 60;
      } else if (position == 30) {
        return 60;
      } else if (position == 31) {
        return 60;
      } else if (position == 32) {
        return 60;
      } else {
        return 0;
      }
    }

    // RANKING CODE 2 - Český pohár
    if (event.rankingType == 'Český pohár') {
      if (position == 1) {
        return 150;
      } else if (position == 2) {
        return 130;
      } else if (position == 3) {
        return 115;
      } else if (position == 4) {
        return 100;
      } else if (position == 5) {
        return 90;
      } else if (position == 6) {
        return 80;
      } else if (position == 7) {
        return 75;
      } else if (position == 8) {
        return 70;
      } else if (position == 9) {
        return 65;
      } else if (position == 10) {
        return 65;
      } else if (position == 11) {
        return 60;
      } else if (position == 12) {
        return 60;
      } else if (position == 13) {
        return 55;
      } else if (position == 14) {
        return 55;
      } else if (position == 15) {
        return 50;
      } else if (position == 16) {
        return 50;
      } else if (position == 17) {
        return 40;
      } else if (position == 18) {
        return 40;
      } else if (position == 19) {
        return 40;
      } else if (position == 20) {
        return 40;
      } else if (position == 21) {
        return 35;
      } else if (position == 22) {
        return 35;
      } else if (position == 23) {
        return 35;
      } else if (position == 24) {
        return 35;
      } else if (position == 25) {
        return 30;
      } else if (position == 26) {
        return 30;
      } else if (position == 27) {
        return 30;
      } else if (position == 28) {
        return 30;
      } else if (position == 29) {
        return 25;
      } else if (position == 30) {
        return 25;
      } else if (position == 31) {
        return 25;
      } else if (position == 32) {
        return 25;
      } else {
        return 0;
      }
    }

    // RANKING CODE 4 - Volný závod
    if (event.rankingType == 'Volný závod') {
      if (position == 1) {
        return 60;
      } else if (position == 2) {
        return 45;
      } else if (position == 3) {
        return 40;
      } else if (position == 4) {
        return 35;
      } else if (position == 5) {
        return 30;
      } else if (position == 6) {
        return 25;
      } else if (position == 7) {
        return 20;
      } else if (position == 8) {
        return 15;
      } else if (position == 9) {
        return 8;
      } else if (position == 10) {
        return 8;
      } else if (position == 11) {
        return 6;
      } else if (position == 12) {
        return 6;
      } else if (position == 13) {
        return 4;
      } else if (position == 14) {
        return 4;
      } else if (position == 15) {
        return 2;
      } else if (position == 16) {
        return 2;
      } else {
        return 0;
      }
    }

    // RANKING CODE 3 - Česká a Moravská liga
    if (event.rankingType == 'Česká liga' || event.rankingType == "Moravská liga") {
      if (position == 1) {
        return 60;
      } else if (position == 2) {
        return 45;
      } else if (position == 3) {
        return 40;
      } else if (position == 4) {
        return 35;
      } else if (position == 5) {
        return 30;
      } else if (position == 6) {
        return 25;
      } else if (position == 7) {
        return 20;
      } else if (position == 8) {
        return 15;
      } else if (position == 9) {
        return 8;
      } else if (position == 10) {
        return 8;
      } else if (position == 11) {
        return 6;
      } else if (position == 12) {
        return 6;
      } else if (position == 13) {
        return 4;
      } else if (position == 14) {
        return 4;
      } else if (position == 15) {
        return 2;
      } else if (position == 16) {
        return 2;
      } else {
        return 0;
      }
    }
    // RANKING CODE 4 - Volný závod
    if (event.rankingType == 'Volný závod') {
      if (position == 1) {
        return 60;
      } else if (position == 2) {
        return 45;
      } else if (position == 3) {
        return 40;
      } else if (position == 4) {
        return 35;
      } else if (position == 5) {
        return 30;
      } else if (position == 6) {
        return 25;
      } else if (position == 7) {
        return 20;
      } else if (position == 8) {
        return 15;
      } else if (position == 9) {
        return 8;
      } else if (position == 10) {
        return 8;
      } else if (position == 11) {
        return 6;
      } else if (position == 12) {
        return 6;
      } else if (position == 13) {
        return 4;
      } else if (position == 14) {
        return 4;
      } else if (position == 15) {
        return 2;
      } else if (position == 16) {
        return 2;
      } else {
        return 0;
      }
    }

    // RANKING CODE 4 - Volný závod
    if (event.rankingType == 'Volný závod') {
      if (position == 1) {
        return 60;
      } else if (position == 2) {
        return 45;
      } else if (position == 3) {
        return 40;
      } else if (position == 4) {
        return 35;
      } else if (position == 5) {
        return 30;
      } else if (position == 6) {
        return 25;
      } else if (position == 7) {
        return 20;
      } else if (position == 8) {
        return 15;
      } else if (position == 9) {
        return 8;
      } else if (position == 10) {
        return 8;
      } else if (position == 11) {
        return 6;
      } else if (position == 12) {
        return 6;
      } else if (position == 13) {
        return 4;
      } else if (position == 14) {
        return 4;
      } else if (position == 15) {
        return 2;
      } else if (position == 16) {
        return 2;
      } else {
        return 0;
      }
    }
    return 0;
  }
}
