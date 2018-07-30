import { Component, OnInit } from '@angular/core';
import { User } from '../../welcomePage/popups/sharedServices/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../welcomePage/popups/sharedServices/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private user: User;

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null){
      form.reset();
      this.user = {
        password : '',
        email : '',
        firstName : '',
        surName : ''
      }
    }
  }

  OnSubmit(form: NgForm){
    this.userService.registerUser(form.value);
    this.resetForm(form);
  }

}
