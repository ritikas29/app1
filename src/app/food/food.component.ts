import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  users: Object = { };
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getfood().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
