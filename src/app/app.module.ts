import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './rota/app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './início/login/login.component';
import { HomeComponent } from './início/home/home.component';
import { RegisterComponent } from './início/register/register.component';
import { SobreComponent } from './sobre/sobre.component';
import { UsuariosComponent } from './cadastros/usuarios/usuarios.component';
import { ImobilizadosComponent } from './cadastros/imobilizados/imobilizados.component';
import { NfesComponent } from './cadastros/nfes/nfes.component';
import { EmpresasComponent } from './cadastros/empresas/empresas.component';
import { ClientesComponent } from './cadastros/clientes/clientes.component';
import { GruposUsuariosComponent } from './cadastros/grupos-usuarios/grupos-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    SobreComponent,
    UsuariosComponent,
    ImobilizadosComponent,
    NfesComponent,
    EmpresasComponent,
    ClientesComponent,
    GruposUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
