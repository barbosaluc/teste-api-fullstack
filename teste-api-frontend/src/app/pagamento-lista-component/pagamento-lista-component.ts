import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PagamentoDTO } from '../model/PagamentoDTO';
import { PagamentoService } from '../service/pagamento-service';

export interface Pagamento {
  identificacao: string;
  metodoPagamento: string;
  valor: number;
  status: 'Processado com sucesso' | 'Pendente de Processamento' | 'Processado com falha';
  acoes: string;
}

@Component({
  selector: 'app-pagamento-lista-component',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  standalone: true,
  templateUrl: './pagamento-lista-component.html',
  styleUrl: './pagamento-lista-component.scss'
})
export class PagamentoListaComponent implements OnInit {

  constructor(private pagamentoService: PagamentoService) {

  }

  pagamentos : PagamentoDTO[] = [];

  colunasExibidas: string[] = ['identificacao', 'metodoPagamento', 'valor', 'status', 'acoes'];

  tamanhoDaPagina = 10;
  indiceDaPagina = 0;
  totalDeItens = 0;

  ngOnInit(): void {
    this.buscarPagamentos()
  }

   buscarPagamentos(): void {
    this.pagamentoService.ListarPagamentos().subscribe({
      next: (data: PagamentoDTO[]) => {
        this.pagamentos = data;
        this.totalDeItens = this.pagamentos.length;
        console.log('Pagamentos carregados com sucesso:', this.pagamentos);
      },
      error: (error) => {
        console.error('Erro ao buscar pagamentos:', error);
      },
    });
  }
  mudancaPagina(event: PageEvent) {
      this.tamanhoDaPagina = event.pageSize;
      this.indiceDaPagina = event.pageIndex;
    }

  processarPagamento(identificacao: string) {
      console.log('Processando pagamento:', identificacao);
    }


  inativarPagamento(identificacao: string) {
      console.log('Inativando pagamento:', identificacao);
    }
}
