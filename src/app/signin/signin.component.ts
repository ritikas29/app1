import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {
    public input1: any;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private http: Http, private router: Router) {
     this.input1 = {
           username: '',
           password: '',
           cpassword: ''
     };
   }

  public getsignin() {
    if (this.input1.username && this.input1.password ) {
      const headers = new Headers({ 'content-type': 'application/json'});
      // tslint:disable-next-line:object-literal-shorthand
      const options = new RequestOptions({ headers: headers });
       // tslint:disable-next-line:align
       this.http.post('http://localhost:3000/posts', JSON.stringify(this.input1), options)
        .map(input => input.json() )
        .subscribe(input => {
          this.router.navigate(['/home'], { queryParams: input });
        });
     }
  }

}
