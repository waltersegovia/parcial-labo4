// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-card-pais-repartidor',
//   standalone: true,
//   imports: [],
//   templateUrl: './card-pais-repartidor.component.html',
//   styleUrl: './card-pais-repartidor.component.css'
// })
// export class CardPaisRepartidorComponent {

// }

import { Component, Input } from '@angular/core';
import { repartidorPais } from '../../pages/repartidor/detalles/detalles.component';


@Component({
  selector: 'app-card-pais-repartidor',
  standalone: true,
  imports: [],
  templateUrl: './card-pais-repartidor.component.html',
  styleUrls: ['./card-pais-repartidor.component.css']
})
export class CardPaisRepartidorComponent {
  @Input() repartidorPais!: repartidorPais;
}
