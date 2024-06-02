// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tabla-repartidor',
//   standalone: true,
//   imports: [],
//   templateUrl: './tabla-repartidor.component.html',
//   styleUrl: './tabla-repartidor.component.css'
// })
// export class TablaRepartidorComponent {

// }
import { Component, Input, Output, EventEmitter } from '@angular/core';
import IRepartidor from '../../interfaces/repartidor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-repartidor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-repartidor.component.html',
  styleUrls: ['./tabla-repartidor.component.css']
})
export class TablaRepartidorComponent {
  @Input() repartidor!: IRepartidor[];
  @Output() repartidorSeleccionadoClick = new EventEmitter<IRepartidor>();

  repartidorSeleccionado(repartidor: IRepartidor) {
    this.repartidorSeleccionadoClick.emit(repartidor);
  }
}