import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RidersService } from 'src/app/services/riders.service';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.css'],
})
export class RidersComponent implements OnInit {

  _riders: any = [];
  lastNameSearch: string = ''
  clubSearch: string = ''

  public constructor(private titleService: Title, private ridersService: RidersService) {
    this.titleService.setTitle('Seznam jezdců');

  }

  ngOnInit(): void {
    this.ridersService.getRiders().subscribe((response: any) => {
      this._riders = response.data;
      console.log(this._riders);
    })
  }

  get riders() {
    return this._riders.filter((rider: { lastName: string; club: { name: string; }; }) => rider.lastName.toLowerCase().includes(this.lastNameSearch.toLowerCase().trim()) && rider.club.name.toLowerCase().includes(this.clubSearch.toLowerCase().trim()))
  }

}
