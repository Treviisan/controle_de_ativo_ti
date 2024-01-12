import { AuthService } from '../login/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  newUsername: string = '';
  newPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    if (this.authService.register(this.newUsername, this.newPassword)) {
      console.log('Registro bem-sucedido!');
      this.router.navigate(['/login']);
    } else {
      console.log('Registro falhou! Usuário já existe.');
    }
  }
}
