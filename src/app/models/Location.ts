export interface Location
{
  "name": string,
  "local_names": {
    "ro": string,
    "sv": string,
    "eo": string,
    "sr": string,
    "ta": string,
    "ru": string,
    "he": string,
    "fa": string,
    "ga": string,
    "ar": string,
    "oc": string,
    "fi": string,
    "es": string,
    "de": string,
    "fr": string,
    "ja": string,
    "en": string,
    "mk": string,
    "pt": string,
    "ko": string,
    "it": string,
    "nl": string,
    "zh": string,
    "pl": string,
    "uk": string
  },
  "lat": number,
  "lon": number,
  "country": string, // TODO: limited response of strings or enum
  "state": string // TODO: limited response of strings or enum
}
