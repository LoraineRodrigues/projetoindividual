import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { PiadaComponent } from './piada/piada.component';
import { RodapeComponent } from './rodape/rodape.component';
import { Piada1Component } from './piada-1/piada-1.component';



@NgModule({
  declarations: [
    AppComponent,
    PiadaComponent,
    TituloComponent,
    RodapeComponent,
    Piada1Component,
    
  ],
  exports: [
    PiadaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
