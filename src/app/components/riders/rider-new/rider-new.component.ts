import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-rider-new',
  templateUrl: './rider-new.component.html',
  styleUrls: ['./rider-new.component.css'],
})
export class RiderNewComponent implements OnInit {
  rider: any = null
  page: number = 1
  
  constructor() { }

  ngOnInit(): void {
  }

  onNext(rider: any) {
    this.rider = rider
    this.page = 2
  }

}
