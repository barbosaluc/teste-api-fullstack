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
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { PagamentoComponent } from '../pagamento-component/pagamento-component';
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
    MatTooltipModule,
    FormsModule,
    MatDialogModule
],

  standalone: true,
  templateUrl: './pagamento-lista-component.html',
  styleUrl: './pagamento-lista-component.scss'
})
export class PagamentoListaComponent implements OnInit {

  constructor(
    private pagamentoService: PagamentoService,
    private dialog: MatDialog,
    private location: Location
  ) {}


  pagamentos: PagamentoDTO[] = [];

  colunasExibidas: string[] = ['identificacao', 'metodoPagamento', 'valor', 'status', 'acoes'];

  tamanhoDaPagina = 10;
  indiceDaPagina = 0;
  totalDeItens = 0;

  ngOnInit(): void {
    this.buscarPagamentos()
  }

  termoBusca: string = '';
  statusFiltro: string = 'todos';

  buscarPagamentos(): void {
    const filtros: any = {};

    if (this.termoBusca) {
      filtros.cpfCnpj = this.termoBusca;
    }

    if (this.statusFiltro && this.statusFiltro !== 'todos') {
      filtros.statusPagamento = this.statusFiltro;
    }

    this.pagamentoService.FiltrarPagamentos(filtros).subscribe({
      next: (data: PagamentoDTO[]) => {
        this.pagamentos = data;
        this.totalDeItens = this.pagamentos.length;
        console.log('Pagamentos filtrados com sucesso:', this.pagamentos);
      },
      error: (error) => {
        console.error('Erro ao buscar pagamentos:', error);
      },
    });
  }

  chamarFiltro(): void {
    this.buscarPagamentos();
  }

mudancaPagina(event: PageEvent) {
  this.tamanhoDaPagina = event.pageSize;
  this.indiceDaPagina = event.pageIndex;
}

processarPagamento(identificacao: string) {
  console.log('Processando pagamento:', identificacao);
}

 inativarPagamento(id: number) {
    console.log('Inativando pagamento com identificação:', id);
    this.pagamentoService.inativarPagamento(id).subscribe({
      next: () => {
        console.log('Pagamento inativado com sucesso!');
        this.buscarPagamentos();
      },
      error: (error) => {
        console.error('Erro ao inativar pagamento:', error);
        alert('Não foi possível inativar o pagamento.');
      }
    });
  }
  abrirNovoPagamentoDialog(): void {
    const dialogRef = this.dialog.open(PagamentoComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.buscarPagamentos();
      }
    });
  }

  voltar(): void {
    this.location.back();
  }
}
