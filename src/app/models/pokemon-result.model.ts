export interface PokemonResultModel {
    "count": number;
    "next": string | URL;
    "previous": string | URL;
    "results": {'name': string, url: URL}[];
  }