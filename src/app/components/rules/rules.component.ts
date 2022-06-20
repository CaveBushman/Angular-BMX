import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css'],
})
export class RulesComponent implements OnInit {

  public constructor(private titleService: Title) {
    this.titleService.setTitle('Pravidla BMX');
  }

  ngOnInit(): void {}
}
