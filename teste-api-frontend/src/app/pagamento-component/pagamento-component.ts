import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-pagamento-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagamento-component.html',
  styleUrl: './pagamento-component.scss'
})
export class PagamentoComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onIntit(): void {
    console.log('PagamentoComponent iniciado');
    }
}
