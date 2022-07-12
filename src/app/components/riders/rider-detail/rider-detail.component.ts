import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RidersService } from 'src/app/services/riders.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-rider-detail',
  templateUrl: './rider-detail.component.html',
  styleUrls: ['./rider-detail.component.css'],
})
export class RiderDetailComponent implements OnInit {

  private _entityId: any;

  public constructor(private titleService: Title, private riderService: RidersService, private _route: ActivatedRoute) {
    this.titleService.setTitle('Detail jezdce');
  }

  rider: any = [];

  ngOnInit(): void {

    this._entityId = this._route.snapshot.paramMap.get('id');

    this.riderService.getRider(this._entityId).subscribe((response: any) => {
      this.rider = response.data;
      console.log(this.rider);
    });
};
}
