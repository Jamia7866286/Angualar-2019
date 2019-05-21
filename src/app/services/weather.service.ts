import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getdataServer(pin:any){
    return this.http.get("http://api.openweathermap.org/data/2.5/forecast?zip="+ pin +",in&appid=984c9f59ed850fb1a3c99136a045d266"); 
  }
}
