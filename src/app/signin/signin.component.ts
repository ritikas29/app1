import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    messageForm: FormGroup;
    submitted = false;
    success = false;
    // tslint:disable-next-line:ban-types
    users: Object = { };
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private FormBuilder: FormBuilder, private data: DataService) {
    this.messageForm = this.FormBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.data.getsignin().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
