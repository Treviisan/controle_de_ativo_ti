import { Component } from '@angular/core';

@Component({
  selector: 'app-imobilizados',
  templateUrl: './imobilizados.component.html',
  styleUrls: ['./imobilizados.component.css']
})
export class ImobilizadosComponent {
  grupoId: string = '0';
  idUsuario: string = '0';
  data: string = '';
  valor: string = '';

  tipoDeProduto: string = '';
  showNotebookFields: boolean = false;
  showImpressoraFields: boolean = false;
  showPerifericosFields: boolean = false;
  showTecladoFields: boolean = false;
  showMouseFields: boolean = false;
  showPenDriveFields: boolean = false;
  showFoneDeOuvidoFields: boolean = false;
  showWebcamFields: boolean = false;
  showMonitorFields: boolean = false;
  tipoPeriferico: string = '';

  constructor() {
    this.showNotebookFields = false;
    this.showImpressoraFields = false;
    this.showPerifericosFields = false;
    this.showTecladoFields = false;
    this.showMouseFields = false;
    this.showPenDriveFields = false;
    this.showFoneDeOuvidoFields = false;
    this.showWebcamFields = false;
    this.showMonitorFields = false;
    this.tipoPeriferico = '';
  }

  //Notebook
  marca: string = '';
  numeroModeloNotebook: string = '';
  ram: string = '';
  processador: string = '';
  So: string = '';
  gpu: string = '';
  ssd: string = '';
  hd: string = '';
  tela: string = '';
  garantiaNotebook: string = '';

  //Monitor
  marcaMonitor: string = '';
  serieMonitor: string = '';
  tipoMonitor: string = '';
  resolucaoMonitor: string = '';
  conectividadeMonitor: string = '';
  tamanhoTelaMonitor: string = '';
  garantiaMonitor: string = '';

  //Impressora
  marcaImpressora: string = '';
  tipoImpressora: string = '';
  resolucaodeImpressao: string = '';
  conectividadeImpressao:string = '';
  garantiaImpressao: string = '';

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

  //Periféricos - Pen drive
  armazenamento: string = '';
  designFisico: string = '';
  conectividadeUSB: string = '';
  marcaPenDrive: string = '';
  seriePendrive: string = '';
  corPendrive: string = '';
  garantiaPendrive: string = '';

  //Periféricos - Fone de Ouvido
  marcaFones: string = '';
  numeroModeloFone: string = '';
  tipoFone: string = '';
  conectividade: string = '';
  cancelamentoRuido: string = '';
  microfone: string = '';
  corFone: string = '';
  garantiaFoneDeOuvido: string = '';

  //Periféricos - Webcam
  marcaWeb: string = '';
  serieWeb: string = '';
  resolucaoWeb: string = '';
  conectividadeWeb: string = '';
  corWeb: string = '';
  garantiaWeb: string = '';

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
  console.log('showMonitorFields:', this.showMonitorFields);
  console.log('showImpressoraFields:', this.showImpressoraFields);
  console.log('showPerifericosFields:', this.showPerifericosFields);
  console.log('showTecladoFields:', this.showTecladoFields);
  console.log('showMouseFields:', this.showMouseFields);
  console.log('showFoneDeOuvidoFields:', this.showFoneDeOuvidoFields);
  console.log('showWebcamFields:', this.showWebcamFields);

  this.showNotebookFields = this.tipoDeProduto === 'Notebook';
  this.showMonitorFields = this.tipoDeProduto === 'Monitor';
  this.showImpressoraFields = this.tipoDeProduto === 'Impressora';
  this.showPerifericosFields = this.tipoDeProduto === 'Perifericos';
  this.showTecladoFields = this.showPerifericosFields && this.tipoPeriferico === 'Teclado';
  this.showMouseFields = this.showPerifericosFields && this.tipoPeriferico === 'Mouse';
  this.showPenDriveFields = this.showPerifericosFields && this.tipoPeriferico === 'Pendrive';
  this.showFoneDeOuvidoFields = this.showPerifericosFields && this.tipoPeriferico === 'FoneDeOuvido';
  this.showWebcamFields = this.showPerifericosFields && this.tipoPeriferico === 'Webcam';
}

onTipoPerifericoChange() {
  console.log('onTipoPerifericoChange - tipoPeriferico:', this.tipoPeriferico);
  console.log('showTecladoFields:', this.showTecladoFields);
  console.log('showMouseFields:', this.showMouseFields);
  console.log('showPenDriveFields:', this.showPenDriveFields);
  console.log('showFoneDeOuvidoFields:', this.showFoneDeOuvidoFields);
  console.log('showWebcamFields:', this.showWebcamFields);

  const tipoSelecionado = this.tipoPeriferico;

  if (tipoSelecionado === 'Teclado') {
    this.showTecladoFields = true;
    this.showMouseFields = false;
    this.showPenDriveFields = false;
    this.showFoneDeOuvidoFields = false
    this.showWebcamFields = false;
  } else if (tipoSelecionado === 'Mouse') {
    this.showTecladoFields = false;
    this.showMouseFields = true;
    this.showPenDriveFields = false;
    this.showFoneDeOuvidoFields = false
    this.showWebcamFields = false;
  } else if (tipoSelecionado === 'Pendrive') {
    this.showTecladoFields = false;
    this.showMouseFields = false;
    this.showPenDriveFields = true;
    this.showFoneDeOuvidoFields = false
    this.showWebcamFields = false;
  } else if (tipoSelecionado === 'FoneDeOuvido') {
    this.showTecladoFields = false;
    this.showMouseFields = false;
    this.showPenDriveFields = false;
    this.showFoneDeOuvidoFields = true
    this.showWebcamFields = false;
  } else if (tipoSelecionado === 'Webcam') {
    this.showTecladoFields = false;
    this.showMouseFields = false;
    this.showPenDriveFields = false;
    this.showFoneDeOuvidoFields = false;
    this.showWebcamFields = true;
  } else {
    // Caso o tipo seja diferente, oculta ambos
    this.showTecladoFields = false;
    this.showMouseFields = false;
    this.showPenDriveFields = false;
    this.showFoneDeOuvidoFields = false
    this.showWebcamFields = false;
    this.tipoPeriferico = '';
  }
}

onSubmit() {
  console.log('Formulário enviado com sucesso...');
  console.log('Data:', this.data);
  console.log('Valor:', this.valor);
 }
}
