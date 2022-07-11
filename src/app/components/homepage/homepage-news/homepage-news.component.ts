import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-homepage-news',
  templateUrl: './homepage-news.component.html',
  styleUrls: ['./homepage-news.component.css']
})
export class HomepageNewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  news: any = []

  ngOnInit(): void {

    this.newsService.getHomepageNews().subscribe((response: any) => {
      this.news = response.data;
    });

  }

}
