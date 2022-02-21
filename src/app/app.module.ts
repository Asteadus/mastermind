import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridColorComponent } from './components/grid-color/grid-color.component';
import { ReponseComponent } from './components/reponse/reponse.component';
import { GridComponent } from './components/grid/grid.component';
import { GameComponent } from './components/game/game.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GridColorComponent,
    ReponseComponent,
    GridComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
