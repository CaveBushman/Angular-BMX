import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  isUserLogin: boolean = true

  constructor() { }

  getUserLogin() {
    return this.isUserLogin
  }
}
