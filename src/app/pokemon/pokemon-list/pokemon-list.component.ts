import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonResultModel } from 'src/app/models/pokemon-result.model';

@Component({
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
    pokemons: PokemonResultModel;
    constructor(private pokemonService: PokemonService) { }

    ngOnInit() {
        this.pokemonService.get().subscribe(res => {
            this.pokemons = res;
        })
    }

    showPokemon(name: string) {

    }

}
