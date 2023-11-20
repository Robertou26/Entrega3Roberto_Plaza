import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';



@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage  {
 
  nombre:any;

  constructor(private saludo: ApiCrudService,
              private loadingCtrl : LoadingController) {

                this.nombre = sessionStorage.getItem('username');
               }

  
  ionViewWillEnter(){
  }
 
}

