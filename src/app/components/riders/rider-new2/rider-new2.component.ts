import { Component, Input, OnInit } from '@angular/core';
import { ClubsService } from 'src/app/services/clubs.service';
import { RidersService } from 'src/app/services/riders.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-rider-new2',
  templateUrl: './rider-new2.component.html',
  styleUrls: ['./rider-new2.component.css'],
})
export class RiderNew2Component implements OnInit {
  @Input()
  rider!: any;

  page: number = 2;

  message: boolean = false;
  messageText: string = '';

  clubs: any[] = [];
  freePlates: number[] = [];

  newRider: any = [];

  currentYear: number = new Date().getFullYear();
  age: number = 0;

  constructor(
    private clubsService: ClubsService,
    private ridersService: RidersService,
    private router: Router
  ) {
    this.clubsService.getClubs().subscribe((data: any) => {
      this.clubs = data.data;
    });

    this.ridersService.getPlates().subscribe((data: any) => {
      this.freePlates = data.freePlates;
    });
  }

  ngOnInit(): void {
    if (this.rider.Gender == 'Female') {
      this.rider.Gender = 'Žena';
    } else {
      this.rider.Gender = 'Muž';
    }
    this.rider.girlBonus = true;
  }

  private hideAlert() {
    setTimeout(() => (this.message = false), 5000);
  }

  saveRider() {
    this.rider.is20 = Boolean(this.rider.is20);
    this.rider.is24 = Boolean(this.rider.is24);
    this.rider.isElite = Boolean(this.rider.isElite);

    if (this.rider.email == undefined) {
      this.message = true;
      this.messageText = 'Email není vyplněn, jedná se o povinný údaj';
      return;
    }

    if (this.rider.club == undefined) {
      this.message = true;
      this.messageText = 'Klub není vyplněn, jedná se o povinný údaj';
      return;
    }

    if (this.rider.plate == undefined) {
      this.message = true;
      this.messageText =
        'Startovní číslo není vyplněno, jedná se o povinný údaj';
      return;
    }

    if (!this.rider.is20 && !this.rider.is24) {
      this.message = true;
      this.messageText =
        'Nevybral jsi, jestli budeš jezdit na 20" nebo 24" kolech, jedná se o povinný údaj';
      return;
    }

    // zjistit věk jezdce
    this.age =
      this.currentYear - parseInt(this.rider.Birthdate.substring(0, 4));

    // zjistit kategorie

    this.rider.class20 = this.ridersService.getClass20(
      this.age,
      this.rider.isElite,
      this.rider.Gender
    );

    this.rider.class24 = this.ridersService.getClass24(
      this.age,
      this.rider.Gender
    );

    // zjistit barvu tabulky startovního čísla

    this.rider.plateColor20 = this.ridersService.getPlateColor(
      this.age,
      this.rider.isElite,
      this.rider.Gender
    );

    this.newRider = {
      uciid: this.rider.UCIID,
      firstName: this.rider.FirstName,
      lastName: this.rider.LastName,
      gender: this.rider.Gender,
      dateOfBirth: this.rider.Birthdate,
      girlBonus: this.rider.girlBonus,
      email: this.rider.email,
      street: this.rider.street,
      city: this.rider.city,
      zip: this.rider.zip,
      is20: this.rider.is20,
      is24: this.rider.is24,
      isElite: this.rider.isElite,
      club: this.rider.club,
      transponder20: null,
      transponder24: null,
      plate: parseInt(this.rider.plate),
      plateColor20: this.rider.plateColor20,
      class20: this.rider.class20,
      class24: this.rider.class24,
      point20: 0,
      point24: 0,
      ranking20: null,
      ranking24: null,
      emergencyContact: this.rider.emergencyContact,
      emergencyPhone: this.rider.emergencyPhone,
      isActive: true,
      isApprowe: false,
      photo: 'uni.jpeg',
      isValid: true,
    };

    console.log(this.newRider);

    this.ridersService.postRider(this.newRider).subscribe((response: any) => {
      if (response.success == true) {
        console.log('Jezdec uložen');
        this.router.navigate ([`/rider-new-3`])
      } else {
        this.message = true;
        this.messageText =
          'V ukládání údajů nastala chyba, zkuste to prosím znovu, případně kontaktujte Komisi BMX českého svazu cyklistiky';
        return;
      }
    });
  }
}
