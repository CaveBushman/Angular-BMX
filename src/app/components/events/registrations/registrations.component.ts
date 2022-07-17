import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/models/ievent';
import { IEventClasses } from 'src/app/models/ieventclasses';
import { IRider } from 'src/app/models/irider';
import { EventsService } from 'src/app/services/events.service';
import { RidersService } from 'src/app/services/riders.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css'],
})
export class RegistrationsComponent implements OnInit {
  private _eventId: any;
  private _riders!: IRider[];
  event!: IEvent;
  lastNameSearch: string = '';
  clubSearch: string = '';
  eventClasses!: IEventClasses;

  max = 0;
  statusNumber = 0;

  showModal = false;

  isEventLoading: boolean = true;
  isRidersLoading: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private eventsService: EventsService,
    private ridersService: RidersService
  ) {}

  ngOnInit(): void {
    this._eventId = this._route.snapshot.paramMap.get('id');
    this.eventsService.getEvent(this._eventId).subscribe((response: any) => {
      this.event = response.data;
      this.isEventLoading = false;
    });

    this.ridersService.getValidRiders().subscribe((response: any) => {
      this._riders = response.data;
      this.max = this._riders.length;
      this.showModal = true;
      this.getEventClasses(this.event.eventClasses);
    });
  }

  getEventClasses(id: any) {
    this.eventsService.getClassAndFee(id).subscribe((response: any) => {
      this.eventClasses = response.data;
      this._riders.forEach((rider: IRider) => {
        rider.class20 = this.eventsService.setClass20(rider, this.eventClasses);
        rider.class24 = this.eventsService.setClass24(rider, this.eventClasses);
        this.statusNumber++;
      });
      this.isRidersLoading = false;
      this.showModal = false;
    });
  }

  get riders() {
    return this._riders.filter(
      (rider: { lastName: string; club: { name: string } }) =>
        rider.lastName
          .toLowerCase()
          .includes(this.lastNameSearch.toLowerCase().trim()) &&
        rider.club.name
          .toLowerCase()
          .includes(this.clubSearch.toLowerCase().trim())
    );
  }

  get isLoading() {
    return this.isEventLoading || this.isRidersLoading;
  }

  addToCard() {
    console.log("Add To Card button clicked")
  }
}
