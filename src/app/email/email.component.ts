import { Router } from '@angular/router';
import { AngularFire, AuthMethods , AuthProviders } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  state = '';
  error: any;
  user = {
   email: '',
   password: ''
};
  constructor(public af: AngularFire, private router: Router) {
     // tslint:disable-next-line:no-shadowed-variable
     this.af.auth.subscribe( auth => {
       if (auth) {
         this.router.navigateByUrl('/home');
       }
     });
  }
  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password,
      }).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/home']);
        }).catch(
          (err) => {
            console.log(err);
            this.error = err;
          });
    }
  }


  ngOnInit() {
  }

}
