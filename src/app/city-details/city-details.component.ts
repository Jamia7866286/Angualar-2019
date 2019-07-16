import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.less']
})
export class CityDetailsComponent implements OnInit {

  constructor() { }
  parent = false;
  parentToChild: any;
  listData = [];
  ngOnInit() {
  }

  showChild() {
    this.parent = true;
  }

  displayChildData(data: any) {
    this.listData.push(data);
  }

  cityComponentChildToParentMethod(data: any) {
    console.log(data);
  }
}
