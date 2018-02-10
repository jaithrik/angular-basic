import {Http} from '@angular/http';
import { Component } from '@angular/core';
import {contentHeaders} from './header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor(private http: Http) {}
  
  ngOnInit(){
    this.http.get('http://localhost:3001/api/getTitle',{ headers: contentHeaders })
    .subscribe(response=>{
      this.title = response.json().title;
  });
  }
}
