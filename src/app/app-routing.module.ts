import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { HomeComponent } from './pages/home/home.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { PacienteEdicionComponent } from './pages/paciente/paciente-edicion/paciente-edicion.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { ProductoEditionComponent } from './pages/producto/producto-edition/producto-edition.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { SucursalEditionComponent } from './pages/sucursal/sucursal-edition/sucursal-edition.component';
import { SucursalComponent } from './pages/sucursal/sucursal.component';
import { UsuarioEditionComponent } from './pages/usuario/usuario-edition/usuario-edition.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'paciente', component: PacienteComponent, children: [
      { path: 'nuevo', component: PacienteEdicionComponent },
      { path: 'edicion/:id', component: PacienteEdicionComponent }
    ]
  },
  { path: 'medico', component: MedicoComponent },
  {
    path: 'factura', component: FacturaComponent
  },
  {
    path: 'cliente', component: ClienteComponent
  },
  {
    path:'usuario',component:UsuarioComponent, children: [
      { path: 'nuevo', component: UsuarioEditionComponent },
      { path: 'edicion/:cod_usuario', component: UsuarioEditionComponent }
    ]
  },
  {
    path:'producto',component:ProductoComponent, children: [
      { path: 'nuevo', component: ProductoEditionComponent },
      { path: 'edicion/:cod_producto', component: ProductoEditionComponent }
    ]
  },
  {
    path:'sucursal',component:SucursalComponent, children: [
      { path: 'nuevo', component: SucursalEditionComponent },
      { path: 'edicion/:cod_sucursal', component: SucursalEditionComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
