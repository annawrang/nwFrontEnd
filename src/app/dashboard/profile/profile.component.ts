import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProfileService } from "./profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profileUserNumber
  private profile
  private isMyProfile = false
  private descriptionIsEditable: boolean
  private allDataFetched = false

  constructor(private route: ActivatedRoute, private profileService: ProfileService) {
    this.route.params.subscribe( params => console.log(params) );
    this.profileUserNumber = route.snapshot.params["id"];

    if(this.profileUserNumber === sessionStorage.getItem('userNumber')){
      this.isMyProfile = true
    } 
    this.descriptionIsEditable = false
    this.getProfileDetails(this.profileUserNumber)
  }

  ngOnInit() {
  }

  getProfileDetails(profileUserNumber: string){
    this.profileService.getProfile(profileUserNumber).subscribe( data =>{
      this.profile = data
      this.allDataFetched = true
    })
  }

  onEditDescription(newDescription: string){
    this.descriptionIsEditable = false
    this.profileService.editDescription(newDescription, this.profile).subscribe(data =>{
      console.log(data)
    })
  }

  makeDescriptionEditable(){
    this.descriptionIsEditable = true
  }

}
