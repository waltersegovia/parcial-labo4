import { Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { terminoscondicionGuard } from './guards/terminoscondicion.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { authGuard } from './guards/auth.guard';
import { SalenHeladosComponent } from './pages/salen-helados/salen-helados.component';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login', 
        pathMatch: 'full',
        
      },
      {
        path: 'inicio',
        component: BienvenidoComponent,
        canActivate: [terminoscondicionGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'terminos',
        component: TerminosComponent,
      },
      {
        path: 'repartidor',
        loadChildren: () => import('./pages/repartidor/repartidor.module').then(m => m.RepartidorRoutingModule),
        canActivate: [authGuard]
      },
      {
        path: 'salenHelados',
        component: SalenHeladosComponent,
        canActivate: [authGuard, adminGuard]
      },
];


/****************************************************** */
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
// import { LoginComponent } from './pages/login/login.component';
// import { authGuard } from './guards/auth.guard';
// import { adminGuard } from './guards/admin.guard';
// import { SalenHeladosComponent } from './pages/salen-helados/salen-helados.component';
// import { RegisterComponent } from './pages/register/register.component';
// import { TerminosComponent } from './pages/terminos/terminos.component';
// import { terminoscondicionGuard } from './guards/terminoscondicion.guard';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'login', 
//     pathMatch: 'full',
    
//   },
//   {
//     path: 'inicio',
//     component: BienvenidoComponent,
//     canActivate: [terminoscondicionGuard],
//   },
//   {
//     path: 'login',
//     component: LoginComponent,
//   },
//   {
//     path: 'register',
//     component: RegisterComponent,
//   },
//   {
//     path: 'terminos',
//     component: TerminosComponent,
//   },
//   {
//     path: 'repartidor',
//     loadChildren: () => import('./pages/repartidor/repartidor.module').then(m => m.RepartidorModule),
//     canActivate: [authGuard]
//   },
//   {
//     path: 'salenHelados',
//     component: SalenHeladosComponent,
//     canActivate: [authGuard, adminGuard]
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }