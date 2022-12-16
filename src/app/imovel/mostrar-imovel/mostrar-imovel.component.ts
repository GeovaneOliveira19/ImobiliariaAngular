import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImobiliariaApiService } from 'src/app/imobiliaria-api.service';

@Component({
  selector: 'app-mostrar-imovel',
  templateUrl: './mostrar-imovel.component.html',
  styleUrls: ['./mostrar-imovel.component.css']
})
export class MostrarImovelComponent implements OnInit {

  imoveis$!:Observable<any[]>;
  tipoImoveis$!:Observable<any[]>;
  tipoImoveis:any=[];

  tipoImoveisMap:Map<number, string> = new Map();

  constructor(private service:ImobiliariaApiService) {  }

  ngOnInit(): void {
    this.imoveis$ = this.service.getListaImoveis();
    this.tipoImoveis$ = this.service.getListaTipoImoveis();
  }

}
