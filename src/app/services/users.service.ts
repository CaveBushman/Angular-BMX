import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { tap, map, switchMap, take } from "rxjs/operators";
import { BehaviorSubject, of, Subject } from 'rxjs';
import { IUser } from '../models/iuser';
import { Router } from '@angular/router';


export interface IAuthData {
  user: IUser
  token: string
  expiresIn: Date | null | undefined
}

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit, OnDestroy {

  private URL = 'http://localhost:3000/api/v1/users/';

  private _authData = new BehaviorSubject<IAuthData | null>(null)

  private logoutTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
      if(this.logoutTimer) {
        clearTimeout(this.logoutTimer)
      }
  }

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

  get isUserAdmin() {
    return this._authData.asObservable().pipe(map(authData => {
      if(authData) {
        return authData.user.roles.includes('admin') || authData.user.roles.includes('superuser')
      }
      return false
    }))
  }

  canLoad(roles: string[]) {
    return this.user.pipe(
      take(1),
      switchMap((user) => {
        if(!user) {
          return of(this.autoLogin())
        }
        return of(user)
      }), switchMap((user) => {
        if(!user) return of(false)
        return of(roles.some(role => user.roles.includes(role)) || user.roles.includes('superuser'))
      })
    )
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
      const expireDate = new Date()
      expireDate.setHours(expireDate.getHours() + 24)
      data.expiresIn = expireDate
      this.setUserData(data)
    }))
  }

  logout() {
    //TODO: send logout
    localStorage.removeItem('authData')
    this._authData.next(null)
  }

  autoLogin(): IUser | null {
    const jsonData = localStorage.getItem('authData')
    if(!jsonData) return null
    const parsedData = JSON.parse(jsonData) as IAuthData
    if(new Date() >= parsedData.expiresIn!) return null
    this._authData.next(parsedData)    
    this.autoLogout((new Date(parsedData.expiresIn!)).getTime() - new Date().getTime())
    return parsedData.user
  }

  private autoLogout(time: number) {
    if(this.logoutTimer) {
      clearTimeout(this.logoutTimer)
    }
    this.logoutTimer = setTimeout(() => {
      console.log("Auto Logout");
      this.logout()
    }, time)
  }

  private setUserData(userData: IAuthData) {
    const jsonData = JSON.stringify(userData)
    localStorage.setItem('authData', jsonData)
    this._authData.next(userData)
    this.autoLogout(userData.expiresIn!.getTime() - new Date().getTime())
  }
}
