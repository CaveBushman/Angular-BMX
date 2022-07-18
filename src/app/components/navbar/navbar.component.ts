import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RidersService } from 'src/app/services/riders.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(document:click)': 'this.closeProfileDropdown($event)',
  },
})
export class NavbarComponent implements OnInit, OnChanges {
  @ViewChild('profileDropdownBtn') profileDropdownBtn: any;

  isMobileNavOpen = false;
  isProfileDropdownOpen = false;

  isUserLogin: boolean = false;

  notice: boolean = false;

  constructor(private ridersSerice: RidersService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.noticeNewRider();
    this.checkNotice();
    this.usersService.isUserAuthenticated.subscribe(isAuthenticated => {
      this.isUserLogin = isAuthenticated
    })
    this.usersService.autoLogin()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  checkNotice() {
    //TODO: dodělat pouze pro ověřené uživatele
    setInterval(() => {
      this.noticeNewRider();
    }, 1000 * 60 * 5);
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

  logout() {
    this.usersService.logout()
  }
}
