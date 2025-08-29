import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagamentoDTO } from '../model/PagamentoDTO';


@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private apiPagamentoUrl = 'http://localhost:8080/pagamento/listar-pagamentos';

  constructor(private http: HttpClient) {   }

    ListarPagamentos() :Observable<PagamentoDTO[]> {
      return this.http.get<PagamentoDTO[]>(this.apiPagamentoUrl);

     }
}
