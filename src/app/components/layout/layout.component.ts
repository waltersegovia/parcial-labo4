// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-layout',
//   standalone: true,
//   imports: [],
//   templateUrl: './layout.component.html',
//   styleUrl: './layout.component.css'
// })
// export class LayoutComponent {

// }
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

export type Item = {
  title: string;
  link: string;
  active: boolean;
  children?: Item[];
};
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  @Input() items: Item[] = [];

  constructor(public authUser: AuthService, private router: Router) {}
  cerrarSesion() {
    console.log('entro')
    this.authUser.logout();
    this.router.navigate(['/inicio']);
  }

}