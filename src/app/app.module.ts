import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { MovieModule } from './movie/movie.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    MovieModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
