// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-salen-helados',
//   standalone: true,
//   imports: [],
//   templateUrl: './salen-helados.component.html',
//   styleUrl: './salen-helados.component.css'
// })
// export class SalenHeladosComponent {

// }
import { Component, OnInit } from '@angular/core';
//import IHelado from 'src/app/interfaces/helado';
//import { FirestoreService } from 'src/app/services/firestore.service';
import { ToastrService } from 'ngx-toastr';
import IHelado from '../../interfaces/helado';
import { FirestoreService } from '../../services/firestore.service';
import { ModificarHeladoComponent } from '../../components/modificar-helado/modificar-helado.component';
import { TableHeladosComponent } from '../../components/table-helados/table-helados.component';
import { CrearHeladoComponent } from '../../components/crear-helado/crear-helado.component';
import { EliminarHeladoComponent } from '../../components/eliminar-helado/eliminar-helado.component';

@Component({
  selector: 'app-salen-helados',
  standalone: true,
  imports: [ModificarHeladoComponent,TableHeladosComponent,CrearHeladoComponent,EliminarHeladoComponent],
  templateUrl: './salen-helados.component.html',
  styleUrls: ['./salen-helados.component.css'],
})
export class SalenHeladosComponent implements OnInit {
  loading: boolean = false;
  loading01: boolean = false;
  loading02: boolean = false;
  helados: IHelado[] = [];
  heladoSelecionado: IHelado | null = null;

  constructor(private fire: FirestoreService, private toastr: ToastrService) {}
  ngOnInit(): void {
    this.fire.getHelados().subscribe((data) => {
      this.helados = data;
    });
  }

  agregarHelado(helado: IHelado) {
    this.loading = true;
    this.fire
      .addHelado(helado)
      .then(() => {
        this.loading = false;
        this.toastr.success(
          'se agrego un helado correctamente',
          'Felicidades!'
        );
      })
      .catch((error) => {
        this.loading = false;
        this.toastr.error('Al crear un helado', 'Error!');
        console.log('error: ', error);
      });
  }
  heladoSeleccionado(helado: IHelado) {
    this.heladoSelecionado = helado;
  }
  modificarHelado(helado: IHelado) {
    this.loading01 = true;
    if (helado.id) {
      this.fire
        .updateHelado(helado.id, helado)
        .then(() => {
          this.loading01 = false;
          this.toastr.success('se Modifico correctamente', 'Modificado!');
        })
        .catch((error) => {
          this.loading01 = false;
          this.toastr.error('Al modificar un helado', 'Error!');
        });
    }
  }
  eliminarHelado(helado: IHelado) {
    try {
      this.loading02 = true;
      if (helado.id) {
        this.fire.delete(helado.id);
        this.loading02 = false;
        this.toastr.success('se elimino correctamente', 'Eliminado!');
      }
    } catch (error) {
      this.loading01 = false;
      this.toastr.error('Al modificar un helado', 'Error!');
    }
  }
}