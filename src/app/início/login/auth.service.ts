import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private currentUser: string = '';
  private registeredUsers: { username: string, password: string }[] = [];

  register(username: string, password: string): boolean {
    const userExists = this.registeredUsers.some(user => user.username === username);

    if (!userExists) {
      this.registeredUsers.push({ username, password });
      return true;
    } else {
      return false;
    }
  }

  login(username: string, password: string): boolean {
    const user = this.registeredUsers.find(u => u.username === username && u.password === password);

    if (user) {
      this.isAuthenticated = true;
      this.currentUser = username;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.currentUser = '';
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUser(): string {
    return this.currentUser;
  }
}
