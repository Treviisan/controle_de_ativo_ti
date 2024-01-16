// filtro-imobilizado.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroImobilizado'
})
export class FiltroImobilizadoPipe implements PipeTransform {
  transform(imobilizados: any[], filtro: string): any[] {
    // Lógica de filtro aqui
    // Exemplo: return imobilizados.filter(imobilizado => imobilizado.nome.toLowerCase().includes(filtro.toLowerCase()));
    return imobilizados; // Substitua pelo código real
  }
}
