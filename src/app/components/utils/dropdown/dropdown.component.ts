import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  host: {
    '(document:click)': 'this.hideMenu($event)',
  },
})
export class DropdownComponent implements OnInit {
  @ViewChild('showBtn') showBtn: any;

  isMenuVisible = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  hideMenu(e: Event) {
    if (!this.showBtn.nativeElement.contains(e.target))
      this.isMenuVisible = false;
  }
}
