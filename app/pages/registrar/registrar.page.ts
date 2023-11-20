import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  registroForm: FormGroup;

  newUsuario: Usuario={
    username:'',
    password:'',
    role:'',
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
                  'rol': new FormControl("", Validators.required)
                })
              }

  ngOnInit() {
  }

  registrar(){
    this.newUsuario.username = this.registroForm.value.username;
    this.newUsuario.password = this.registroForm.value.password;
    this.newUsuario.role= this.registroForm.value.rol;
    this.newUsuario.isactive= true;
    this.apicrud.CrearUsuario(this.newUsuario).subscribe();
    this.showToast('Usuario creado');
    this.router.navigateByUrl("/login");
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
