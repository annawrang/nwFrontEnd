import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private loginError : boolean = false;
  private cookie1 : string;
  private jwtToken : string;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
  }

  getJwtToken() : string {
    return this.jwtToken;
  }

  OnSubmit(email, password){
    this.userService.userAuthentication(email, password).subscribe(resp => {
      sessionStorage.setItem('jwtToken', 'Bearer ' + resp.headers.get('Auth-Token'))
      sessionStorage.setItem('userNumber', resp.headers.get('Usernumber'))
      console.log(sessionStorage.getItem('jwtToken'))
      console.log(sessionStorage.getItem('userNumber'))
      this.router.navigate(['/dashboard']);
    },
    (err : HttpErrorResponse)=>{
      console.log('error')
      this.loginError = true;
    }); 
  }
}
