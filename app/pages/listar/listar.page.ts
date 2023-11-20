import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { IAlumnos } from '../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage {

  alumnos:IAlumnos[]=[];
  numero : any;

  constructor(private alumnoService: ApiCrudService,
              private loadingCtrl : LoadingController,
              private alertcontroller: AlertController,
              private router : Router) { }

  
  ionViewWillEnter(){
  this.loadAlumnos();
  this.numero = sessionStorage.getItem('id');
  }

  async loadAlumnos(event?: InfiniteScrollCustomEvent){
    
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();


    this.alumnoService.listarAlumnos().subscribe(
      {
        next: resp=>{
          console.log(resp);
         loading.dismiss();
          let listString = JSON.stringify(resp)
          this.alumnos=JSON.parse(listString)
          event?.target.complete();
          console.log(this.alumnos);
          
        },
        error: err =>{
          console.log(err.error.message);
         loading.dismiss();
        }
      }
    
      )
  }
  cerrarSesion(){
    sessionStorage.clear();
    this.mensajeCerrar();
    this.router.navigateByUrl('/login');
  }
  async mensajeCerrar(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Graciaas!',
      message : 'Hasta la próxima! :D',
      buttons : ['OK']
    })
    alerta.present();
  }
 
}
