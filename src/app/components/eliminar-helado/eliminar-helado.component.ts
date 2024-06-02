// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-eliminar-helado',
//   standalone: true,
//   imports: [],
//   templateUrl: './eliminar-helado.component.html',
//   styleUrl: './eliminar-helado.component.css'
// })
// export class EliminarHeladoComponent {

// }
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import IHelado from '../../interfaces/helado';

@Component({
  selector: 'app-eliminar-helado',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './eliminar-helado.component.html',
  styleUrls: ['./eliminar-helado.component.css']
})
export class EliminarHeladoComponent {
  helado: FormGroup;
  @Input() loading02!: boolean;
  @Input() heladoSelecionado!: IHelado | null;
  @Output() eliminarHelado = new EventEmitter<IHelado>();

  constructor(private fb: FormBuilder) {
    this.helado = this.fb.group({
      id: ['',],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['', [Validators.required]],
      precio: ['', [Validators.required,this.validarNumero]],
      peso: ['', [Validators.required, Validators.min(250), Validators.max(1000),this.validarNumero]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['heladoSelecionado'] && this.heladoSelecionado) {
      this.helado.patchValue(this.heladoSelecionado);
    }
  }
  validarNumero(control: AbstractControl): object | null  {
    const num = control.value;
    const soloNumeros = /^\d+$/;
    if (!soloNumeros.test(num)) {
      return { soloNumeros: true };
    }
    return null;
  }
  eliminar(){
    this.eliminarHelado.emit(this.helado.value);
    this.helado.reset()
  }
}