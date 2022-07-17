import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  title: string = 'Kalendář závodů';
  currentYear: number = new Date().getFullYear()

  public constructor(private titleService: Title) {
    this.titleService.setTitle('Kalendář závodů');
  }

  ngOnInit(): void {}

  nextYear() {
    this.currentYear++
  }

  prevYear() {
    this.currentYear--
  }
}
