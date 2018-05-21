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

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(userName, password){
    this.userService.userAuthentication(userName, password).subscribe((data : any) => {
      this.router.navigate(['/dashboard']);
      localStorage.setItem('userToken', 'hejTest');
    },
    (err : HttpErrorResponse)=>{
      this.loginError = true;
    }); 
  }
}
