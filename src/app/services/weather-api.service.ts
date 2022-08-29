import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  url = 'https://open-weather-map27.p.rapidapi.com/weather';
  constructor(public http: HttpClient) { }
  getWeatherData(city:string){
 const   apiKey = '027ba0276459c6ff3503eae39f879d37'
 return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)



  }

}
