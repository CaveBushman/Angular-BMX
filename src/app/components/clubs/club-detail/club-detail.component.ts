import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClub } from 'src/app/models/iclub';
import { ClubsService } from 'src/app/services/clubs.service';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})
export class ClubDetailComponent implements OnInit {

  club!: IClub;
  private _entityId: any;

  constructor( private clubService: ClubsService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._entityId = this._route.snapshot.paramMap.get('id');
    this.clubService.getClub(this._entityId).subscribe((response: any) => {
      this.club = response.data;
      console.log(this.club);
    });

  }

}
