import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  users: Object = { };
  constructor( private data: DataService) { }

  ngOnInit() {
    this.data.gettravel().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
