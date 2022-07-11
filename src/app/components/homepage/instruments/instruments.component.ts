import { Component, OnInit } from '@angular/core';
import { ClubsService } from 'src/app/services/clubs.service';
import { EventsService } from 'src/app/services/events.service';
import { RidersService } from 'src/app/services/riders.service';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css'],
})
export class InstrumentsComponent implements OnInit {
  constructor(private ridersService: RidersService, private clubsService: ClubsService, private eventsService: EventsService) {}

  ridersCount: Number = 0;
  clubsCount: Number = 0;
  eventsCount: Number = 0;

  ngOnInit(): void {

    this.ridersService.getCount().subscribe((response: any) => {
      this.ridersCount = response.data;
    });

    this.clubsService.getCount().subscribe((response: any) => {
      this.clubsCount = response.data;
    });

    this.eventsService.getCount().subscribe((response: any) => {
      this.eventsCount = response.data
    })
  }
}
