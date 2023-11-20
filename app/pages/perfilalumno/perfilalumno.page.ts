import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfilalumno',
  templateUrl: './perfilalumno.page.html',
  styleUrls: ['./perfilalumno.page.scss'],
})
export class PerfilalumnoPage implements OnInit {

  usuarioalumno = {
    id:0,
    username: '',
    correo:'',
    password:'', 
    isactive: false
  }
  constructor(private authService: AuthService,
              private router: Router,
              private alertController: AlertController,
              private menuController: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getAlumnosuarioById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getAlumnosuarioById(usuarioID:number){
    this.authService.BuscarAlumnousuarioId(usuarioID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.usuarioalumno={
          id: resp[0].id,
          username: resp[0].username,
          correo: resp[0].role,
          password: resp[0].password,
          isactive: resp[0].isactive
        }
      }
    )
  }
  MostrarMenu(){
    this.menuController.open('first');

  }
  cerrarSesion(){
    sessionStorage.clear();
    this.mensajeCerrar();
    this.router.navigateByUrl('/login');
  }
  async mensajeCerrar(){
    const alerta = await this.alertController.create({ 
      header : 'F',
      message : 'Se ha cerrado su Sesion',
      buttons : ['OK']
    })
    alerta.present();
  }
}
