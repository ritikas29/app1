import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    messageForm: FormGroup;
    submitted = false;
    success = false;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private FormBuilder: FormBuilder) {
    this.messageForm = this.FormBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

}
