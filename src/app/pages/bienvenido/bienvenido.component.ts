// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-bienvenido',
//   standalone: true,
//   imports: [],
//   templateUrl: './bienvenido.component.html',
//   styleUrl: './bienvenido.component.css'
// })
// export class BienvenidoComponent {

// }
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
//import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [],
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  userData!: any;
  constructor(private github: GithubService) {}
  ngOnInit(): void {
    this.github.todos().subscribe((data) => {
      this.userData = data;
    });
  }
}