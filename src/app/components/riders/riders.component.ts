import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.css'],
})
export class RidersComponent implements OnInit {
  rider = {
    first_name: 'Aleš',
    last_name: 'Barák',
    club: 'SK Jantar Opava',
  };

  public constructor(private titleService: Title) {
    this.titleService.setTitle('Seznam jezdců');
  }

  ngOnInit(): void {}
}
