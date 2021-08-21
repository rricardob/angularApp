import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { MaterialModule } from './material/material.module';
import { PacienteEdicionComponent } from './pages/paciente/paciente-edicion/paciente-edicion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicoComponent } from './pages/medico/medico.component';
import {FacturaComponent} from './pages/factura/factura.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { SucursalComponent } from './pages/sucursal/sucursal.component';
import { SucursalEditionComponent } from './pages/sucursal/sucursal-edition/sucursal-edition.component';
import { ProductoEditionComponent } from './pages/producto/producto-edition/producto-edition.component';
import { UsuarioEditionComponent } from './pages/usuario/usuario-edition/usuario-edition.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    PacienteEdicionComponent,
    MedicoComponent,
    FacturaComponent,
    ClienteComponent,
    UsuarioComponent,
    ProductoComponent,
    SucursalComponent,
    SucursalEditionComponent,
    ProductoEditionComponent,
    UsuarioEditionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
