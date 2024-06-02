// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-crear-helado',
//   standalone: true,
//   imports: [],
//   templateUrl: './crear-helado.component.html',
//   styleUrl: './crear-helado.component.css'
// })
// export class CrearHeladoComponent {

// }
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import IHelado from '../../interfaces/helado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-helado',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './crear-helado.component.html',
  styleUrls: ['./crear-helado.component.css']
})
export class CrearHeladoComponent {
  helado: FormGroup;
  @Input() loading!: boolean;
  @Output() agregarHelado = new EventEmitter<IHelado>();

  constructor(private fb: FormBuilder) {
    this.helado = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['', [Validators.required]],
      precio: ['', [Validators.required,this.validarNumero]],
      peso: ['', [Validators.required, Validators.min(250), Validators.max(1000),this.validarNumero]],
    });
  }

  validarNumero(control: AbstractControl): object | null  {
    const num = control.value;
    if (!num) {
      return null;
    }
    const soloNumeros = /^\d+$/;
    if (!soloNumeros.test(num)) {
      return { soloNumeros: true };
    }
    return null;
  }
  addHelado(){
    this.agregarHelado.emit(this.helado.value);
    this.helado.reset()
  }
}