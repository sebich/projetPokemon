import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './login.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		// Le module HttpClientInMemoryWebApiModule intercepte les requêtes HTTP
		// et retourne des réponses simulées du serveur.
		// Retirer l'importation quand un "vrai" serveur est prêt pour recevoir des requêtes.
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
		FormsModule,
		PokemonsModule,
		LoginRoutingModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		PageNotFoundComponent,
		LoginComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
