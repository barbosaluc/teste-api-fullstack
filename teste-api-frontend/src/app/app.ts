import { Component, signal } from '@angular/core';
import { PagamentoListaComponent } from "./pagamento-lista-component/pagamento-lista-component";

@Component({
  selector: 'app-root',
  imports: [PagamentoListaComponent], // ← REMOVA RouterOutlet
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('teste-api-frontend');
}