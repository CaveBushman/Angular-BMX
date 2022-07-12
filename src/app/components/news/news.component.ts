import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  title: string = 'Novinky ze světa BMX';

  news: any = [];

  public constructor(private titleService: Title, private newsService: NewsService) {
    this.titleService.setTitle('Novinky');
  }

  ngOnInit(): void {

        this.newsService.getPublished().subscribe((response: any) => {
          this.news = response.data;
          console.log(this.news);
        });

  }
}
