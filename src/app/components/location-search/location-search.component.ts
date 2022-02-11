import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// we need our location service to get the location data
import { LocationService } from '../../services/location.service';
import { AqiService } from '../../services/aqi.service';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

  // create local variables to hold the location search form data
  locationName: string = "";
  locationState: string = "";
  locationCountry: string = "";

  @Output() outputEmitter = new EventEmitter<any>();

  constructor(private locationService: LocationService, private aqiService: AqiService) { }

  ngOnInit(): void {
  }

  onSubmitLocation()
  {
    console.log("Location Search Form Submitted!", this.locationName, this.locationState, this.locationCountry);

    if (!this.locationName)
    {
      alert("Please enter a location name!");
      return;
    }

    const locationResult = this.locationService.getLocation(this.locationName, this.locationState, this.locationCountry);

    locationResult.subscribe(loc => 
    {
      if (!loc || loc.length == 0) 
      {
        console.log("TODO: Emit an error message to the user!")
        this.outputEmitter.emit({error: "No location found!", message: "No location found! Please try again."});
        return;
      }
      // make a call to the pollution api with the lat and lon info
      const pollutionData = this.aqiService.getPollutionData(loc[0].lat, loc[0].lon);
      const pollutionResult = pollutionData.subscribe(pollution => 
      {
        // if there's an error with the pollution api call, there will be a cod property on the returned object
        if (pollution.cod)
        {         
          // TODO: log the error
          const data = {error: "Error getting pollution data!", message: pollution.message};
          this.outputEmitter.emit(data);
          return;
        }
        // TODO: emit the pollution data to the parent component so that we may display it!
        console.log("Pollution Data: ", pollution);
        // create a custom data object to pass back to the parent component
        const data = 
        {
          location: loc[0]?.name,
          dt: pollution.list?.[0]?.dt,
          aqi: pollution.list?.[0]?.main?.aqi,
          co: pollution.list?.[0]?.components?.co,
          no: pollution.list?.[0]?.components?.no,
          no2: pollution.list?.[0]?.components?.no2,
          o3: pollution.list?.[0]?.components?.o3,
          nh3: pollution.list?.[0]?.components?.nh3,
          so2: pollution.list?.[0]?.components?.so2,
          pm2_5: pollution.list?.[0]?.components?.pm2_5,
          pm10: pollution.list?.[0]?.components?.pm10
        };
        this.outputEmitter.emit(data);
      });
      
    });    

  }

}
