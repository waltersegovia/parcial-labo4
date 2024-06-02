// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }
import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUsuario: FormGroup;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authUser: AuthService,
    private router: Router,
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login() {
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;
   console.log('entre')
    this.authUser
      .loginUser(email, password)
      .then((user) => {
        this.authUser.setUser(email, true);
        this.router.navigate(['inicio']);
      })
      .catch((error) => {
        console.log(error)
       
      });
  }

  quickAccess( email:string , password:string ) {
    this.loginUsuario.setValue({
      email: email,
      password: password
    });
  }
}