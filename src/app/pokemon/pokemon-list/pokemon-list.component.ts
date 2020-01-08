import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonListModel } from 'src/app/models/pokemon-list.model';

@Component({
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
    pokemonListResult: PokemonListModel;

    constructor(private pokemonService: PokemonService) { }

    ngOnInit() {
        this.pokemonService.get().subscribe(res => {
            this.pokemonListResult = res;
        })
    }

}
