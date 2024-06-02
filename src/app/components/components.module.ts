import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { CommonModule } from "@angular/common";
import { PrecioPipe } from "../pipes/precio.pipe";
import { CardPaisRepartidorComponent } from "./card-pais-repartidor/card-pais-repartidor.component";
import { CardRepartidorComponent } from "./card-repartidor/card-repartidor.component";
import { CrearHeladoComponent } from "./crear-helado/crear-helado.component";
import { EliminarHeladoComponent } from "./eliminar-helado/eliminar-helado.component";
import { LayoutComponent } from "./layout/layout.component";
import { ModificarHeladoComponent } from "./modificar-helado/modificar-helado.component";
import { TablaRepartidorComponent } from "./tabla-repartidor/tabla-repartidor.component";
import { TablapaisesComponent } from "./tablapaises/tablapaises.component";
import { TableHeladosComponent } from "./table-helados/table-helados.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { NgModule } from "@angular/core";



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class ComponentsModule { }

/***************************************** */
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TablapaisesComponent } from './tablapaises/tablapaises.component';
// import { RouterModule } from '@angular/router';
// import { LayoutComponent } from './layout/layout.component';
// import { TablaRepartidorComponent } from './tabla-repartidor/tabla-repartidor.component';
// import { CardPaisRepartidorComponent } from './card-pais-repartidor/card-pais-repartidor.component';
// import { CardRepartidorComponent } from './card-repartidor/card-repartidor.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CrearHeladoComponent } from './crear-helado/crear-helado.component';
// import { ModificarHeladoComponent } from './modificar-helado/modificar-helado.component';
// import { EliminarHeladoComponent } from './eliminar-helado/eliminar-helado.component';
// import { TableHeladosComponent } from './table-helados/table-helados.component';
// import { PrecioPipe } from '../pipes/precio.pipe';
@NgModule({
  declarations: [
    // TablapaisesComponent,
    // LayoutComponent,
    // TablaRepartidorComponent,
    //CardPaisRepartidorComponent,
    // CardRepartidorComponent,
    // CrearHeladoComponent,
    // ModificarHeladoComponent,
    // EliminarHeladoComponent,
    //TableHeladosComponent,
    //PrecioPipe
  ],
  exports: [
    // TablapaisesComponent,
    // LayoutComponent,
    //CardPaisRepartidorComponent,
    // CardRepartidorComponent,
    // TablaRepartidorComponent,
    // CrearHeladoComponent,
    // ModificarHeladoComponent,
    // EliminarHeladoComponent,
    //TableHeladosComponent
  ],
  imports: [CommonModule, RouterModule,  FormsModule, ReactiveFormsModule],
})
export class ComponentsModule {}