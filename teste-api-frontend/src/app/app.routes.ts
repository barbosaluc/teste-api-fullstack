import { Routes } from '@angular/router';
import { PagamentoListaComponent } from './pagamento-lista-component/pagamento-lista-component';

export const routes: Routes = [
  { 
    path: '', 
    component: PagamentoListaComponent  // ← APENAS este na raiz
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];