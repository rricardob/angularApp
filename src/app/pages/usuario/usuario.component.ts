import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Usuario } from 'src/app/_model/usuario';

import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/_service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  dataSource: MatTableDataSource<Usuario>;
  displayedColumns: string[] = ['cod_usuario', 'nombre', 'user', 'password','cod_sucursal','acciones'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  constructor(private usuarioService: UsuarioService,
    private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.usuarioService.usuarioCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
     // this.sucursal=this.dataSource.codSucursal;
    });

    this.usuarioService.mensajeCambio.subscribe(data => {
      this.snack.open(data, 'AVISO', {
        duration: 2000
      } )
    });

    this.usuarioService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  filtrar(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();
  }

  eliminar(cod_usuario: String) {
    this.usuarioService.eliminar(cod_usuario).subscribe(() => {
      this.usuarioService.listar().subscribe(data => {
        this.usuarioService.usuarioCambio.next(data);
        this.usuarioService.mensajeCambio.next('Se eliminó el usuario correctamente')
      });
    })
  };

}
