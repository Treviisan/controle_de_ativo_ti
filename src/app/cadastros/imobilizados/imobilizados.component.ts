import { Component } from '@angular/core';

@Component({
  selector: 'app-imobilizados',
  templateUrl: './imobilizados.component.html',
  styleUrls: ['./imobilizados.component.css']
})
export class ImobilizadosComponent {
  grupoId: string = '0';
  idUsuario: string = '';
  data: string = '';
  valor: string = '';

  tipoDeProduto: string = '';
  showNotebookFields: boolean = false;
  showImpressoraFields: boolean = false;
  showPerifericosFields: boolean = false;
  showTecladoFields: boolean = false;
  showMouseFields: boolean = false;
  tipoPeriferico: string = '';

  constructor() {
    this.showNotebookFields = false;
    this.showImpressoraFields = false;
    this.showPerifericosFields = false;
    this.showTecladoFields = false;
    this.showMouseFields = false;
    this.tipoPeriferico = '';
  }

  //Notebook
  marca: string = '';
  ram: string = '';
  processador: string = '';
  gpu: string = '';
  ssd: string = '';
  hd: string = '';
  tela: string = '';

  //Impressora
  marcaImpressora: string = '';
  tipoImpressora: string = '';
  resolucaodeImpressao: string = '';
  conectividade:string = '';

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
  console.log('showNotebookFields:', this.showNotebookFields);
  console.log('showImpressoraFields:', this.showImpressoraFields);
  console.log('showPerifericosFields:', this.showPerifericosFields);
  console.log('showTecladoFields:', this.showTecladoFields);
  console.log('showMouseFields:', this.showMouseFields);

  this.showNotebookFields = this.tipoDeProduto === 'Notebook';
  this.showImpressoraFields = this.tipoDeProduto === 'Impressora';
  this.showPerifericosFields = this.tipoDeProduto === 'Perifericos';
  this.showTecladoFields = this.showPerifericosFields && this.tipoPeriferico === 'Teclado';
  this.showMouseFields = this.showPerifericosFields && this.tipoPeriferico === 'Mouse';
}

onTipoPerifericoChange() {
  console.log('onTipoPerifericoChange - tipoPeriferico:', this.tipoPeriferico);
  console.log('showTecladoFields:', this.showTecladoFields);
  console.log('showMouseFields:', this.showMouseFields);

  const tipoSelecionado = this.tipoPeriferico;

  if (tipoSelecionado === 'Teclado') {
    this.showTecladoFields = true;
    this.showMouseFields = false;
  } else if (tipoSelecionado === 'Mouse') {
    this.showTecladoFields = false;
    this.showMouseFields = true;
  } else {
    // Caso o tipo seja diferente de Teclado ou Mouse, oculta ambos
    this.showTecladoFields = false;
    this.showMouseFields = false;
    this.tipoPeriferico = '';
  }
}

onSubmit() {
  console.log('Formulário enviado com sucesso...');
  console.log('Data:', this.data);
  console.log('Valor:', this.valor);
 }
}
