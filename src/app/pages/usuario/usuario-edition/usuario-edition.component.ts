import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Sucursal } from 'src/app/_model/sucursal';
import { Usua } from 'src/app/_model/usua';
import { Usuario } from 'src/app/_model/usuario';
import { SucursalService } from 'src/app/_service/sucursal.service';
import { UsuarioService } from 'src/app/_service/usuario.service';

@Component({
  selector: 'app-usuario-edition',
  templateUrl: './usuario-edition.component.html',
  styleUrls: ['./usuario-edition.component.css']
})
export class UsuarioEditionComponent implements OnInit {

  form: FormGroup;
  cod_usuario: String;
  edicion: boolean;
  sucursal:Sucursal[];
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
    private sucursalService:SucursalService) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'cod_usuario': new FormControl(''),
      'nombre': new FormControl(''),
      'user': new FormControl(''),
      'password': new FormControl(''),
      'sucursal.cod_sucursal': new FormControl('')
    });
    
   
    this.sucursalService.sucursalCambio.subscribe(data => {
      this.sucursal = data;
      console.log("la data de sucursales es: "+data);
    });

    this.sucursalService.listar().subscribe(data => {
      this.sucursal = data;
      console.log("la data de sucursales es: "+data);
    });
    
    this.route.params.subscribe((params: Params) => {
      this.cod_usuario = params['cod_usuario'];
      this.edicion = params['cod_usuario'] != null;
      this.initForm();
    });
  }

  operar() {
    let sucursal= new Sucursal();
    let usuario = new Usuario();
    usuario.cod_usuario = this.form.value['cod_usuario'];
    usuario.nombre = this.form.value['nombre'];
    usuario.user = this.form.value['user'];
    usuario.password = this.form.value['password'];
    //usuario.sucursal.cod_sucursal=this.form.value['sucursal.cod_sucursal'];
    sucursal.cod_sucursal=this.form.value['sucursal.cod_sucursal'];
    usuario.sucursal = sucursal;

    let usua= new Usua();
    usua.cod_usuario = this.form.value['cod_usuario'];
    usua.nombre = this.form.value['nombre'];
    usua.user = this.form.value['user'];
    usua.password = this.form.value['password'];
    usua.codSucursal=this.form.value['sucursal.cod_sucursal'];

    if (this.edicion) {
      this.usuarioService.modificar(usua).subscribe(data => {
        this.usuarioService.listar().subscribe(data => {
          this.usuarioService.usuarioCambio.next(data);
          this.usuarioService.mensajeCambio.next('Se modificó la sucursal correctamente');
        });
      });
    } else {
      this.usuarioService.registrar(usua).subscribe(data => {
        this.usuarioService.listar().subscribe(data => {
          this.usuarioService.usuarioCambio.next(data);
          this.usuarioService.mensajeCambio.next('Se registró el usuario correctamente');
        });
      });
    }

    this.router.navigate(['usuario']);
  }

  initForm() {
    if (this.edicion) {      
  
      this.usuarioService.listarPorId(this.cod_usuario).subscribe(data => {
        this.form = new FormGroup({
          'cod_usuario': new FormControl(data.cod_usuario),
          'nombre': new FormControl(data.nombre),
          'user': new FormControl(data.user),
          'password': new FormControl(data.password),
          'sucursal.cod_sucursal': new FormControl(data.sucursal.cod_sucursal)

        });
      });
    }
  }

}
