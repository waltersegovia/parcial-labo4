// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'parcial-labo4';
// }
import { Component } from '@angular/core';
import { Item, LayoutComponent } from './components/layout/layout.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent,RouterOutlet,RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Item[] = [
    {
      title: 'inicio',
      link: '/',
      active: true,
    },
    {
      title: 'login',
      link: '/login',
      active: false
    },
    {
      title: 'repartidor',
      link: '/repartidor',
      active: false,
      children: [
        {
          title: 'Alta Repartidor',
          link: '/repartidor/alta',
          active: true,
        },
        {
          title: 'Detalle De Repartidor',
          link: '/repartidor/detalle',
          active: true,
        },
      ]
    },
    {
      title: 'Salen Helados',
      link: '/salenHelados',
      active: false
    },
  ]
}