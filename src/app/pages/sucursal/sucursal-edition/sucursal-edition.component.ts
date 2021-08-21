import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Sucursal } from 'src/app/_model/sucursal';
import { SucursalService } from 'src/app/_service/sucursal.service';
@Component({
  selector: 'app-sucursal-edition',
  templateUrl: './sucursal-edition.component.html',
  styleUrls: ['./sucursal-edition.component.css']
})
export class SucursalEditionComponent implements OnInit {

  form: FormGroup;
  cod_sucursal: String;
  edicion: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private sucursalService: SucursalService) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'cod_sucursal': new FormControl(''),
      'nombre': new FormControl('')
    });

    this.route.params.subscribe((params: Params) => {
      this.cod_sucursal = params['cod_sucursal'];
      this.edicion = params['cod_sucursal'] != null;
      this.initForm();
    });
  }

  operar() {
    let sucursal = new Sucursal();
    sucursal.cod_sucursal = this.form.value['cod_sucursal'];
    sucursal.nombre = this.form.value['nombre'];

    if (this.edicion) {
      this.sucursalService.modificar(sucursal).subscribe(data => {
        this.sucursalService.listar().subscribe(data => {
          this.sucursalService.sucursalCambio.next(data);
          this.sucursalService.mensajeCambio.next('Se modificó la sucursal correctamente');
        });
      });
    } else {
      this.sucursalService.registrar(sucursal).subscribe(data => {
        this.sucursalService.listar().subscribe(data => {
          this.sucursalService.sucursalCambio.next(data);
          this.sucursalService.mensajeCambio.next('Se registró la sucursal correctamente');
        });
      });
    }

    this.router.navigate(['sucursal']);
  }

  initForm() {
    if (this.edicion) {
      this.sucursalService.listarPorId(this.cod_sucursal).subscribe(data => {
        this.form = new FormGroup({
          'cod_sucursal': new FormControl(data.cod_sucursal),
          'nombre': new FormControl(data.nombre)

        });
      });
    }
  }

}
