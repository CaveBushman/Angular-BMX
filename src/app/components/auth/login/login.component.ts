import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ''
  password: string = ''

  showError: boolean = false
  disableForm: boolean = false

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersService.isUserAuthenticated.subscribe(isAuthenticated => {
      if(isAuthenticated) this.router.navigate([''])
    })
  }

  onLogin() {
    this.disableForm = true
    this.usersService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate([''])
      },
      error: () => {
        this.showError = true
        this.disableForm = false
      }
    })
  }

}
