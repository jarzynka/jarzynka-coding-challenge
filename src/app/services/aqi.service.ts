import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// importing Headers just in case I want to add POST/PUT functionality - for now we're just using GET
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PollutionResponse } from '../models/PollutionResponse'; // import Location interface

@Injectable({
  providedIn: 'root'
})
export class AqiService {

  // TODO: our api key should be stored in a dotenv file or somewhere localized to the server
  // it should *not* appear here and is likely disqalifying me from contention! :)
  private API_KEY = "b5ea95baccab0110719cefd9547c8f12";  

  constructor(private http: HttpClient) { }

  getPollutionData(lat: number, lon: number) : Observable<PollutionResponse>
  {    
    const baseUrl = "http://api.openweathermap.org/data/2.5/air_pollution?";
    const getCommands: string = `lat=${lat}&lon=${lon}`;   

    // assemble our URL - if locationState or locationCountry are empty, we'll just use the locationName
    let url: string = `${baseUrl}${getCommands}&appid=${this.API_KEY}`;

    console.log("Making a web request to: ", url);

    
    return this.http.get<PollutionResponse>(url);      

    
  }
}
