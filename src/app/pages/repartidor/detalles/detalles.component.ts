// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-detalles',
//   standalone: true,
//   imports: [],
//   templateUrl: './detalles.component.html',
//   styleUrl: './detalles.component.css'
// })
// export class DetallesComponent {

// }
import { Component, OnInit } from '@angular/core';
import IRepartidor from '../../../interfaces/repartidor';
import { FirestoreService } from '../../../services/firestore.service';
import { BanderasService } from '../../../services/banderas.service';
import { CardRepartidorComponent } from '../../../components/card-repartidor/card-repartidor.component';
import { RepartidorRoutingModule } from '../repartidor.module';
import { TablaRepartidorComponent } from '../../../components/tabla-repartidor/tabla-repartidor.component';
import { CardPaisRepartidorComponent } from '../../../components/card-pais-repartidor/card-pais-repartidor.component';

// import IRepartidor from 'src/app/interfaces/repartidor'; 

// import { BanderasService } from 'src/app/services/banderas.service';
// import { FirestoreService } from 'src/app/services/firestore.service';
export type repartidorPais = {
  usuario: string;
  nombrePais: string;
  flag: string;
  region: string;
  languages: string[];
};
@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CardRepartidorComponent,TablaRepartidorComponent,CardPaisRepartidorComponent],
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  repartidores!: IRepartidor[];
  repartidorPais!: repartidorPais;
  repartidorDetalles!: IRepartidor;

  constructor(
    private firestore: FirestoreService,
    private bandera: BanderasService
  ) {}

  ngOnInit(): void {
    this.firestore.getRepartidor().subscribe((data) => {
      this.repartidores = data;
    });
  }
   onRepartidorSeleccionado(repartidor: IRepartidor) {
    this.verPais(repartidor);
    this.verMas(repartidor)
  }
  verPais(repartidor: IRepartidor) {
    this.bandera.pais(repartidor.pais).subscribe((data) => {
      const { name, region, flags, languages } = data[0];
      const idiomas: string[] = Object.values(languages);
      this.repartidorPais = {
        usuario: repartidor.nombre,
        nombrePais: name.common,
        flag: flags.png,
        region: region,
        languages: idiomas,
      };
    });
  }
  verMas(repartidor: IRepartidor) {
    this.repartidorDetalles = repartidor;
  }
  
}