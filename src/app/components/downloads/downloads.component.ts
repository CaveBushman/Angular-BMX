import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css'],
})
export class DownloadsComponent implements OnInit {
  document = {
    title: 'Název dokumentu',
    description: 'popis dokumentu',
  };

  public constructor(private titleService: Title) {
    this.titleService.setTitle('Ke stažení');
  }

  ngOnInit(): void {}
}
