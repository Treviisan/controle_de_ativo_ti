import { RegisterComponent } from '../início/register/register.component';
import { LoginComponent } from '../início/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from '../início/home/home.component';
import { SobreComponent } from '../sobre/sobre.component';
import { UsuariosComponent } from '../cadastros/usuarios/usuarios.component';
import { ImobilizadosComponent } from '../cadastros/imobilizados/imobilizados.component';
import { NfesComponent } from '../cadastros/nfes/nfes.component';
import { EmpresasComponent } from '../cadastros/empresas/empresas.component';
import { ClientesComponent } from '../cadastros/clientes/clientes.component';
import { GruposUsuariosComponent } from '../cadastros/grupos-usuarios/grupos-usuarios.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sobre', component: SobreComponent},
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'imobilizados', component: ImobilizadosComponent },
  { path: 'nfes', component: NfesComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'grupos-usuarios', component: GruposUsuariosComponent },
  { path: 'cadastro-nfe', component: NfesComponent },

  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
