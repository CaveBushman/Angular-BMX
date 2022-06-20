import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css'],
})
export class RankingsComponent implements OnInit {

  public constructor(private titleService: Title) {
    this.titleService.setTitle('Ranking');
  }

  ngOnInit(): void {}
}
