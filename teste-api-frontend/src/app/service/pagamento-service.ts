import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagamentoDTO } from '../model/PagamentoDTO';



@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private apiPagamentoUrl = 'http://localhost:8080/pagamento/listar-pagamentos';

  constructor(private http: HttpClient) { }

  ListarPagamentos(): Observable<PagamentoDTO[]> {
    return this.http.get<PagamentoDTO[]>(this.apiPagamentoUrl);
  }

  private apiFiltroPagamentoUrl = 'http://localhost:8080/pagamento/filtrosPagamentos';
  FiltrarPagamentos(filtros: any): Observable<PagamentoDTO[]> {
    return this.http.post<PagamentoDTO[]>(this.apiFiltroPagamentoUrl, filtros);
  }

  private apiInitivarPagamentoUrl = 'http://localhost:8080/pagamento/'
  inativarPagamento(id: number): Observable<void> {
    return this.http.delete<void>(this.apiInitivarPagamentoUrl + id);
  }

  private apiCriarPagamentoUrl = 'http://localhost:8080/pagamento'
  criarPagamento(pagamento:  any): Observable<PagamentoDTO> {
    return this.http.post<PagamentoDTO>(this.apiCriarPagamentoUrl, pagamento);
  }
}
