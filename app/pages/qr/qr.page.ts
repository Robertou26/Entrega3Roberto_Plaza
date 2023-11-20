import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Palabra } from '../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  public mensaje: string;

  //npm install -D @types/qrcode --save

  data={
    texto:''
  }

  nombre: any;

  newPalabra:Palabra={
    username:'',
    texto:''
  }

  constructor(private apicrud: ApiCrudService,
              private alertcontroller: AlertController,
              private router: Router) { 
    this.mensaje='Hola Mundo';
    this.nombre = sessionStorage.getItem('username');
   }

  ngOnInit() {
  }

  generarQr(){
    this.mensaje = this.data.texto;
    this.newPalabra.username = this.nombre;
    this.newPalabra.texto = this.mensaje;
    this.apicrud.CrearPalabra(this.newPalabra).subscribe();
    this.mostrarMensaje();
    this.data.texto='';
  }

  async mostrarMensaje(){
    const alerta= await this.alertcontroller.create({
      header: "Palabra creada!",
      message: "Se ha almacenado su Qr",
      buttons: ['Ok']
    })
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