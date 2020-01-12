import { Pipe, PipeTransform } from '@angular/core';
import { PokemonResult } from './models/pokemon-list.model';

@Pipe({
    name: 'capitalLetter'
})
export class CapitalLetterPipe implements PipeTransform {


    transform(value: PokemonResult[], ...args: any[]): any {
        
        const upper = (p: PokemonResult) => {
            p.name = p.name[0].toUpperCase() + p.name.substr(1, p.name.length-1);
        }
        value.forEach(p => upper(p))
        return value;
    }

}
