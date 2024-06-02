// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-table-helados',
//   standalone: true,
//   imports: [],
//   templateUrl: './table-helados.component.html',
//   styleUrl: './table-helados.component.css'
// })
// export class TableHeladosComponent {

// }
import { Component, EventEmitter, Input, Output } from '@angular/core';
import IHelado from '../../interfaces/helado';
import { CommonModule } from '@angular/common';
import { PrecioPipe } from '../../pipes/precio.pipe';

@Component({
  selector: 'app-table-helados',
  standalone: true,
  imports: [PrecioPipe,CommonModule],
  templateUrl: './table-helados.component.html',
  styleUrls: ['./table-helados.component.css']
})
export class TableHeladosComponent {
  @Input() helados!: IHelado[];
  @Input() heladoSelecionado!: IHelado | null;
  @Output() heladoSeleccionado = new EventEmitter<IHelado>();

  repartidorSeleccionado(helado: IHelado) {
    this.heladoSeleccionado.emit(helado);
  }
  isHeladoSeleccionado(helado: IHelado): boolean {

    return this.heladoSelecionado !== null && this.heladoSelecionado.id === helado.id;
  }
}