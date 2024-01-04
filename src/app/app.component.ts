import { Component } from '@angular/core';
import { AuthService } from './Login/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  getCurrentUser(): string {
    return this.authService.getCurrentUser();
  }
}
