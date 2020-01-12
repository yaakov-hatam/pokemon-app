import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonModel } from 'src/app/models/pokemon.model';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
    pokemon: PokemonModel;
    d = new Date;

    constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(res => {
            const name = res.name;
            this.pokemonService.getPokemon(name).subscribe(pokemonRes => {
                this.pokemon = pokemonRes;
            }, (err) => {
                console.log(err);
            })
        })
    }

}
