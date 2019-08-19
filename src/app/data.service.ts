import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  gettech() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getsignin() {
    return this.http.get('http://localhost:3000/posts');
  }
  getfood() {
    return this.http.get('http://localhost:3000/food');
  }
  gettechno() {
    return this.http.get('http://localhost:3000/tech');
  }
}
