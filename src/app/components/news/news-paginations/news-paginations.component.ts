import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-paginations',
  templateUrl: './news-paginations.component.html',
  styleUrls: ['./news-paginations.component.css']
})
export class NewsPaginationsComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  count: number = 0;

  ngOnInit(): void {


    this.newsService.getCount().subscribe((response: any) => {
      this.count = response.data;
    });

  }

}
