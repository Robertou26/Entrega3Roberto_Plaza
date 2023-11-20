import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-loginalumno',
  templateUrl: './loginalumno.page.html',
  styleUrls: ['./loginalumno.page.scss'],
})
export class LoginalumnoPage implements OnInit {

  userdata: any;

  loginForm: FormGroup;

  usuario={
    id: 0,
    username:"",
    password:"",
    correo:"",
    isactive: false
  }

  constructor(private authservice: AuthService,
              private router: Router,
              private alertcontroller: AlertController,
              private toastcontroller: ToastController,
              private fbuilder: FormBuilder) {
                this.loginForm = this.fbuilder.group({
                  'username' : new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'password' : new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'correo' : new FormControl("", [Validators.required])
                })
               }

  ngOnInit() {
  }

  login(){
    if (this.loginForm.valid){
      this.authservice.GetUsuarioById(this.loginForm.value.username).subscribe(resp=>{
        this.userdata = resp;
        console.log(this.userdata);
        if (this.userdata.length >0)
        {     //si es mayor a cero, se ha encontrado el usuario 
          this.usuario ={
            id : this.userdata[0].id,
            username: this.userdata[0].username,
            password: this.userdata[0].password,
            correo: this.userdata[0].correo,
            isactive: this.userdata[0].isactive
          }
          if (this.usuario.password === this.loginForm.value.password)
          {
            if (this.usuario.isactive)
            { 
            //iniciamos session
            sessionStorage.setItem('username', this.usuario.username);
            sessionStorage.setItem('correo', this.usuario.correo);
            sessionStorage.setItem('ingresado', 'true');
            this.showToast('Sesión iniciada');
            this.router.navigateByUrl("/perfilalumno");
            }
            else{
              this.UserInactivo();
            }
          }
          else{
            this.Error();
          }
        }
        else{
          this.NoExiste();
          this.loginForm.reset();
        }
      })
    }
  }//fin de login

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
  async UserInactivo(){
    const alerta = await this.alertcontroller.create({ 
      header: 'Error..',
      message: 'Usuario inactivo..',
      buttons: ['Ok']
     });
     alerta.present();
     return;
  }

  async Error(){
    const alerta = await this.alertcontroller.create({ 
      header: 'Error..',
      message: 'Revise sus credenciales..',
      buttons: ['Ok']
     });
     alerta.present();
     return;
  }

  async NoExiste(){
    const alerta = await this.alertcontroller.create({ 
      header: 'Error..',
      message: 'Usuari@ debe registrarse..',
      buttons: ['Ok']
     });
     alerta.present();
     return;
  }
}
