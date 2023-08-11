import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { weatherData } from '../model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
    getWeatherData(cityName: string): Observable<weatherData>{
      return this.http.get<weatherData>(environment.weatherApiBaseUrl, {
        headers: new HttpHeaders().set(environment.XRapidAPIKeyHeaderName,  environment.XRapidAPIKeyHeaderValue) 
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
        params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode','json')
      })

    }
}
