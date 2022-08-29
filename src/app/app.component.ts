import { WeatherApiService } from './services/weather-api.service';
import { Component } from '@angular/core';
import { WeatherData } from './models/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wether-App';
   city:string ="hebron";
   weather?:WeatherData;
   temp:number=2;
   description?:string;
   imageUrl?:string;
  constructor(public apiserv:WeatherApiService){
    apiserv.getWeatherData(this.city).subscribe((params) => {
      this.weather = params as WeatherData;
      this.temp = +this.weather.main.temp;
      this.description = this.weather.weather[0]?.description;
      this.imageUrl =`http://openweathermap.org/img/w/${this.weather?.weather[0]?.icon}.png`

    });

  }
  onSubmit(){
    console.log(this.city);
    this.apiserv.getWeatherData(this.city).subscribe((params) => {
      this.weather = params as WeatherData;
      this.temp = +this.weather.main.temp;

    },error=>{
      alert("the city name is not vaild");
    });
  }
}
