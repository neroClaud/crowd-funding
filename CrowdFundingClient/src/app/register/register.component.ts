import { UserService } from './../services/user.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../service/authentication-service.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ViewChild, Injectable } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RegisterComponent implements OnInit {

  signUpForm: FormGroup;
  public wrongUsernameOrPass: boolean;

  constructor(private authenticationService: AuthenticationService,
    private router: Router, private userService: UserService) {
    this.wrongUsernameOrPass = false;
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'firstname': new FormControl(null),
      'lastname': new FormControl(null),
      'username': new FormControl(null, [Validators.minLength(4), Validators.required], this.forbidenName.bind(this)),
      'password': new FormControl(null, [Validators.minLength(6), Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }
 
  forbidenName(control: FormControl): Promise<any> | Observable<any> {

    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.userService.getUser(control.value).subscribe(
          (isTaken) => {
            if (isTaken) {
              resolve({ "usernameIsForbiden": true });
            } else {
              resolve(null);
            }
          })
      }, 1000)

    })
    return prom;
  }

  register(): void {
   // console.log(this.signUpForm);
    this.authenticationService.registration(this.signUpForm.value).subscribe(
      (loggedIn: boolean) => {
        if (loggedIn) {
          this.router.navigate(['/main']);
        }
      }
      ,
      (err: Error) => {
        if (err.toString() === 'Ilegal register') {
          this.wrongUsernameOrPass = true;
          console.log(err);
        }
        else {
          Observable.throw(err);
        }
      });
  }




}



