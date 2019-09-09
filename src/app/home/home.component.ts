import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    // tslint:disable-next-line:ban-types
    users: Object = { };
    name: any;
    state = '';
  constructor(private data: DataService , public af: AngularFire, private router: Router ) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
});
  }
  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/login');
}
  ngOnInit() {
     this.data.gettech().subscribe(data => {
       this.users = data;
       console.log(this.users);
     });
     }
    }

