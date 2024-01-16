import { Component } from '@angular/core';

@Component({
  selector: 'app-imobilizados',
  templateUrl: './imobilizados.component.html',
  styleUrls: ['./imobilizados.component.css']
})
export class ImobilizadosComponent {
  grupoId: string = '0';

  tipoDeProduto: string = '';
  showNotebookFields: boolean = false;
  showImpressoraFields: boolean = false;

  //Notebook
  ram: string = '';
  processador: string = '';
  ssd: string = '';
  hd: string = '';
  tela: string = '';

  //Impressora
  marca: string = '';
  tipoImpressora: string = '';
  toner: string = '';
  resolucaodeImpressao: string = '';
  conectividade:string = '';
  tipodePapelSuportado: string = '';

  todasConectividades: string[] = ['USB', 'WiFi', 'Ethernet', 'Bluetooth', 'NFC', 'CloudPrinting'];
  conectividades: { [key: string]: boolean } = {
    USB: false,
    WiFi: false,
    Ethernet: false,
    Bluetooth: false,
    NFC: false,
    CloudPrinting: false
  };

  onTipoDeProdutoChange() {
    this.showNotebookFields = this.tipoDeProduto === 'Notebook';
    this.showImpressoraFields = this.tipoDeProduto === 'Impressora';
  }
}
