import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MaterialHubModule } from './material-hub/material-hub.module';
import { DiscoverFilmMasterComponent } from './discover-film-master/discover-film-master.component';
import { AppRoutingModule } from './routing.module';
import { MovieDbService } from './services/movie-db.service';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverFilmMasterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MaterialHubModule
  ],
  providers: [MovieDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
