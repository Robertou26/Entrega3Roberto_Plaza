import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-actualizaralumno',
  templateUrl: './actualizaralumno.page.html',
  styleUrls: ['./actualizaralumno.page.scss'],
})
export class ActualizaralumnoPage implements OnInit {

  nuevoUsuario={
    id:0,
    username:'',
    password:'',
    correo:'',
    isactive:false
  }

  constructor(private authservice: AuthService,
              private router: Router, 
              private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuarioById(usuarioID:number){
    this.authservice.BuscarUsuarioId(usuarioID).subscribe(
      (resp:any)=>{                 
        console.log(resp);
        this.nuevoUsuario={
          id: resp[0].id,
          username: resp[0].username,
          correo: resp[0].correo,
          password: resp[0].password,
          isactive: resp[0].isactive
        }
      }
      
    )
  }

  updateUsuario(){
    this.authservice.ActualizarUsuario(this.nuevoUsuario).subscribe();
    this.mostrarMensaje();
    this.router.navigateByUrl("/perfilalumno");
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usuario Actualizado ',
      message: 'Su información se ha modificado ' + this.nuevoUsuario.username,
      buttons: ['OK']
    });
    alerta.present();
  }
  cerrarSesion(){
    sessionStorage.clear();
    this.mensajeCerrar();
    this.router.navigateByUrl('/login');
  }
  async mensajeCerrar(){
    const alerta = await this.alertcontroller.create({ 
      header : 'F',
      message : 'Se ha cerrado su Sesion',
      buttons : ['OK']
    })
    alerta.present();
  }


}
