import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos-usuarios',
  templateUrl: './grupos-usuarios.component.html',
  styleUrls: ['./grupos-usuarios.component.css']
})
export class GruposUsuariosComponent implements OnInit {
  grupoId: string = '0';

  constructor() { }

  ngOnInit(): void {
  }

}
