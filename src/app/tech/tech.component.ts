import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  users: Object = { };
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.gettechno().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
