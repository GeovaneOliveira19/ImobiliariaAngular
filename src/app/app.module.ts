import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImovelComponent } from './imovel/imovel.component';
import { MostrarImovelComponent } from './imovel/mostrar-imovel/mostrar-imovel.component';
import { CriarAlterarImovelComponent } from './imovel/criar-alterar-imovel/criar-alterar-imovel.component';
import { ImobiliariaApiService } from './imobiliaria-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ImovelComponent,
    MostrarImovelComponent,
    CriarAlterarImovelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ImobiliariaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
