import { AuthGuard } from './../auth.service';
import { AngularFire, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    state = '';
    error: any;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private http: Http, private router: Router, public af: AngularFire) {
   }
   ngOnInit() {
   }
  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        this.router.navigate(['/login']);
      }).catch(
        (err) => {
        this.error = err;
      });
     }
    }
  }
