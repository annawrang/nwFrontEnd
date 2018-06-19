import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName: string
  surName: string
  description: string

  constructor() {}

  ngOnInit() {
    console.log('PROFILE!!!');
    
  }

  getProfileDetails(){
    // här ska ett anrop till API göra för att få namn etc.
  }

}
