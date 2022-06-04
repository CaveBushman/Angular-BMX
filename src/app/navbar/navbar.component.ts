import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(document:click)': 'this.closeProfileDropdown($event)',
  },
})
export class NavbarComponent implements OnInit {
  @ViewChild('profileDropdownBtn') profileDropdownBtn: any;

  isMobileNavOpen = false;
  isProfileDropdownOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }

  closeProfileDropdown(event: Event) {
    if (!this.profileDropdownBtn.nativeElement.contains(event.target))
      this.isProfileDropdownOpen = false;
  }
}
