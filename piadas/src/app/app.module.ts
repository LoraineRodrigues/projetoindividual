import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { PiadaComponent } from './piada/piada.component';



@NgModule({
  declarations: [
    AppComponent,
    PiadaComponent,
    TituloComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
