import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TabelaConteudosComponent } from './tabela-conteudos/tabela-conteudos.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaConteudosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
