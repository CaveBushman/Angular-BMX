import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public constructor(private titleService: Title) {
    this.titleService.setTitle("Czech BMX Website");
  }

  ngOnInit(): void {
  }

}
