import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
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
