import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-app1';
  courses:any[];
  constructor(db:AngularFireDatabase){
      db.list('/courses').valueChanges().subscribe( (courses: any) =>{
      this.courses = courses;
      console.log(this.courses);
    });
  }
}
