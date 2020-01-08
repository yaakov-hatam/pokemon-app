import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonListModel } from '../models/pokemon-list.model';
import { PokemonModel } from '../models/pokemon.model';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private readonly BASE_URL = 'https://pokeapi.co/api/v2'

    constructor(private httpClient: HttpClient) { }

    get(): Observable<PokemonListModel> {
        const url = `${this.BASE_URL}/pokemon`;
        return this.httpClient.get<PokemonListModel>(url);
    }

    getPokemon(name: string): Observable<PokemonModel> {
        const url = `${this.BASE_URL}/pokemon/${name}`;
        return this.httpClient.get<PokemonModel>(url);
    }
}
