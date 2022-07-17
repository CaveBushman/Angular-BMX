import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { tap, map } from "rxjs/operators";
import { BehaviorSubject, Subject } from 'rxjs';
import { IUser } from '../models/iuser';


export interface IAuthData {
  user: IUser
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL = 'http://localhost:3000/api/v1/users/';

  private _authData = new BehaviorSubject<IAuthData | null>(null)

  isUserLogin: boolean = true

  constructor(private http: HttpClient) {}

  get isUserAuthenticated() {
    return this._authData.asObservable().pipe(map(authData => {
      if(!authData) {
        return false
      }
      return !!authData.token
    }))
  }

  get token() {
    return this._authData.asObservable().pipe(map(authData => {
      if(authData) {
        return authData.token
      }
      return null
    }))
  }

  get user() {
    return this._authData.asObservable().pipe(map(authData => {
      if(authData) {
        return authData.user
      }
      return null
    }))
  }

  signup() {
    throw new Error('Not implemented')
    const body = {

    }
    return
  }

  login(email: string, password: string) {
    const body = { email, password }
    return this.http.post<IAuthData>(this.URL+'login', body).pipe(tap(data => {
      this.setUserData(data)
    }))
  }

  logout() {
    this._authData.next(null)
  }

  getUserLogin() {
    return this.isUserLogin
  }

  private setUserData(userData: IAuthData) {
    this._authData.asObservable().subscribe(data => {
      console.log(data);
    })
    this._authData.next(userData)
  }
}
