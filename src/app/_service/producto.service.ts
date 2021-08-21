import { Injectable } from '@angular/core';
import { Producto } from '../_model/producto';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productoCambio = new Subject<Producto[]>();
  mensajeCambio = new Subject<string>();

  url: string = `${environment.HOST}/producto`; 

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Producto[]>(`${this.url}/listarProducto`);
  }

  listarPorId(cod_producto: String) {
    return this.http.get<Producto>(`${this.url}/listarProductoById/${cod_producto}`);
  }

  registrar(producto: Producto) {
    return this.http.post(`${this.url}/guardarProducto`, producto);
  }

  modificar(producto: Producto) {
    return this.http.put(`${this.url}/actualizarProducto`, producto);
  }

  eliminar(cod_producto: String) {
    return this.http.delete <Producto>(`${this.url}/eliminarProducto/${cod_producto}`);
  }
}
