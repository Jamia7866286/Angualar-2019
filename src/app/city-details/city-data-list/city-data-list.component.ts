import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-data-list',
  templateUrl: './city-data-list.component.html',
  styleUrls: ['./city-data-list.component.less']
})
export class CityDataListComponent implements OnInit {

  @Input() parentData: Array<any>;
  constructor() { }

  ngOnInit() {
    console.log(this.parentData);
  }

}


