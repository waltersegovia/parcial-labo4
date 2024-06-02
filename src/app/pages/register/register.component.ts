// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {

// }
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FireErrorService } from '../../services/fire-error.service';
import { FirestoreService } from '../../services/firestore.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registrarUsuarios: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authUser: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private fireError: FireErrorService,
    private firestore: FirestoreService
  ) {
    this.registrarUsuarios = this.fb.group({
      nombre: ['', [Validators.required,]],
      rol: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required],
    });
  }

  ngOnInit() {}

  registrar() {
    const email = this.registrarUsuarios.value.email;
    const password = this.registrarUsuarios.value.password;
    const repetirpassword = this.registrarUsuarios.value.repetirPassword;
    const user = this.registrarUsuarios.value
    if (password !== repetirpassword) {
      this.toastr.error(
        'Las contraseñas ingresadas deben de ser la misma',
        'Error'
      );
      return;
    }
    this.loading = true;
    this.authUser
      .registerUser(email, password)
      .then( async() => {
        this.loading = false;
        await this.firestore.addUsuarios(user);
        this.toastr.success(
          'El usuario fue registrado con exito!',
          'Usuario registrado'
        );
        this.authUser.setUser(email, false); 
        this.router.navigate(['/terminos']);
      })
      .catch((error) => {
        this.loading = false;
        console.error('Error registering user:', error);
        this.toastr.error(this.fireError.codeError(error.code), 'Error');
      });
  }
}