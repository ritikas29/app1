import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   public input: any;
  constructor(private http: Http, private router: Router) {
    this.input = {
      username: '',
      password: ''
    };
  }
  public login() {
    if (this.input.username && this.input.password ) {
        const headers = new Headers({ 'content-type': 'application/json'});
        // tslint:disable-next-line:object-literal-shorthand
        const options = new RequestOptions({ headers: headers });
         // tslint:disable-next-line:align
         this.http.post('http://localhost:3000/posts', JSON.stringify(this.input), options)
          .map(input => input.json() )
          .subscribe(input => {
            this.router.navigate(['/home'], { queryParams: input });
          });
       }

  }


}
