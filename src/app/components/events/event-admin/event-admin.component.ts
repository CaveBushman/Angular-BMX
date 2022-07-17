import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/models/ievent';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.css'],
})
export class EventAdminComponent implements OnInit {
  event!: IEvent;
  private _eventID!: any;

  ridersList: any = [];
  excelHeader: any = [
    'Licence_num',
    'UCI_ID',
    'UCIcode',
    'FederationID',
    'International Licence Code',
    'Expiry_date',
    'Licence_type',
    'Status',
    'Dob',
    'First_name',
    'Surname',
    'Email',
    'Phone',
    'Emergency Contact Person',
    'Emergency Contact Number',
    'Sex',
    'CLUB',
    'State',
    'UCI_Country',
    'Class',
    'Class2',
    'Class3',
    'Tlabel2',
    'Tlabel3',
    'Tlabel4',
    'Reference',
    'Team_No',
    'Team2_No',
    'Team3_No',
    'Team4_No',
    'Sponsor',
    'Comment',
    'Medical Suspension',
    'Disciplinary Suspension',
    'Other Suspension',
    'POA Suspension',
    'Suspension End Date',
    'AdvancedRider',
  ];

  textUpload1: string = 'Click to upload';
  textUpload2: string = 'or drag and drop';

  btnXLS1: string = 'Click to upload';
  btnXLS2: string = 'or drag and drop';

  btnPDF1: string = 'Click to upload';
  btnPDF2: string = 'or drag and drop';

  btnFast1: string = 'Click to upload';
  btnFast2: string = 'or drag and drop';

  btnBEM1: string = 'Click to upload';
  btnBEM2: string = 'or drag and drop';

  constructor(
    private _route: ActivatedRoute,
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this._eventID = this._route.snapshot.paramMap.get('id');
    this.eventsService.getEvent(this._eventID).subscribe((response: any) => {
      this.event = response.data;
    });
  }

  getRidersListFile() {
    console.log('Riders list button clicked');
    this.ridersList.push(this.excelHeader)
    console.log(this.ridersList);

  }

  getEntriesFile() {
    console.log('Entries button clicked');
  }

  processResults() {
    console.log('Process results button clicked');
  }

  editEvent() {
    console.log('Edit event button clicked');
  }
}
