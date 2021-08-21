import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../_model/usuario';
import { Usua } from '../_model/usua';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioCambio = new Subject<Usuario[]>();
  mensajeCambio = new Subject<string>();

  url: string = `${environment.HOST}/usuario`; 

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Usuario[]>(`${this.url}/listarUsuarios`);
  }

  listarPorId(cod_usuario: String) {
    return this.http.get<Usuario>(`${this.url}/listarUsuarioById/${cod_usuario}`);
  }

  registrar(usuario: Usua) {
    return this.http.post(`${this.url}/guardarUsuario`, usuario);
  }

  modificar(usuario: Usua) {
    return this.http.put(`${this.url}/actualizarUsuario`, usuario);
  }
  /*registrar(usuario: Usuario) {
    return this.http.post(`${this.url}/guardarUsuario`, usuario);
  }

  modificar(usuario: Usuario) {
    return this.http.put(`${this.url}/actualizarUsuario`, usuario);
  }*/

  eliminar(cod_usuario: String) {
    return this.http.delete <Usuario>(`${this.url}/eliminarUsuario/${cod_usuario}`);
  }
}
