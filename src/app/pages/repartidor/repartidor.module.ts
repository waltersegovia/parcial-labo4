// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class RepartidorModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './alta/alta.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alta', 
    pathMatch: 'full'
  },
  {
    path: 'alta',
    component: AltaComponent,
  },
  {
    path: 'detalle',
    component: DetallesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepartidorRoutingModule {}