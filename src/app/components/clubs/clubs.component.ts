import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ClubsService } from 'src/app/services/clubs.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
})
export class ClubsComponent implements OnInit {
  clubs: any = [];

  title: string = 'Seznam klubů';

  public constructor(
    private titleService: Title,
    private clubsService: ClubsService
  ) {
    this.titleService.setTitle('Seznam klubů');
  }

  ngOnInit(): void {

    this.clubsService.getClubs().subscribe((response: any) => {
      this.clubs = response.data;
      console.log(this.clubs);
    });
  };
}
