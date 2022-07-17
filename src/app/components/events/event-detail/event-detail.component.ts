import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from 'src/app/models/ievent';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  private _entityId: any;
  event!: IEvent;

  constructor( private _route:ActivatedRoute, private eventsService:EventsService) {}

  ngOnInit(): void {
    this._entityId = this._route.snapshot.paramMap.get('id');
    this.eventsService.getEvent(this._entityId).subscribe((response: any) => {
      this.event = response.data
      console.log(this.event)
    })
  }
}
