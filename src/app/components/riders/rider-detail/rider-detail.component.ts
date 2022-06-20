import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rider-detail',
  templateUrl: './rider-detail.component.html',
  styleUrls: ['./rider-detail.component.css'],
})
export class RiderDetailComponent implements OnInit {

  public constructor(private titleService: Title) {
    this.titleService.setTitle('Detail jezdce');
  }

  ngOnInit(): void {}
}
