import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IEvent } from 'src/app/models/ievent';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-list-table',
  templateUrl: './events-list-table.component.html',
  styleUrls: ['./events-list-table.component.css']
})
export class EventsListTableComponent implements OnInit, OnChanges {
  @Input() year: number = 0;

  events: any = [];

  constructor(private eventsService:EventsService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.eventsService.getEventByYear(this.year).subscribe((response: any) => {
    this.events = response.data;
    });
  }

  ngOnInit(): void {

    this.eventsService.getEventByYear(this.year).subscribe((response: any) => {
      this.events = response.data
    });
  }


}
