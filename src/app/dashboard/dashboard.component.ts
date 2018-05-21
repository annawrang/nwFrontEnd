import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private user:UserService, private router : Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['/login/sign-in']);
  }

}
