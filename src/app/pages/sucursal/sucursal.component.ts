import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Sucursal } from 'src/app/_model/sucursal';

import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SucursalService } from 'src/app/_service/sucursal.service';


@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  dataSource: MatTableDataSource<Sucursal>;
  displayedColumns: string[] = ['cod_sucursal', 'nombre','acciones'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private sucursalService: SucursalService,
    private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.sucursalService.sucursalCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.sucursalService.mensajeCambio.subscribe(data => {
      this.snack.open(data, 'AVISO', {
        duration: 2000
      } )
    });

    this.sucursalService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  filtrar(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();
  }

  eliminar(cod_sucursal: String) {
    this.sucursalService.eliminar(cod_sucursal).subscribe(() => {
      this.sucursalService.listar().subscribe(data => {
        this.sucursalService.sucursalCambio.next(data);
        this.sucursalService.mensajeCambio.next('Se eliminó la sucursal correctamente')
      });
    })
  };

}
