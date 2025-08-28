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
  templateUrl: './pagamento-lista-component.html',
  styleUrl: './pagamento-lista-component.scss'
})
export class PagamentoListaComponent implements OnInit{

  dadosPagamentos: Pagamento[] = [
    { identificacao: '077.977.610-00', metodoPagamento: 'PIX', valor: 99.99, status: 'Processado com sucesso', acoes: '' },
    { identificacao: '485.916.740-65', metodoPagamento: 'Cartão', valor: 88.88, status: 'Pendente de Processamento', acoes: '' },
    { identificacao: '544.496.890-89', metodoPagamento: 'Boleto', valor: 77.77, status: 'Processado com falha', acoes: '' },
  ];

  colunasExibidas: string[] = ['identificacao', 'metodoPagamento', 'valor', 'status', 'acoes'];

  tamanhoDaPagina = 10;
  indiceDaPagina = 0;
  totalDeItens = this.dadosPagamentos.length;

  constructor() { }

  ngOnInit(): void {
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
