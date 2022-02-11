import { PollutionData } from "./PollutionData";

export interface PollutionResponse  
{
  cod?: string,
  message?: string,
  coord: {
    lon: number,
    lat: number
  },
  list: PollutionData[]
}