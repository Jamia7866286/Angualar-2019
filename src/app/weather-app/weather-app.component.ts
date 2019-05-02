import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.less']
})
export class WeatherAppComponent{

  constructor() { }
  weatherInput: any
  submitData(pin: any){
    if(pin === null){
      alert("jii")
    }
    else{
      console.log(pin);
    }
    
  }
}
