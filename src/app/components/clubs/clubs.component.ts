import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
})
export class ClubsComponent implements OnInit {
  club = {
    name: 'Bikrosclub',
    region: 'hlavní město Praha',
    contact_person: 'David Průša',
    contact_email: 'david@black-ops.eu',
    contact_phone: '+420 604 216 745',
  };

  title: string = 'Kalendář závodů';

  public constructor(private titleService: Title) {
    this.titleService.setTitle('Seznam klubů');
  }

  ngOnInit(): void {}
}
