// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-terminos',
//   standalone: true,
//   imports: [],
//   templateUrl: './terminos.component.html',
//   styleUrl: './terminos.component.css'
// })
// export class TerminosComponent {

// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terminos',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.css']
})
export class TerminosComponent implements OnInit {
  userEmail: string = '';
  acceptedTerms: boolean = false;
  user: any;
  registrarUsuarios: FormGroup;

  constructor(private authService: AuthService, private router: Router,  private fb: FormBuilder, private toastr: ToastrService) {
    this.registrarUsuarios = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      check: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.user = this.authService.getUser();
  }
  submitForm() {
    console.log(this.user)
    const resul = this.registrarUsuarios.value;
    if(this.user.email !== resul.email){
      this.toastr.error('El email Ingresado no coinciden', 'Error');
      return 
    }
      this.authService.setUser(resul.mail, true);
      this.router.navigate(['/inicio']);
    
  }
}