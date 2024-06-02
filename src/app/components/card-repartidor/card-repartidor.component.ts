// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-card-repartidor',
//   standalone: true,
//   imports: [],
//   templateUrl: './card-repartidor.component.html',
//   styleUrl: './card-repartidor.component.css'
// })
// export class CardRepartidorComponent {

// }
import { Component, Input } from '@angular/core';
import IRepartidor from '../../interfaces/repartidor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-repartidor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-repartidor.component.html',
  styleUrls: ['./card-repartidor.component.css']
})
export class CardRepartidorComponent {
  @Input() actorDetalles!: IRepartidor;
}