export interface Result {
    name: string;
    url: string;
}

export interface PokemonListModel {
    count: number;
    next: string;
    previous?: any;
    results: Result[];
}


