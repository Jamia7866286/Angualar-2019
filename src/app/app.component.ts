import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { Addtasktodoapp2Component } from './addtasktodoapp2/addtasktodoapp2.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-app1';
}
