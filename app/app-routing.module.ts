import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
   
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'listar',
    loadChildren: () => import('./pages/listar/listar.module').then( m => m.ListarPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'actualizar/:id',
    loadChildren: () => import('./pages/actualizar/actualizar.module').then( m => m.ActualizarPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'eliminar/:id',
    loadChildren: () => import('./pages/eliminar/eliminar.module').then( m => m.EliminarPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'perfilactualizar/:id',
    loadChildren: () => import('./pages/perfilactualizar/perfilactualizar.module').then( m => m.PerfilactualizarPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),
    canActivate:[AutorizadoGuard] 
  },
  {
    path: 'eleccion',
    loadChildren: () => import('./pages/eleccion/eleccion.module').then( m => m.EleccionPageModule)
  },
  {
    path: 'registraralumno',
    loadChildren: () => import('./pages/registraralumno/registraralumno.module').then( m => m.RegistraralumnoPageModule)
  },
  {
    path: 'loginalumno',
    loadChildren: () => import('./pages/loginalumno/loginalumno.module').then( m => m.LoginalumnoPageModule)
  },
  {
    path: 'eleccionlogin',
    loadChildren: () => import('./pages/eleccionlogin/eleccionlogin.module').then( m => m.EleccionloginPageModule)
  },
  {
    path: 'actualizaralumno/:id',
    loadChildren: () => import('./pages/actualizaralumno/actualizaralumno.module').then( m => m.ActualizaralumnoPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'perfilalumno',
    loadChildren: () => import('./pages/perfilalumno/perfilalumno.module').then( m => m.PerfilalumnoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
