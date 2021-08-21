import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente } from '../_model/paciente';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  pacienteCambio = new Subject<Paciente[]>();
  mensajeCambio = new Subject<string>();

  url: string = `${environment.HOST}/pacientes`; 

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Paciente[]>(this.url);
  }

  listarPorId(idPaciente: number) {
    return this.http.get<Paciente>(`${this.url}/${idPaciente}`);
  }

  registrar(paciente: Paciente) {
    return this.http.post(this.url, paciente);
  }

  modificar(paciente: Paciente) {
    return this.http.put(this.url, paciente);
  }

  eliminar(idPaciente: number) {
    return this.http.delete <Paciente>(`${this.url}/${idPaciente}`);
  }
}
