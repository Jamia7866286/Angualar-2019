import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.less']
})
export class WeatherappComponent {

  weatherVal;
  constructor(private weatheruser: WeatherService) { }
  weatherMethod(pin){
    this.weatheruser.getdataServer(pin).subscribe(data=>{
        console.log(data);
    });
  }

}
