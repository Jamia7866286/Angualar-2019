import { Component } from "@angular/core"
import { WeatherService } from "../weather.service"
// import Swal from "sweetalert2"
@Component({
   selector: "app-weather-app",
   templateUrl: "./weather-app.component.html",
   styleUrls: ["./weather-app.component.less"],
})
export class WeatherAppComponent {
   constructor(private getdataaccess: WeatherService) {}
   weatherInput: any
   datacontentShow = false
   datafetch: any
   country_flag: any
   city_name: any
   loader = true;
   DateArray: any = []
   TimeArray: any = []
   submitData(pin: any) {
      if (pin) {
         this.getdataaccess.getdataServer(pin).subscribe(
            (data: any) => {
               
               this.datacontentShow = true
               console.log(data)
               this.country_flag = data.city.country
               this.city_name = data.city.name
               this.datafetch = data.list

                data.list.map((val: any, index: any) => {
                   this.DateArray.push(new Date(data.list[index].dt_txt).toLocaleDateString());
                })

                data.list.map((val: any,index: any)=>{
                  this.TimeArray.push(new Date(data.list[index].dt_txt).toLocaleTimeString());
                });

               this.loader = false
            }
         )
      } else {
         this.datacontentShow = false
         alert("Please Enter Your pin code...")
      }
   }
}
