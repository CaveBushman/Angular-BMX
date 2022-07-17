import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css'],
})
export class ProgressbarComponent implements OnInit {
  @Input()
  max: number = 100;

  @Input()
  min: number = 0;

  @Input()
  number: number = 0;

  constructor() {}

  ngOnInit(): void {}

  get percent() {
    return ((this.number - this.min) * (100)) / (this.max - this.min);
  }

  get roundedPercent() {
    return Math.round(this.percent)
  }
}
