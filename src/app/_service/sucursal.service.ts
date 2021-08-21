import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sucursal } from '../_model/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  sucursalCambio = new Subject<Sucursal[]>();
  mensajeCambio = new Subject<string>();

  url: string = `${environment.HOST}/sucursal`; 

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Sucursal[]>(`${this.url}/listarSucursales`);
  }

  listarPorId(cod_sucursal: String) {
    return this.http.get<Sucursal>(`${this.url}/listarSucursalById/${cod_sucursal}`);
  }

  registrar(sucursal: Sucursal) {
    return this.http.post(`${this.url}/guardarSucursal`, sucursal);
  }

  modificar(sucursal: Sucursal) {
    return this.http.put(`${this.url}/actualizarSucursal`, sucursal);
  }

  eliminar(cod_sucursal: String) {
    return this.http.delete <Sucursal>(`${this.url}/eliminarSucursal/${cod_sucursal}`);
  }
}
