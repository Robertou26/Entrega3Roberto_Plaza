import { Component, OnInit } from '@angular/core';
import { Usuario, Usuarioalumno } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registraralumno',
  templateUrl: './registraralumno.page.html',
  styleUrls: ['./registraralumno.page.scss'],
})
export class RegistraralumnoPage implements OnInit {

  registroForm: FormGroup;

  nuevoUsuario: Usuarioalumno={
    username:'',
    password:'',
    correo:'',
    isactive:false
  }

  constructor(private alertcontroller:AlertController,
              private router: Router,
              private apicrud: ApiCrudService, 
              private fbuilder: FormBuilder,
              private toastcontroller: ToastController) { 
                this.registroForm = this.fbuilder.group({ 
                  'username': new FormControl("", [Validators.required, Validators.minLength(3)]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(8)]),
                  'correo': new FormControl("", Validators.required)
                })
              }

  ngOnInit() {
  }

  registrarse(){
    this.nuevoUsuario.username = this.registroForm.value.username;
    this.nuevoUsuario.password = this.registroForm.value.password;
    this.nuevoUsuario.correo= this.registroForm.value.correo;
    this.nuevoUsuario.isactive= true;
    this.apicrud.CrearUser(this.nuevoUsuario).subscribe();
    this.showToast('Usuario creado');
    this.router.navigateByUrl("/loginalumno");
  }
  async showToast(msg: any){
    const toast = await this.toastcontroller.create({
      message: msg,
      duration: 3000
    })
    toast.present();
  }
  async showmsg(msg: any){
    const toast = await this.toastcontroller.create({
      message: msg,
      duration: 3000
    })
    toast.present();
  }
}
