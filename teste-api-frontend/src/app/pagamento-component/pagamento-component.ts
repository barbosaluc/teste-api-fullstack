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
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';



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
    MatSnackBarModule
  ],
  templateUrl: './pagamento-component.html',
  styleUrl: './pagamento-component.scss'
})
export class PagamentoComponent {

  isSaving = false;

  novoPagamento: any = {
    idPagamento: null,
    cpfCnpj: '',
    metodoPagamento: '',
    numeroCartao: '',
    valorPagamento: null,
  };
 
  constructor(
    public dialogRef: MatDialogRef<PagamentoComponent>,
    private pagamentoService: PagamentoService,
    private snackBar: MatSnackBar
  ) { }

  fecharDialog(): void {
    this.dialogRef.close();
  }

  criarPagamento(): void {
    this.isSaving = true;
    console.log('Dados a serem enviados:', this.novoPagamento);
    this.pagamentoService.criarPagamento(this.novoPagamento).subscribe({
      next: () => {
        this.exibirSucesso('Pagamento salvo com sucesso:');
        this.dialogRef.close('success');
      },
      error: (error) => {
        console.error('Erro ao salvar pagamento:', error);
        this.exibirErro('Erro ao salvar pagamento.');
      }
    });
  }

    exibirSucesso(mensagem: string): void {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: 3000,
      panelClass: ['snackbar-sucesso']
    });
  }

  exibirErro(mensagem: string): void {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: 5000,
      panelClass: ['snackbar-erro']
    });
  }
}

