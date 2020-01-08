import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResultModel } from '../models/pokemon-result.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private readonly BASE_URL = 'https://pokeapi.co/api/v2';

    constructor(private httpClient: HttpClient) { }

    get(): Observable<PokemonResultModel> {
        const fullUrl = `${this.BASE_URL}/pokemon`;
        return this.httpClient.get<PokemonResultModel>(fullUrl);
    }
}
