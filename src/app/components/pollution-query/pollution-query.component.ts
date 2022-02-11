import { Component, OnInit } from '@angular/core';
import { getLevelFromPollution } from '../../utilities/pollution-levels';
import { PollutionType } from '../../models/PollutionType';

@Component({
  selector: 'app-pollution-query',
  templateUrl: './pollution-query.component.html',
  styleUrls: ['./pollution-query.component.css']
})
export class PollutionQueryComponent implements OnInit {

  // by default, set our data object to an "error" object that directs the user to search for data above
  data: any = {
    
    location: "",      
    error: "No data available!",
    message: "Please select a location from the form above to fetch the pollution data for that location."
  };

  // this will serve as our pollution data store
  dataError = true; // this will serve as our error flag

  // add the pollution level utility function to this class
  private getLevelFromPollution = getLevelFromPollution;
  
  constructor() { }

  ngOnInit(): void {
  }

  handleLocationSearchOutput(data: any)
  {
    if (data.error)
    {
      this.dataError = true;
      this.data = data;
      return;
    }

    this.dataError = false;
    
    // it is necessary to calculate the levels of pollution
    // we could do this before hoising the emit but this is closer to the output

    data.aqi_level = this.getLevelFromPollution(data.aqi, PollutionType.AQI);
    data.pm25_level = this.getLevelFromPollution(data.pm2_5, PollutionType.PM2_5);
    data.pm10_level = this.getLevelFromPollution(data.pm10, PollutionType.PM10);
    data.o3_level = this.getLevelFromPollution(data.o3, PollutionType.O3);
    data.no_level = this.getLevelFromPollution(data.no, PollutionType.NO);
    data.no2_level = this.getLevelFromPollution(data.no2, PollutionType.NO2);
    data.so2_level = this.getLevelFromPollution(data.so2, PollutionType.SO2);
    data.co_level = this.getLevelFromPollution(data.co, PollutionType.CO);
    data.nh3_level = this.getLevelFromPollution(data.nh3, PollutionType.NH3);  
    
    // I would also like to convert the epoch time to a human readable date
    // once again I would sleep better at night if this was in its own separate utility function

    data.human_readable_time = "Unknown Observation Time";

    if (data.dt)
    {
      let date = new Date(0);
      date.setSeconds(data.dt);
      data.human_readable_time = date.toLocaleString();
    }
    
    this.data = data;
  }


}
