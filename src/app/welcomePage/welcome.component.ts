import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './popups/sharedServices/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../welcomePage/popups/sharedServices/user.model';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private loginError: boolean = false;
  private jwtToken: string;
  private user: User;
  modalReference: any;


  constructor(private modalService: NgbModal, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  openSignUp(content) {
    this.modalReference = this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openLogIn(content) {
    this.modalReference = this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }
   
  closeModal(content){
    this.modalReference.close();
  }

  loginUser(content, email: string, password: string) {
    this.userService.userAuthentication(email, password).subscribe(resp => {
      sessionStorage.setItem('jwtToken', 'Bearer ' + resp.headers.get('Auth-Token'))
      sessionStorage.setItem('userNumber', resp.headers.get('Usernumber'))
      console.log(sessionStorage.getItem('jwtToken'))
      console.log(sessionStorage.getItem('userNumber'))
      this.closeModal(content);
      this.router.navigate(['/dashboard']);
    },
      (err: HttpErrorResponse) => {
        console.log('error')
        this.loginError = true;
      });
  }

  registerUser(form: NgForm){
    this.userService.registerUser(form.value).subscribe( resp =>{
      console.log(resp)
    })
  }

}
