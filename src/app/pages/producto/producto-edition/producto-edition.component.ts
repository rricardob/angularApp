import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Producto } from 'src/app/_model/producto';
import { ProductoService } from 'src/app/_service/producto.service';

@Component({
  selector: 'app-producto-edition',
  templateUrl: './producto-edition.component.html',
  styleUrls: ['./producto-edition.component.css']
})
export class ProductoEditionComponent implements OnInit {

  form: FormGroup;
  cod_producto: String;
  edicion: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'cod_producto': new FormControl(''),
      'nombre': new FormControl(''),
      'precio': new FormControl(0.0)
    });

    this.route.params.subscribe((params: Params) => {
      this.cod_producto = params['cod_producto'];
      this.edicion = params['cod_producto'] != null;
      this.initForm();
    });
  }

  operar() {
    let producto = new Producto();
    producto.cod_producto = this.form.value['cod_producto'];
    producto.nombre = this.form.value['nombre'];
    producto.precio = this.form.value['precio'];

    if (this.edicion) {
      this.productoService.modificar(producto).subscribe(data => {
        this.productoService.listar().subscribe(data => {
          this.productoService.productoCambio.next(data);
          this.productoService.mensajeCambio.next('Se modificó el producto correctamente');
        });
      });
    } else {
      this.productoService.registrar(producto).subscribe(data => {
        this.productoService.listar().subscribe(data => {
          this.productoService.productoCambio.next(data);
          this.productoService.mensajeCambio.next('Se registró el producto correctamente');
        });
      });
    }

    this.router.navigate(['producto']);
  }

  initForm() {
    if (this.edicion) {
      this.productoService.listarPorId(this.cod_producto).subscribe(data => {
        this.form = new FormGroup({
          'cod_producto': new FormControl(data.cod_producto),
          'nombre': new FormControl(data.nombre),
          'precio': new FormControl(data.precio)

        });
      });
    }
  }

}
