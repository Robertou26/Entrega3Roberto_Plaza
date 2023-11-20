import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuarioalumnos, Usuarios,Usuario } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  //Obtenemos toos los usuarios
  GetAllUsers():Observable<Usuarios>{
    return this.httpclient.get<Usuarios>(`${environment.apiUrl}/usuarios`);
  }
  //Obtenemos toos los usuarios por medio de su username
  //any se convierte en cualquier tipo de objeto
  GetUserById(codigo: any):Observable<Usuarios>
  {
    return this.httpclient.get<Usuarios>(`${environment.apiUrl}/usuarios/?username=${codigo}`);
  }
  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  BuscarUsuarioId(id: any):Observable<Usuarios>{
    return this.httpclient.get<Usuarios>(`${environment.apiUrl}/usuarios/?id${id}`);
  }
  ActualizarUsuario(usuario:any):Observable<Usuarios>{
    return this.httpclient.put<Usuarios>(`${environment.apiUrl}/usuarios/${usuario.id}`, usuario);
  }
  GetUsuarioById(codigo: any):Observable<Usuarioalumnos>
  {
    return this.httpclient.get<Usuarioalumnos>(`${environment.apiUrl}/usuarioalumnos/?username=${codigo}`);
  }
  UpdateUsuario(usuarioalumno:any):Observable<Usuarioalumnos>{
    return this.httpclient.put<Usuarioalumnos>(`${environment.apiUrl}/usuarioalumnos/${usuarioalumno.id}`, usuarioalumno);
  }
  BuscarAlumnousuarioId(id: any):Observable<Usuarioalumnos>{
    return this.httpclient.get<Usuarioalumnos>(`${environment.apiUrl}/usuarioalumnos/?id${id}`);
  }
  GetAlumnousuarioById(codigo: any):Observable<Usuarios>
  {
    return this.httpclient.get<Usuarios>(`${environment.apiUrl}/usuarios/?username=${codigo}`);
  }

}
