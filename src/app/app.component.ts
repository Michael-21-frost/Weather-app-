import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor( private weatherservice: WeatherService){

  }
  ngOnInit() {
    this.weatherservice.getWeatherData('wellington').subscribe({
      next:(response)=>{
        console.log(response);
      }
    });
    
  }



 
   }

