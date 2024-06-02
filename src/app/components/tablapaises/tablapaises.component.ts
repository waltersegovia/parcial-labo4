// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tablapaises',
//   standalone: true,
//   imports: [],
//   templateUrl: './tablapaises.component.html',
//   styleUrl: './tablapaises.component.css'
// })
// export class TablapaisesComponent {

// }
import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { BanderasService } from '../../services/banderas.service';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tablapaises',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './tablapaises.component.html',
  styleUrls: ['./tablapaises.component.css']
})
export class TablapaisesComponent implements OnInit{
  botonSeleccionado: string | null = null;
  misBanderas: any[] | undefined;
  selecContinente: string = ''; 
  bandera: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  selectedCountry: any = null;
  @Input() pais: any;
  @Output() seleccionar = new EventEmitter<string>()
  
  constructor(private servBandea: BanderasService) {}

  ngOnInit(): void {
  }

  getDisplayedCountries(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.misBanderas?.slice(startIndex, endIndex) || [];
  }
  selectCountry(country: string) {
    this.seleccionar.emit(country)
    this.selectedCountry = country;
  }

  isSelected(country: string) {
    return this.selectedCountry === country;

  }
  filterCountriesByRegion(region: string): void {
    this.servBandea.getRegion(region).subscribe((banderas) => {
      this.misBanderas = banderas.slice(0, 3);
    });
  }
}