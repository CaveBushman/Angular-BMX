import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { tap } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnDestroy{

  private URL = 'http://localhost:3000/api/v1/users/';

  private _user = new BehaviorSubject<IUser | null>(null)

  isUserLogin: boolean = true

  constructor(private http: HttpClient) { }

  ngOnDestroy(): void {
  }

  login(email: string, password: string) {
    const body = { email, password }
    return this.http.post<any>(this.URL+'login', body).pipe(tap(data => {
      
    }))
  }

  getUserLogin() {
    return this.isUserLogin
  }

  private setUserData(userData: any) {
    
  }
}
