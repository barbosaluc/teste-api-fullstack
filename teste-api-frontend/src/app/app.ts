import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagamentoComponent } from "./pagamento-component/pagamento-component";
import { PagamentoListaComponent } from "./pagamento-lista-component/pagamento-lista-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PagamentoComponent, PagamentoListaComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('teste-api-frontend');
}
