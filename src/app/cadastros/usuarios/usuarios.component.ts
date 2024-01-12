// usuarios.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuario: any = {}; // Modelo para os dados do usuário

  cadastrarUsuario() {
    // Lógica para enviar os dados do usuário para o backend ou realizar ações necessárias
    console.log('Usuário cadastrado:', this.usuario);
  }
}
