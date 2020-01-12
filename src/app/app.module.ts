import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon/pokemon.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { CapitalLetterPipe } from './capital-letter.pipe';

const appRoutes: Routes = [
    {path: '', component: PokemonListComponent},
    {path: 'pokemon/:name', component: PokemonComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        PokemonListComponent,
        PokemonComponent,
        CapitalLetterPipe
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes
        ),
        HttpClientModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
