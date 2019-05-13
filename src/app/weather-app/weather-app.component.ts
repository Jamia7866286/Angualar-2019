import { Component } from "@angular/core"
import { WeatherService } from "../weather.service"
import Swal from "sweetalert2"

@Component({
   selector: "app-weather-app",
   templateUrl: "./weather-app.component.html",
   styleUrls: ["./weather-app.component.less"],
})
export class WeatherAppComponent {
   constructor(private getdataaccess: WeatherService) {}
   weatherInput: any
   datacontentShow = false
   // mydt_txt
   datafetch: any
   country_flag: any
   city_name: any
   loader: boolean = false;
   arr: any = []
   submitData(pin: any) {
      this.loader = true;
      if (pin) {
         this.getdataaccess.getdataServer(pin).subscribe(
            (data: any) => {
               this.loader = false
               this.datacontentShow = true
               console.log(data)
               this.country_flag = data.city.country
               this.city_name = data.city.name
               this.datafetch = data.list
               console.log(this.datafetch)

               // let s = new Date(i.dt_txt).toLocaleTimeString()
               data.list.map((val, i) => {
                  this.arr.push(new Date(data.list[i].dt).toLocaleTimeString())
               })
               console.log(this.arr)

               //    this.datafetch = Object.keys(data.list).map((val,index)=>{
               //    this.mydt_txt = data.list[index].dt_txt;
               //    var initial = this.mydt_txt.split(' ');
               //     return initial[0] + "<br>" + initial[1]
               // });
            },
            error => {
               Swal.fire({
                  type: "success",
               })
            }
         )
      } else {
         this.datacontentShow = false
         alert("Please Enter Your pin code...")
      }
   }
}
