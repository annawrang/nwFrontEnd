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

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
  }

  getCookie() : string {
    return this.cookie1;
  }

  setCookie(cookie : string){
    this.cookie1 = cookie;
  }

  OnSubmit(email, password){
    this.userService.userAuthentication(email, password).subscribe(resp => {

      console.log(resp);
      console.log();
      this.router.navigate(['/dashboard']);
    },
    (err : HttpErrorResponse)=>{
      this.loginError = true;
    }); 
  }
}
