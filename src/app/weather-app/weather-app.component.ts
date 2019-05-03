import { Component } from '@angular/core';
import {WeatherService} from "../weather.service"

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.less']
})
export class WeatherAppComponent{

  constructor(private getdataaccess : WeatherService) { }
  weatherInput: any
  datacontentShow = false
  // mydt_txt
  datafetch
  submitData(pin: any){
    if(pin){
      this.getdataaccess.getdataServer(pin).subscribe((data:any)=>{
        this.datacontentShow = true;
        this.datafetch = data.list;
        //    this.datafetch = Object.keys(data.list).map((val,index)=>{
        //    this.mydt_txt = data.list[index].dt_txt;
           console.log(this.datafetch);
        //    var initial = this.mydt_txt.split(' ');
        //     return initial[0] + "<br>" + initial[1]
        // }); 
      });
    }
    else{
      this.datacontentShow = false;
      alert("Please Enter Your pin code...");
    }
  }
}
