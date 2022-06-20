import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  title: string = 'Novinky ze světa BMX';

  news = {
    title: 'Národní dresy',
    content: 'Zde bude text',
  };

  public constructor(private titleService: Title) {
    this.titleService.setTitle('Novinky');
  }

  ngOnInit(): void {}
}
