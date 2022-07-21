import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClub } from 'src/app/models/iclub';
import { ClubsService } from 'src/app/services/clubs.service';
import { RidersService } from 'src/app/services/riders.service';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})
export class ClubDetailComponent implements OnInit {

  club!: IClub;
  private _entityId: any;
  ridersInClub: number = 0;

  constructor( private clubService: ClubsService, private ridersService: RidersService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._entityId = this._route.snapshot.paramMap.get('id');
    this.clubService.getClub(this._entityId).subscribe((response: any) => {
      this.club = response.data;
          this.ridersService
            .getRidersInClub(this.club)
            .subscribe((response: any) => {
              console.log(response.data);
              this.ridersInClub = response.data;
            });
    })

  }

}
