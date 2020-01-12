export interface PokemonResult {
    name: string;
    url: string;
}

export interface PokemonListModel {
    count: number;
    next: string;
    previous?: any;
    results: PokemonResult[];
}


