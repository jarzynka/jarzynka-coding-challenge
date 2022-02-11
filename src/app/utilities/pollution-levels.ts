import { PollutionType } from "../models/PollutionType";

const enum LevelCategories
{
  Good = 1,
  Fair = 2,
  Moderate = 3,
  Poor = 4,
  Very_Poor = 5,
}

const LevelCategoryDescriptions =
[
  "Good", "Fair", "Moderate", "Poor", "Very Poor"
]

const LevelCategoryColors =
[
  "#00e676", "#ffd600", "#ffab00", "#ff6d00", "#d50000"
]

const enum LevelColors 
{
  Good = "#00e676",
  Fair = "#ffd600",
  Moderate = "#ffab00",
  Poor = "#ff6d00",
  Very_Poor = "#d50000",
  Unknown = "#555555"
}

export const getLevelFromPollution = (level: number, levelType: PollutionType) => 
{
  switch (levelType) {
    case PollutionType.AQI:
      return getAqiLevel(level);
    case PollutionType.CO:
      return getOtherPollutantLevels(level, [50,100,200,400,9999]);
    case PollutionType.NO:
      return getOtherPollutantLevels(level, [50,100,200,400,9999]);
    case PollutionType.NO2:
      return getOtherPollutantLevels(level, [50,100,200,400,9999]);
    case PollutionType.O3:
      return getOtherPollutantLevels(level, [60,120,180,240,9999]);
    case PollutionType.SO2:
      return getOtherPollutantLevels(level, [50,100,200,400,9999]);
    case PollutionType.NH3:
      return getOtherPollutantLevels(level, [60,120,180,240,9999]);
    case PollutionType.PM2_5:
      return getOtherPollutantLevels(level, [15,30,55,110,9999]);
    case PollutionType.PM10:
      return getOtherPollutantLevels(level, [25,50,90,180,9999]);
    default:
      return "";
  }
}

const getAqiLevel = (level: number) =>
{
  let output = {} as any;
  switch (level)
  {
    case 1: output = {description: "Good", color: LevelColors.Good}; break;
    case 2: output = {description: "Fair", color: LevelColors.Fair}; break;
    case 3: output = {description: "Moderate", color: LevelColors.Moderate}; break;
    case 4: output = {description: "Poor", color: LevelColors.Poor}; break;
    case 5: output = {description: "Very Poor", color: LevelColors.Very_Poor}; break;
    default: output = {description: "Unknown", color: LevelColors.Unknown}; break;
  }
  return output;
}

const getOtherPollutantLevels = (level: number, levelBreakPoints: number[]) =>
{
  let output = {} as any;
  let index = 0;
  for (const levelBreakPoint of levelBreakPoints)
  {    
    if (level < levelBreakPoint)
    {
      output = {description: LevelCategoryDescriptions[index], color: LevelCategoryColors[index]};
      break;
    }
    index++;
  }
  return output;
}