import { Component } from '@angular/core';

@Component({
  selector: 'app-imobilizados',
  templateUrl: './imobilizados.component.html',
  styleUrls: ['./imobilizados.component.css']
})
export class ImobilizadosComponent {
  grupoId: string = '0';
  data: string = '';
  valor: string = '';

  tipoPeriferico: string = '';
  tipoDeProduto: string = '';
  showNotebookFields: boolean = false;
  showImpressoraFields: boolean = false;
  showPerifericosFields: boolean = false;
  showTecladoFields: boolean = false;
  showMouseFields: boolean = false;

  constructor() {
   // Inicialize as variáveis necessárias aqui
  this.showNotebookFields = false;
  this.showImpressoraFields = false;
  this.showPerifericosFields = false;
  this.showTecladoFields = false;
  this.showMouseFields = false;
  }

    //Notebook
  ram: string = '';
  processador: string = '';
  ssd: string = '';
  hd: string = '';
  tela: string = '';

    //Impressora
  marcaImpressora: string = '';
  tipoImpressora: string = '';
  toner: string = '';
  resolucaodeImpressao: string = '';
  conectividade:string = '';
  tipodePapelSuportado: string = '';

    //Periféricos - Teclado
  marcaTeclado: string = '';
  numeroModeloTeclado: string = '';
  layoutTeclado: string = '';
  interfaceTeclado: string = '';
  corTeclado: string = '';
  garantiaTeclado: string = '';

    //Periféricos - Mouse
  marcaMouse: string = '';
  serieMouse: string = '';
  corMouse: string = '';
  interfaceMouse: string = '';
  botoesMouse: string = '';
  garantiaMouse: string = '';


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
    console.log('onTipoDeProdutoChange - tipoDeProduto:', this.tipoDeProduto);
    this.showNotebookFields = this.tipoDeProduto === 'Notebook';
    this.showImpressoraFields = this.tipoDeProduto === 'Impressora';
    this.showPerifericosFields = this.tipoDeProduto === 'Perifericos';
  }

  onTipoPerifericoChange() {
    console.log('onTipoPerifericoChange - tipoPeriferico:', this.tipoPeriferico);
    this.showTecladoFields = this.tipoPeriferico === 'Teclado';
    this.showMouseFields = this.tipoPeriferico === 'Mouse';
  }

  onSubmit() {
    console.log('Formulário enviado com sucesso...');
    console.log('Data:', this.data);
    console.log('Valor:', this.valor);
  }
}


