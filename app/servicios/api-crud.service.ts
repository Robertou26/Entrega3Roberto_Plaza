import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAlumnos, Usuario, Usuarios } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { IAlumno } from '../pages/interfaces/interfaces';
import { Palabra } from '../pages/interfaces/interfaces';
import { Palabras } from '../pages/interfaces/interfaces';
import { Usuarioalumnos,Usuarioalumno } from '../pages/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

  listarAlumnos():Observable<IAlumnos>{
    return this.httpclient.get<IAlumnos>(`${environment.apiUrl}/alumnos`);
  }

  CrearAlumno(newAlumno: IAlumno): Observable<IAlumno>{
    return this.httpclient.post<IAlumnos>(`${environment.apiUrl}/alumnos`, newAlumno);
  }

  BuscarAlumnoId(id:number):Observable<IAlumnos>{
    return this.httpclient.get<IAlumnos>(`${environment.apiUrl}/alumnos/?id=${id}`);
  }

  ActualizarAlumno(alumno:any):Observable<IAlumnos>{
    return this.httpclient.put<IAlumnos>(`${environment.apiUrl}/alumnos/${alumno.id}`, alumno);
  }

  EliminarAlumno (alumno:any): Observable<IAlumnos>{
    return this.httpclient.delete<IAlumnos>(`${environment.apiUrl}/alumnos/${alumno.id}`);
  }
  CrearUsuario (newUsuario: Usuario): Observable<Usuario>{
    return this.httpclient.post<Usuarios>(`${environment.apiUrl}/usuarios`, newUsuario);
  }
  CrearPalabra (newPalabra: Palabra): Observable<Palabra>{
    return this.httpclient.post<Palabras>(`${environment.apiUrl}/palabras`, newPalabra);
}
CrearUser (nuevoUsuario: Usuarioalumno): Observable<Usuarioalumno>{
  return this.httpclient.post<Usuarioalumnos>(`${environment.apiUrl}/usuarioalumnos`, nuevoUsuario);
}
}