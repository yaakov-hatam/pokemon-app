import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';

const appRoutes: Routes = [
    { path: 'pokemons', component: PokemonListComponent},
    { path: 'pokemon/:name', component: PokemonListComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        PokemonListComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes
        ),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
