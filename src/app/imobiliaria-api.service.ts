import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImobiliariaApiService {

  readonly imobiliariaAPIUrl = "https://localhost:7193/api";

  constructor(private http:HttpClient) { }

  // Métodos para imovéis

  getListaImoveis():Observable<any[]>
  {
    return this.http.get<any>(this.imobiliariaAPIUrl + '/imoveis');
  }

  criarImovel(data:any)
  {
    return this.http.post(this.imobiliariaAPIUrl + '/imoveis', data);
  }

  atualizarImovel(id:number|string, data: any)
  {
    return this.http.put(this.imobiliariaAPIUrl + `/imoveis/${id}`, data);
  }

  excluirImovel(id:number|string)
  {
    return this.http.delete(this.imobiliariaAPIUrl + `/imoveis/${id}`);
  }

  // Métodos para tipos de imóvel

  getListaTipoImoveis():Observable<any[]>
  {
    return this.http.get<any>(this.imobiliariaAPIUrl + '/tipoimoveis');
  }

  criarTipoImovel(data:any)
  {
    return this.http.post(this.imobiliariaAPIUrl + '/tipoimoveis', data);
  }

  atualizarTipoImovel(id:number|string, data: any)
  {
    return this.http.put(this.imobiliariaAPIUrl + `/tipoimoveis/${id}`, data);
  }

  excluirTipoImovel(id:number|string)
  {
    return this.http.delete(this.imobiliariaAPIUrl + `/tipoimoveis/${id}`);
  }

  // Métodos para status

  getListaStatus():Observable<any[]>
  {
    return this.http.get<any>(this.imobiliariaAPIUrl + '/status');
  }

  criarStatus(data:any)
  {
    return this.http.post(this.imobiliariaAPIUrl + '/status', data);
  }

  atualizarStatus(id:number|string, data: any)
  {
    return this.http.put(this.imobiliariaAPIUrl + `/status/${id}`, data);
  }

  excluirStatus(id:number|string)
  {
    return this.http.delete(this.imobiliariaAPIUrl + `/status/${id}`);
  }

}
