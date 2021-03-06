import { Component, OnInit } from '@angular/core';
import { UserService } from '../welcomePage/popups/sharedServices/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private userNumber = sessionStorage.getItem('userNumber');

  constructor(private user:UserService, private router : Router) { }

  ngOnInit() {
  }

  logout(){
    sessionStorage.clear();
    console.log(sessionStorage.getItem('jwtToken'))
    console.log(sessionStorage.getItem('userNumber'))
    this.userNumber = ''
    this.router.navigate(['/login/sign-in']);
  }

}
