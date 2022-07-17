import { Component, OnInit, ViewChild } from '@angular/core';
import { RidersService } from 'src/app/services/riders.service';

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

  notice: boolean = false;

  constructor(private ridersSerice: RidersService) {}

  ngOnInit(): void {
    this.noticeNewRider();
    this.checkNotice();
  }

  checkNotice() {
    //TODO: dodělat pouze pro ověřené uživatele
    setInterval(() => {
      this.noticeNewRider();
    }, 1000*60*5);
  }

  noticeNewRider() {
    console.log("Zjišťuji nového jezdce")
    this.ridersSerice.getToApprowe().subscribe((response: any) => {
      if (response.data > 0) {
        this.notice = true;
      }
    });
  }

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
