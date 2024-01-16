// imobilizados.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImobilizadosService {
  private imobilizados: any[] = [
    { nome: 'Imobilizado 1', categoria: 'Categoria A', valor: 1000 },
    { nome: 'Imobilizado 2', categoria: 'Categoria B', valor: 1500 },
    { nome: 'Imobilizado 3', categoria: 'Categoria A', valor: 1200 },
  ];

  getImobilizados(): any[] {
    return this.imobilizados;
  }

  adicionarImobilizado(imobilizado: any): void {
    this.imobilizados.push(imobilizado);
  }
}
