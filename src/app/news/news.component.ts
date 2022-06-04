import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title: string = "Novinky ze světa BMX"

  constructor() { }

  ngOnInit(): void {
  }

}
