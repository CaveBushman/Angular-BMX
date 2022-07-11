import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RidersService } from 'src/app/services/riders.service';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.css'],
})
export class RidersComponent implements OnInit {

  riders: any = [];

  public constructor(private titleService: Title, private ridersService: RidersService) {
    this.titleService.setTitle('Seznam jezdců');

  }

  ngOnInit(): void {
    this.ridersService.getRiders().subscribe((response: any) => {
      this.riders = response.data;
      console.log(this.riders);
    })
  }
}
