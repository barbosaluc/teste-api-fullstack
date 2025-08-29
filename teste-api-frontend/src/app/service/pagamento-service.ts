import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private apiPagamentoUrl = 'http://localhost:8080/pagamento/listar-pagamentos';

  constructor(private http: HttpClient) {

    ListarPagamentos():Observable<Oa> {

   }
  
}
