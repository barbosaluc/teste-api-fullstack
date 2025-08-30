import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PagamentoService } from '../service/pagamento-service';



@Component({
  selector: 'app-pagamento-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './pagamento-component.html',
  styleUrl: './pagamento-component.scss'
})
export class PagamentoComponent  {

  novoPagamento: any = {
    identificacaoPagador: '',
    metodoPagamento: '',
    numeroCartao: '',
    valorPagamento: null,
  };

  constructor(
    public dialogRef: MatDialogRef<PagamentoComponent>,
    private pagamentoService: PagamentoService
  ) {}

  fecharDialog(): void {
    this.dialogRef.close();
  }

  criarPagamento(): void {
    console.log('Dados a serem enviados:', this.novoPagamento);
    this.pagamentoService.criarPagamento(this.novoPagamento).subscribe({
      next: (response) => {
        console.log('Pagamento salvo com sucesso:', response);
        this.dialogRef.close('success');
      },
      error: (error) => {
        console.error('Erro ao salvar pagamento:', error);
        this.dialogRef.close('error');
      }
    });
  }
}

