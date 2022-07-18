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
    localStorage.removeItem('authData')
    this._authData.next(null)
  }

  // autoLogin() {
  //   const jsonData = localStorage.getItem('authData')
  //   if(!jsonData) return null
  //   const parsedData = JSON.parse(jsonData) as IAuthData
  // }

  private setUserData(userData: IAuthData) {
    const jsonData = JSON.stringify(userData)
    localStorage.setItem('authData', jsonData)
    this._authData.next(userData)
  }
}
