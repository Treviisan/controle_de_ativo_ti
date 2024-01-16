import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizacao-imobilizado',
  templateUrl: './visualizacao-imobilizado.component.html',
  styleUrls: ['./visualizacao-imobilizado.component.css']
})
export class VisualizacaoImobilizadoComponent implements OnInit {
  imobilizadoSelecionado: any;
  filtroNome: string = '';
  tipoSelecionado: string = 'Notebook';
  imobilizados: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  verDetalhes(imobilizado: any): void {
    this.imobilizadoSelecionado = imobilizado;
  }

  filtroImobilizado(imobilizado: any, filtro: string): boolean {
    // Lógica de filtro aqui
    // Exemplo: return imobilizado.nome.toLowerCase().includes(filtro.toLowerCase());
    return true; // Substitua pelo código real
  }

  onTipoDeProdutoChange(): void {
    // Implemente a lógica para atualizar dinamicamente os campos
    console.log('Tipo de Produto alterado para:', this.tipoSelecionado);
  }
}
