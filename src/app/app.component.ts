import { Component } from '@angular/core';
import { AuthService } from './início/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkTheme = false;
  showSubmenu: boolean = false;
  showSubmenuConsultas: boolean = false;
    
  constructor(private authService: AuthService) {}

  getAuthService(): AuthService {
    return this.authService;
  }

  logout(): void {
    this.authService.logout();
  }
}
