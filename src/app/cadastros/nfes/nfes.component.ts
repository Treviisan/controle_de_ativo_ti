import { Component, OnInit } from '@angular/core';
import { NfesService } from 'src/app/services/nfes.service';

@Component({
  selector: 'app-nfe',
  templateUrl: './nfes.component.html',
  styleUrls: ['./nfes.component.css'],
})
export class NfesComponent implements OnInit {
  grupoId: string = '0';

  constructor(private nfeService: NfesService) {}

  ngOnInit(): void {
    // Inicializações ou carregamentos de dados aqui
  }

  // Implemente métodos para interagir com o serviço, por exemplo, salvarNfe, obterNfe, etc.
}
